
//require express
const express = require('express');

const app = express();
const port = 5000

//serve static files

app.use(express.static('server/public'));

//start up the server
app.listen(port, function(){
    console.log('listening on port', port);
    
})