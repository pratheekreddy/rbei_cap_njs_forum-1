/*eslint no-console: 0*/
"use strict";
const port = process.env.PORT || 3330;
const express = require("express");
const xsenv = require("@sap/xsenv");
const bodyParser = require('body-parser');
const HDBConn = require("@sap/hdbext");
const path = require('path');
const cors=require('cors');

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// console.log(JSON.parse(process.env.VCAP_SERVICES));
xsenv.loadEnv()
var hanaOptions = xsenv.getServices({
	hana: {
		tag: "hana"
	}
});
// console.log(hanaOptions)

module.exports=hanaOptions;


app.use(
	HDBConn.middleware(hanaOptions.hana)
);

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('welcome to node forum app')
})
app.use('/user',require('./login/signup'));
app.use('/user/auth',require("./login/getOTP"));
app.use('/user/auth',require("./login/login"));
app.use('/user/auth', require("./logout/logout"));
app.use('/file',require('./main/fileUpload.js'));
app.use('/admin',require('./main/userApprove'));
app.use('/admin', require('./main/email.js'));
app.use('/user', require('./main/validUsername'))
	
app.listen(port, () => {
	console.log(`myapp is using Node.js version: ${process.version}`); 
	console.log(`myapp listening on port ${port}`);
}); 
 