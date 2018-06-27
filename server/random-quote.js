quotes = require('./quotes.js');

function randomQuote(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = randomQuote();