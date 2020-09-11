const cds = require('@sap/cds');

module.exports = cds.service.impl(srv => {

    srv.before('CREATE', 'sessions', (req) => {
        const { id } = req._.req.user;
        const rbei_access_role = req._.req.rbei_access_role;
        console.log(rbei_access_role)
        if (rbei_access_role != 'A') return req.reject(401, 'unauthorized');
        const session_id = 'S_' + Date.now();
        req.data['ID'] = session_id;
        req.data['S_CREATED_BY'] = id;
        req.data['S_CREATED_ON'] = new Date().toISOString();
        let counter = 00;
        req.data.TOPICS.forEach(topic => {
            topic.SUB_TOPIC_ID = 'ST_' + counter;
            topic.SESSION_ID = session_id;
            counter++;
        })
    })

    srv.before('UPDATE', 'updateprofile', async (req) => {
        const fieldsToUpdate = Object.keys(req.data);
        if (fieldsToUpdate.includes('USERNAME')) {
            try {
                const username = req.data.USERNAME;
                let email = req.params[0].EMAIL_ID;
                const result = await cds.run('SELECT COUNT(EMAIL_ID) AS COUNT FROM RBEI_NODE_FORUM_T_MD_USER WHERE EMAIL_ID != ? AND USERNAME = ?', [email, username]);
                if (result[0].COUNT != 0) return req.reject(403, 'username already taken');
            } catch (error) {
                req.error(500, error);
            }
        }
        req.data['CHANGED_ON'] = new Date().toISOString();
    })

})