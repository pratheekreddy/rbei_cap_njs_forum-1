// **********************depecreted. Using AWS Object Store for file handling.*****************
// "use strict";
// const express = require('express');
// const router = express.Router();
// const multer=require('multer');
// const path = require('path');

// // const upload=multer({
// //     dest:'files'
// // });

// // router.post('/upload',upload.single('file'),(req,res)=>{
// //     console.log(req.file);
// //     res.send();
// // });
// const upload2=multer({dest:'files'});

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'files');
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' +file.originalname );//1534235345345-promis.pdf
//     }
//   });

// const upload=multer({
//     storage:storage
// });
// //files are saved in /home/vcap/app/files path
// router.post('/upload',upload.array('file', 3),(req,res)=>{
// 	let session_id=req.body.session_id;
// 	let subT_id=req.body.subT_id;
// 	let db=req.db;
// 	console.log(req.files);
// 	let file2,file3;
// 	if(!req.files[1]){
// 		file2=null;
// 	}
// 	else{file2=req.files[1].filename;}
// 	if(!req.files[2]){
// 		file3='null';
// 	}else{file3=req.files[2].filename;}
// 	let query="update RBEI_NODE_FORUM_T_MD_SESSION_USER set FILE_01='"+req.files[0].filename+"' , FILE_02='"+file2+"' , FILE_03='"+file3+"' where SESSION_ID='"+session_id+"' and SUB_TOPIC_ID='"+subT_id+"'";
// 	console.log(query);
// 	db.exec(query,(error,result)=>{
// 		if(!error){
// 			res.send({status:'files uploaded',result});
// 		}
// 		else{
// 			res.send(error);
// 		}
// 	});
// });

// router.get('/download',(req,res)=>{
// 	let session_id=req.query.session_id;
// 	let subT_id=req.query.subT_id;
// 	let no=req.query.no;
// 	let client=req.db;
// 	let path='/home/vcap/app/files/';
	
// 	let query="select FILE_0"+no+" as file from RBEI_NODE_FORUM_T_MD_SESSION_USER  where SESSION_ID='"+session_id+"' and SUB_TOPIC_ID='"+subT_id+"'";
// 	console.log(query);
// 	client.exec(query,(error,result)=>{
// 		console.log(path+result[0].FILE);
// 		res.sendFile(path+result[0].FILE);
// 	});
// });

// module.exports = router;