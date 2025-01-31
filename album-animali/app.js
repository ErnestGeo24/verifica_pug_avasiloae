var express = require('express');
const animalsData = require('./animals.json');
var app = express();
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public')); 


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permetti tutte le origini
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Metodi consentiti
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Intestazioni consentite
  next();
});


app.get('/', function (req, res) {
    res.render('index', {
        animale: animalsData.animals
    });
});


// Rotta per generare pagine per ogni animale
app.get('/album/:id', (req, res) => {
    const animal = animalsData.animals.find(
      (a) => a.id_figurina === parseInt(req.params.id)
    );
    if (animal) {
      res.render('album', { animal });
    } else {
      res.status(404).send('Animale non trovato');
    }
  });


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});