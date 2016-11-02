var express = require('express'),
    wines = require('./apis/users');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3000);
console.log('Listening on port 3000...');
