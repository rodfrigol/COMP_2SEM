var express = require('express')
var app = express()
var formidable = require('formidable')
var fs = require('fs');

app.use(express.static('public'))

app.post('/send_data', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        fs.readFile("data.json", "utf8", function(err, data){
            var obj = JSON.parse(data)
            obj['data'].push(fields)
            fs.writeFile('data.json', JSON.stringify(obj))
        })
        
    })
})

app.get('/get_data', (req, res) => {
    fs.readFile("data.json", "utf8", function(err, data){
        res.end(data)
    })
})

app.listen(3000)
