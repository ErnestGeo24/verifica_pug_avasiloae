var express = require('express');
const animale = require('./animals.json'); 
var app = express();
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {

});

app.get('/api/albumAnimali', (req, res) => {
    res.render('index', {
        animale: animale.animals
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});