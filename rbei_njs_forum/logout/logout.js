const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/logout', auth, async (req, res) => {
    try {
        let email = req.email;
        let query = `UPDATE RBEI_NODE_FORUM_T_MD_USER
                    SET GEN_RBEI_TOKEN = NULL, GEN_RBEI_TOKEN_TMSTMP = NULL
                    WHERE EMAIL_ID = ?`;
        const client = req.db;
        let result = await client.exec(query, [email]);
        console.log('result ', result);
        res.send({
            msg: "successfully logged out"
        });
    } catch (error) {
        res.status(500).send();
    }

});

module.exports = router;