const nodemailer = require('nodemailer');
const express = require('express')
const router = new express.Router()
const client = require("@sap/hana-client");
const hanaOptions=require('../server.js');
const authentication = require('../middleware/auth') 
// console.log(hanaOptions);
router.get('/', async(req, res) => {
	try {
		// const {
		// 	title,
		// 	description,
		// 	date,
		// 	topics
		// } = req.body
		let session_id=req.query.session_id;
		let agendaq="select * from RBEI_NODE_FORUM_SESSION_TOPICS a inner join RBEI_NODE_FORUM_SESSIONS b on a.session_id=b.id where a.session_id='"+session_id+"'"
		let client = req.db
		let agendaResults=await client.exec(agendaq)
		console.log(agendaResults)
		// insertAgenda(req.body)
		let query = `SELECT EMAIL_ID FROM RBEI_NODE_FORUM_T_MD_USER`;
        console.log('query ', query )
		let mailSubscribers = await client.exec(query)
        console.log('mailSubscribers ', mailSubscribers )
		let topics=[]
		for(let i=0;i<agendaResults.length;i++){
			topics.push({
				title:agendaResults[i].SUB_TOPIC,
				presenter:agendaResults[i].USER_EMAIL
			})
		}
		// console.log(topics)
		const emailInformation = {
			title:agendaResults[0].TITLE,
			description:agendaResults[0].DESC,
			date:agendaResults[0].DATE,
			topics,
			mailSubscribers
		}
        console.log('email information ', emailInformation)
		let info = await sendAgendaEmail(emailInformation)
        console.log('info ', info)
		return res.send(info)
	} catch (error) {
		console.log(error)
		res.status(500).send(error)
	}

})

const sendAgendaEmail = async(emailContent) => {

	const {
		title,
		description,
		date,
		topics,
		mailSubscribers
	} = emailContent
	let to = mailSubscribers.map(subscriber => subscriber.EMAIL)
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'rbei.node.js.forum@gmail.com',
			pass: 'Bosch@123'
		}
	})
	let topicPresenter = ''
	topics.forEach(topic => {
		topicPresenter += `<tr>
							<td>${topic.title}</td>
							<td>${topic.presenter}</td>
						 </tr>`
	})

	let html =
		`
				<h4>Hi All,</h4>
				<h3>Agenda for ${date}</h3>
				<h4>Title - ${title}</h4>
				<h4>Description -${description}</h4>
				<table border = "1" >
				  <tr>
				    <th style = "text-align : left">Topic</th>
				    <th style = "text-align : left">Presenter</th>
				  </tr>
		`

	html = html.concat(topicPresenter, '</table><footer><h4>Thanks and Best Regards!</h4><p>P.S - This is an auto generated email. Please do not reply.</p></footer>')
	let mailOptions = {
		from: '"Node.js Forum " <rbei.node.js.forum@gmail.com>',
		to: to,
		subject: 'Node.js Forum<no-reply>',
		html: html
	}
	let info = await transporter.sendMail(mailOptions);
	return info
}

let json2array=function (json){
	let result;
    let result1=[];
    for(let i=0;i<json.length;i++){
    result = [];
    let temp=json[i];
    var keys = Object.keys(temp);
    keys.forEach(function(key){
        result.push(temp[key]);
    });
    result1.push(result);
    }
    return result1;
};

let insertAgenda=function(agenda){
	let {title,description,date,topics}=agenda;
	let session_id='S'+Date.now();
	let created_by='krishnan.gautam@in.bosch.com'
	
	let sub_topics=json2array(topics);
	let dbConn = client.createConnection();
	let query="insert into RBEI_NODE_FORUM_T_MD_SESSION (SESSION_ID,DATE,TITLE,DESC,S_CREATED_BY,S_CREATED_ON) VALUES ('"+session_id+"','"+date+"','"+title+"','"+description+"','"+created_by+"',CURRENT_TIMESTAMP)";
	// console.log(query)
	
	let query2="insert into RBEI_NODE_FORUM_T_MD_SESSION_USER (SUB_TOPIC,USER_EMAIL,SESSION_ID,SUB_TOPIC_ID) VALUES(?,?,?,?)";
	
	for(let i=0;i<topics.length;i++){
		sub_topics[i].push(session_id);
		sub_topics[i].push('ST'+i);
	}
	// console.log(sub_topics)
    let dbConnParams = {
        serverNode : hanaOptions.hana.host + ":" + hanaOptions.hana.port,
        uid : hanaOptions.hana.user,
        pwd : hanaOptions.hana.password,
        encrypt: 'true',  
        ssltruststore : hanaOptions.hana.certificate,
        CURRENTSCHEMA : hanaOptions.hana.schema
        };
    dbConn.connect(dbConnParams, async function (error) {
    	if(error){
    		return error;
    	}
    	try{
    		
    	let statement=dbConn.prepare(query);
    	let result = await statement.exec();
    	
    	let statement2=dbConn.prepare(query2);
    	let result2=await statement2.exec(sub_topics);
    	
    	return {status:true};
    	}catch(e){
    		console.log(e);
    		return e;
    	}
    });
}

module.exports = router