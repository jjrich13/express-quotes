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
        for (let i = 0; i < res.length; i++) {
            $('#quoteHolder').append(`<div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${res[i].text}</p>
                <footer class="blockquote-footer">${res[i].author} <cite title="Source Title">${res[i].source}</cite></footer>
              </blockquote>
            </div>
          </div>`)
            
        }
    }).fail(function(errorRes){
        console.log(errorRes);
        alert('Request Failed, error ' + errorRes.status)
    })
}