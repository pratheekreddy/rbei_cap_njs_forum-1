const cds = require('@sap/cds')
const jwt = require('jsonwebtoken')

module.exports = cds.service.impl(srv => {
    // console.log(srv.entities)
    srv.before('*', async (req) => {
        try {
            let authorization = req._.req.headers.authorization;
            if (!authorization) {
                 req.reject(
                    401,
                    'unauthorized'
                );
            }
            let headers = authorization.split(';');
            console.log(headers);
            if (headers.length != 2 || !headers[0].startsWith('requester=') || !headers[1].startsWith('rbei_access_token='))  req.reject(
                401,
                'unauthorized'
            );
            let requester = headers[0].replace('requester=', '');
            let rbei_access_token = headers[1].replace('rbei_access_token=', '');

            //verify the token.
            let secretKey = '$7ckugsc@#~oindjsad%9';
            const decoded = jwt.verify(rbei_access_token, secretKey);
            const {
                EMAIL_ID
            } = decoded;
            if (!(requester === EMAIL_ID))  req.reject(
                401,
                'unauthorized'
            );

            //will return only one record as email_id is the key
            let participants=srv.entities.participants
            const result = await cds.run(SELECT.from(participants).columns(['EMAIL_ID', 'STATUS', 'TYPE']).where('EMAIL_ID=', requester))
            console.log(result)
            if (result.length === 0)  req.reject(
                401,
                'unauthorized'
            );

            if (result[0].STATUS != 'A')  req.reject(
                 401,
                 'unauthorized'
            );
        } catch (error) {
             req.reject(
                401,
             error
            );
        }
    })

    srv.before('CREATE', 'sessions', (req) => {
        const session_id = 'S_' + Date.now();
        req.data.ID = session_id;
        req.data.S_CREATED_BY = 'pratheekreddy.katta@in.bosch.com';
        req.data.S_CREATED_ON = new Date().toISOString();
        let counter = 00;
        req.data.TOPICS.forEach(topic => {
            topic.SUB_TOPIC_ID = 'ST_' + counter;
            topic.SESSION_ID = session_id;
            counter++;
        })
    })
})