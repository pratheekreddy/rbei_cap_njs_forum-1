const express = require('express')
const router = express.Router()
const triggerEmail = require('../email/email.js')

router.post('/signup', async (req, res) => {

    let { email, idno, name, ntid, dept, username } = req.body
    let client = req.db;
    if (!email.endsWith('bosch.com')) {
        return res.status(400).send({ msg: 'not a bosch user' })
    }
    let usernameQ = "select USERNAME from RBEI_NODE_FORUM_T_MD_USER where USERNAME='" + username + "'"
    try {
        let usernamelist = await client.exec(usernameQ)

        if (usernamelist.length > 0) {
            return res.status(400).send({ msg: "user name already exist" })
        }

        let userinsertQ = "insert into RBEI_NODE_FORUM_T_MD_USER (EMAIL_ID,IDNO,NAME,NTID,DEPT,USERNAME,TYPE,REGD_ON,STATUS) values('" + email + "','" + idno + "','" + name + "','" + ntid + "','" + dept + "','" + username + "','U',CURRENT_TIMESTAMP,'')"

        let result = await client.exec(userinsertQ)
        // console.log(result)
        let adminsQ = "select EMAIL_ID FROM RBEI_NODE_FORUM_T_MD_USER where TYPE='A'";
        let admin = await client.exec(adminsQ)
        let admins = []
        // console.log(admin)
        for (let i = 0; i < admin.length; i++) {
            // console.log(admin[i].EMAIL_ID)
            admins.push(admin[i].EMAIL_ID)
        }
        let content = {}
        content.to = admins.toString();
        content.subject = '[RBEI-SbS Forum] New User registration';
        content.html = "<p>" + name + " has registered to the portal with " +  email + "</p><p>Please validate the user.</p><a href='https://rbei-cloud-foundry-dev-rb-sbs-forum.cfapps.eu10.hana.ondemand.com/aprove'>Access Portal</a>";
        // console.log(content)
        let temail = await triggerEmail(content)
        // console.log(temail)
        res.status(201).send({ msg: 'You have successfully been registered. Once approved you will be notified through email.' })
    }
    catch (e) {
        // console.log(e)
        if (e.code === 301) {
            return res.status(400).send({ msg: 'email already exist' })
        }
        res.status(500).send(e)
        console.log(e)
    }
})

module.exports = router