const cds = require('@sap/cds');
module.exports = async (req, res, next) => {
    // const { T_MD_USER } = cds.entities;
    try {

        let authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(401).send({
                msg: 'unauthorized'
            });
        }
        let headers = authorization.split(';');
        console.log('authorization headers ', headers);
        if (headers.length != 2 || !headers[0].startsWith('requester=') || !headers[1].startsWith('rbei_access_token=')) return res.status(401).send({
            msg: 'unauthorized'
        });
        let requester = headers[0].replace('requester=', '');
        let rbei_access_token = headers[1].replace('rbei_access_token=', '');


        //will return only one record as email_id is the key
        const result = await cds.run(`SELECT
                    STATUS,
                    TYPE,
                    CASE
                        WHEN GEN_RBEI_TOKEN = ? THEN
                            CASE 
                                WHEN SECONDS_BETWEEN(GEN_RBEI_TOKEN_TMSTMP, NOW())  <= 43200 THEN 1
                                ELSE 0
                            END
                        ELSE -1
                    END AS FLAG
                    FROM RBEI_NODE_FORUM_T_MD_USER
                    WHERE EMAIL_ID = ?`, [rbei_access_token, requester]);
        console.log('query result ', result)
        if (result.length === 0) return res.status(401).send({
            msg: 'unauthorized'
        });

        if (result[0].FLAG != 1) return res.status(401).send({
            msg: 'unauthorized'
        });
        const { STATUS, TYPE } = result[0];


        if (STATUS != 'A') return res.status(403).send({
            msg: 'You are not approved'
        });
        req.user = new cds.User(requester);
        req.rbei_access_role = TYPE;
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send(
            error
        );
    }

}