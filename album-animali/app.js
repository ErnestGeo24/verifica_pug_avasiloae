var express = require('express');
const animale = require('./animals.json'); 
var app = express();
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
 res.send("ciao");
});

app.get('/api/albumAnimali', (req, res) => {
    res.send(animale);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});