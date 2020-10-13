"use strict";
const express = require('express');
const router = express.Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const xsenv = require("@sap/xsenv");
const authentication = require('../middleware/auth')

let objectstoreOptions = xsenv.getServices({
    cred: {
        tag: "objectStore"
    }
});

let cred = objectstoreOptions.cred;
// console.log(cred)

const credentials = new AWS.Credentials(
    cred.access_key_id,
    cred.secret_access_key);

AWS.config.update({
    region: cred.region
});

const s3 = new AWS.S3({
    credentials: credentials
});

const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});


router.post('/upload', authentication, upload.single('files'), (req, res) => {
    let session_id = req.body.session_id;
    let uploaded_by = req.body.uploaded_by;
    uploaded_by = !uploaded_by ? "" : uploaded_by;
    let uploaded
    let name;
    let keys = [];

    name = Date.now() + '-' + req.file.originalname;
    keys.push([session_id, name, uploaded_by]);

    const params = {
        Bucket: cred.bucket, // pass your bucket name
        Key: name, // file will be saved	
        Body: req.file.buffer
    };

    s3.upload(params, function (error, data) {
        if (error) {
            throw error;
        }
        console.log(keys);
        let client = req.db;
        let query = "insert into RBEI_NODE_FORUM_SESSION_FILES (SESSION_ID, FILE_NAME, UPLOADED_BY) VALUES (?,?,?)";
        console.log(query);
        client.prepare(query, (err, statement) => {
            statement.exec(keys, (error, result) => {
                if (error) {
                    return res.send(error);
                }
                res.send({ status: 'File uploaded successfully.' });
            });
        });
    });


});

router.get('/download', (req, res) => {
    let filename = req.query.filename;
    const params = {
        Bucket: cred.bucket,
        Key: filename
    };

    let file = s3.getObject(params, (err, data) => {
        res.send(data.Body);
    });

})

router.get('/list', authentication, (req, res) => {

    const params = {
        Bucket: cred.bucket
    };
    s3.listObjects(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);

        }
        else {
            // console.log(data);
            res.send(data);
        }

    });
});

router.post('/delete', authentication, (req, res) => {
    console.log('delete route');
    let filename = req.body.filename;
    const params = {
        Bucket: cred.bucket,
        Key: filename
    };
    s3.deleteObject(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);

        }
        else {
            console.log(data);
            res.send(data);
        }

    });
})

module.exports = router;