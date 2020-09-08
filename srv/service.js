const cds = require('@sap/cds')
const jwt = require('jsonwebtoken')

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
})