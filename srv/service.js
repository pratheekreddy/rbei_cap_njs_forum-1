const cds = require('@sap/cds')
const jwt=require('jsonwebtoken')
// app.listen ( process.env.PORT || 4004,()=>console.log(process.env.PORT ))
module.exports = cds.service.impl(srv => {
	console.log(srv.entities)
	srv.before('*',(req)=>{
		try{
		let secretKey = '$7ckugsc@#~oindjsad%9'
		// console.log(req._.req.headers.authorization)
		let decode=jwt.verify(req._.req.headers.authorization,secretKey)
		console.log(decode)
		}catch(e){
			req.error({code:'401',message:'login again'})
		}
	})
	
	srv.before('CREATE','sessions',(req)=>{
		const session_id = 'S_' + Date.now()
		req.data.ID = session_id
		req.data.S_CREATED_BY = 'pratheekreddy.katta@in.bosch.com'
		req.data.S_CREATED_ON = new Date().toISOString().replace('Z', '').replace('T', '')
		let counter = 00
		req.data.TOPICS.forEach(topic => {
			topic.SUB_TOPIC_ID = 'ST_' + counter
			topic.SESSION_ID = session_id
			counter++
		})
	})
	srv.on('READ','search',(req,next)=>{
		// console.log(process.env.VCAP_SERVICES.objectstore[0])
		// let {search}=srv.entities
		// console.log(req.params)
		// return srv.run( SELECT.from(search))
	})
})