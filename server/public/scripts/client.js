$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    addQuotesToDom();
}

function addQuotesToDom(){
    //request from server
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function(res){
        console.log(res);
        
    })
}