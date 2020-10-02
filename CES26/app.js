var express = require('express')
var app = express()
var multer = require('multer')
var fs = require('fs')

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})
var upload = multer({storage})

app.use(express.static('public'));

app.post('/file_upload', upload.single('file'), 
    (req, res) => res.send('Upload realizado com sucesso'))

app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/json_info', function (req, res) {
    fs.readFile('json/data.json', function(err, data) {
        res.end(data);
    });
})

app.listen(8081)
