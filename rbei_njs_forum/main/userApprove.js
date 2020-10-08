"use strict";
const express = require('express');
const router = express.Router();
const triggerEmail = require('../email/email.js');
const auth = require('../middleware/auth');

router.post('/approve', auth, async (req, res) => {

    if (req.rbei_access_role != 'A') return res.status(401).send({
        msg: 'unauthorized'
    });
    let email = req.body.email;
    let status = req.body.status;

    let query = "update RBEI_NODE_FORUM_T_MD_USER set STATUS='" + status + "' where EMAIL_ID='" + email + "'";
    console.log(query)
    try {
        let client = req.db
        let result = await client.exec(query)

        let content = {}
        content.to = email
        if (status === 'A') {
            content.subject = '[RBEI-SbS Forum] Portal Access'
            content.html = `<p>You have been granted access to the portal.<p><br>
        <p>Kindly login using the link<p>
        <a href="https://rbei-cloud-foundry-dev-rb-sbs-forum.cfapps.eu10.hana.ondemand.com">Access Portal</a>`
        } else {
            content.subject = '[RBEI-SbS Forum] Portal Access'
            content.html = `<p>Your request has been rejected by the administrator.<p><br>`
        }

        let temail = await triggerEmail(content)
        res.send({ msg: 'User request processed successfully' })
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router;