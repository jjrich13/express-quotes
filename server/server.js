
//require express
const express = require('express');
const bodyParser = require('body-parser');
const quotes = require('./quotes.js');
let randomQuote = require('./random-quote.js')

const app = express();
const port = 5000

//set up body-parser
app.use(bodyParser.urlencoded( {extended : true} ));

//serve static files

app.use(express.static('server/public'));

app.get('/quotes', function(req, res){
    res.send(quotes);
})

app.get('/random', function(req, res){
    res.send(randomQuote);
})

app.post('/quotes', function(req, res){
    console.log('Here is the req.body', req.body);
    quotes.push(req.body);
    console.log(quotes);
    
    res.sendStatus(201);
})

//start up the server
app.listen(port, function(){
    console.log('listening on port', port);
    
});


