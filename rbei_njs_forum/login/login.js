"use strict";
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async(req, res) => {
	//destructuring request body
	let {
		user,
		otp
	} = req.body;

	const client = req.db;
	//query to check if OTP is valid.
	let query =
		`SELECT
			EMAIL_ID,
			CASE
				WHEN GEN_OTP = ? THEN
					CASE 
						WHEN SECONDS_BETWEEN(GEN_OTP_TMSTMP, NOW())  <= 1800 THEN 1
						ELSE 0
					END
				ELSE -1
			END AS FLAG,
			TYPE
			FROM RBEI_NODE_FORUM_T_MD_USER
			WHERE (EMAIL_ID = ? OR USERNAME = ? OR IDNO = ? OR NTID = ?)  AND STATUS = 'A'`;
	try {
		let result = await client.exec(query, [otp, user, user, user, user]);
		console.log(result);

		if (result.length === 0) {
			return res.status(401).send({
				msg: 'unauthorized'
			});
		}
		if (!result[0].FLAG) {
			return res.status(401).send({
				msg: 'OTP expired'
			});
		}
		if (result[0].FLAG === -1) {
			return res.status(401).send({
				msg: 'Invalid OTP'
			});
		}
		const {
			EMAIL_ID,
			TYPE
		} = result[0];

		//converting token generated timestamp to appropriate UTC timestamp format, to store in the database.
		const tokenGenTimeMilli = Date.now();
		let tokenGenTmstmp = new Date(tokenGenTimeMilli);
		tokenGenTmstmp = tokenGenTmstmp.toISOString();

		//generating a JSON Web Token
		let secretKey = '$7ckugsc@#~oindjsad%9';
		const token = jwt.sign({
			EMAIL_ID,
			exp: Math.floor(tokenGenTimeMilli / 1000) + (12 * 3600)
		}, secretKey);

		//query to store token and token generated timestamp in database.
		query =
			`UPDATE RBEI_NODE_FORUM_T_MD_USER
				SET GEN_RBEI_TOKEN = ?, GEN_RBEI_TOKEN_TMSTMP = ?
				WHERE EMAIL_ID = ?`;
		await client.exec(query, [token, tokenGenTmstmp, EMAIL_ID])
		res.send({
			token,
			type: TYPE,
			email: EMAIL_ID
		});
	} catch (error) {
		console.log(error);
	}
})

module.exports = router;