"use strict";
var express = require('express');
var router = express.Router();
const triggerEmail=require('../email/email.js')

router.get('/otp',async(req,res)=>{
	try{
	let userid=req.query.user
	if(userid===undefined){
		let userid=req.query.username
	}
	let userQ="select EMAIL_ID,STATUS from RBEI_NODE_FORUM_T_MD_USER where (EMAIL_ID='"+userid+"' or USERNAME='"+userid+"')"
	console.log(userQ)
	let client=req.db;
	
	let user=await client.exec(userQ)
	if(user.length===0){
		return res.status(400).send({ msg : "User not registered "})
	}
	if(user[0].STATUS!='A'){
		return res.status(400).send({ msg : "User is not approved. Please contact Adminstrator!"})
	}
	//TODO: generate, store and send otp
	let otp=Math.round(Math.random() * (900000 - 100000) + 100000);
	let insertQ="update RBEI_NODE_FORUM_T_MD_USER SET GEN_OTP="+otp+",GEN_OTP_TMSTMP=CURRENT_TIMESTAMP where EMAIL_ID='"+user[0].EMAIL_ID+"'"
	console.log(insertQ)
	let content={}
	content.to=user[0].EMAIL_ID
	content.subject='Login OTP'
	content.html=`<h3>your otp is ${otp} valid till 30 minutes<h3>`
	let insert= await client.exec(insertQ)
	if(insert===1){
		let temail=await triggerEmail(content)
		console.log(temail)
		res.status(200).send({ msg:"OTP sent to your registered email id!"})
	}
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
})

module.exports=router