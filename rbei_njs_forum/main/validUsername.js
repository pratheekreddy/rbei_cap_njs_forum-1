"use strict";
const express = require('express');
const router = express.Router();

router.get('/valid', async (req, res) => {
    let username = req.query.username;
    try {
        const client = req.db;
        const query = 'SELECT USERNAME FROM RBEI_NODE_FORUM_T_MD_USER WHERE USERNAME = ?';
        const result = await client.exec(query, [username]);
        if (result.length) return res.send({
            valid: false
        });
        return res.send({
            valid: true
        });
    } catch (error) {
        res.send(error)
    }

});

module.exports = router;