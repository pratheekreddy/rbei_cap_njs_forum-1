"use strict";
var express = require('express');
var router = express.Router();
const authentication = require('../middleware/auth')

router.get('/', authentication, async(req, res) => {
	let search=req.query.search;
	let client=req.db;
	let limit=req.query.limit;
	if(!limit){
		limit=7;
	}	
	let query="select * from (SELECT *,score() as score FROM RBEI_NODE_FORUM_SESSION_TOPICS WHERE CONTAINS (SUB_TOPIC, '"+search+"', FUZZY (0.7,'similarCalculationMode=searchCompare')) order by score desc) as a inner join RBEI_NODE_FORUM_SESSIONS as b on a.session_id=b.id";
	
	let session_id=await client.exec(query)
	if(session_id.length>0){
	let ids=[];
	for(let i=0;i<session_id.length;i++){
		ids.push(session_id[i].SESSION_ID)
		session_id[i].TOPICS=[]
		let TOPICS={
					SUB_TOPIC_ID: session_id[i].SUB_TOPIC_ID,
					USER_EMAIL:session_id[i].USER_EMAIL,
					SUB_TOPIC: session_id[i].SUB_TOPIC,
					FILE_01: session_id[i].FILE_01,
					FILE_02: session_id[i].FILE_02,
					FILE_03: session_id[i].FILE_03,
					SESSION_ID: session_id[i].SESSION_ID
					}
					// console.log(topics)
			session_id[i].TOPICS.push(TOPICS)
	}
	console.log(session_id[0].topics)
	console.log(ids.toString());
	let query2=""
	res.send(session_id)
	}
	else{
		res.send([])
	}
})

module.exports = router;