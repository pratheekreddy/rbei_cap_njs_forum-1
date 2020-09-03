"use strict";
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth')

router.get('/postcard', authentication, (req,res)=>{
	//request=null
	// response=[{topic,date,description,presenters_and_topic}]
});

router.get('/fileslist', authentication, (req,res)=>{
	//request=session_id
	// response=[{filename,filekey,uploaded by,uploaded on}]
});

module.exports = router;