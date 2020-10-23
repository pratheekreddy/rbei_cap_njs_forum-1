const nodemailer = require('nodemailer');
const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/publishagenda', auth, async (req, res) => {
    try {
        if (req.rbei_access_role != 'A') return res.status(401).send({
            msg: 'unauthorized'
        });
        let session_id = req.query.session_id;
        let agendaq = "select * from RBEI_NODE_FORUM_SESSION_TOPICS a inner join RBEI_NODE_FORUM_SESSIONS b on a.session_id=b.id where a.session_id='" + session_id + "'"
        let client = req.db
        let agendaResults = await client.exec(agendaq)
        console.log(agendaResults)
        // insertAgenda(req.body)
        let query = `SELECT EMAIL_ID FROM RBEI_NODE_FORUM_T_MD_USER WHERE STATUS = 'A'`;
        console.log('query ', query);
        let mailSubscribers = await client.exec(query)
        console.log('mailSubscribers ', mailSubscribers)
        let topics = [];
        const title = [];
        for (let i = 0; i < agendaResults.length; i++) {
            topics.push({
                title: agendaResults[i].SUB_TOPIC,
                presenter: agendaResults[i].USER_EMAIL
            })
            title.push(agendaResults[i].SUB_TOPIC);
        }
        // console.log(topics)
        const emailInformation = {
            title: title.toString(),
            description: agendaResults[0].DESC,
            date: agendaResults[0].DATE,
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

const sendAgendaEmail = async (emailContent) => {

    const {
        title,
        description,
        date,
        topics,
        mailSubscribers
    } = emailContent
    let to = mailSubscribers.map(subscriber => subscriber.EMAIL_ID.trim())
    console.log(to)
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
				<h4>Description -${description}</h4>
				<table border = "1" >
				  <tr>
				    <th style = "text-align : left">Topic</th>
				    <th style = "text-align : left">Presenter</th>
				  </tr>
		`

    html = html.concat(topicPresenter, '</table><footer><h4>Thanks and Best Regards!</h4><p>P.S - This is an auto generated email. Please do not reply.</p></footer>')
    let mailOptions = {
        from: '"RBEI-SbS Forum <DO NOT REPLY> " <rbei.node.js.forum@gmail.com>',
        to: to,
        subject: `[RBEI-SbS Forum] Session: ${title}`,
        html: html
    }
    let info = await transporter.sendMail(mailOptions);
    return info
}

module.exports = router