var express = require('express');
var cors = require('cors'); // cross-origin resource sharing
const res = require('express/lib/response');
require('dotenv').config() // load environment variables from a .env file

var app = express();
var multer = require('multer'); // to handle form-data (file uploead)

const PORT = 9000;


// to manage Express files
app.use(cors());
app.use('/', express.static(process.cwd() + '/'));

// main route
app.get('/main', function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

// analyse the uploaded file ('upfile')
app.post('/main/file', multer().single('upfile'), (req, res) => {
    response.json({
        'name': request.file.originalname,
        'type': request.file.mimetype,
        'size': request.file.size
    })
});



app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});