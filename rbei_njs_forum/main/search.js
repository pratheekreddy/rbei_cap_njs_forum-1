"use strict";
const express = require('express');
const router = express.Router();

router.get('/search',async(req,res)=>{
    console.log('search')
    let search=req.query.search;
    let query="select top 7 * from RBEI_NODE_FORUM_SESSION_TOPICS where CONTAINS((SUB_TOPIC), '"+search+"', FUZZY(0.7,'similarCalculationMode=searchCompare'))";
    let client=req.db;

    let result= await client.exec(query)
    res.send(result);
})

module.exports = router;