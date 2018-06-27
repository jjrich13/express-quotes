
//require express
const express = require('express');
const quotes = require('./quotes.js');
let randomQuote = require('./random-quote.js')

const app = express();
const port = 5000

//serve static files

app.use(express.static('server/public'));

app.get('/quotes', function(req, res){
    res.send(quotes);
})

app.get('/random', function(req, res){
    res.send(randomQuote);
})

//start up the server
app.listen(port, function(){
    console.log('listening on port', port);
    
});


