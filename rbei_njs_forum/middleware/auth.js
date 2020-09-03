const jwt = require('jsonwebtoken')

// private key for signing the json web token
const secret = 'nodeforum'
const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization').replace('Bearer ','')
		// console.log(req.header('Authorization'))
		// console.log(token)
		const decoded = jwt.verify(token, secret)
		let client  = req.db
		// console.log(decoded)
		let query = `select name from RBEI_NODE_FORUM_T_MD_USER where email = '${decoded.email}' and token = '${token}'`
		// console.log(query)
		let userName = await client.exec(query)
		// console.log(userName)
		if(!userName){
			throw new Error()
		}
		req.token = token
		next()
	} catch(error) {
		// console.log(error)
		res.status(401).send({'error' : 'Please authenticate'})
	}
}

module.exports = auth