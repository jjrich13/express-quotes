$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    addQuotesToDom();
    addClickHandlers();
}

function addQuotesToDom(){
    //request from server
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(function(res){
        $('#quoteHolder').empty();
        for (let i = 0; i < res.length; i++) {
            $('#quoteHolder').append(`
            <div class="card">
                <div class="card-header">
                Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${res[i].text}</p>
                        <footer class="blockquote-footer">
                            ${res[i].author} 
                            <cite title="Source Title">
                                ${res[i].source}
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>`)            
        }
    }).fail(function(errorRes){
        console.log(errorRes);
        alert('Request Failed, error ' + errorRes.status)
    })
}

function addClickHandlers(){
    $('#quoteButton').on('click', handleQuoteButtonClick);
}

function handleQuoteButtonClick(){
    let text = $('#text').val();
    let author = $('#author').val();
    let source = $('#source').val();
    

    $.ajax({
        url: '/quotes',
        method: 'POST',
        data: {
            text: text,
            author: author,
            source: source
        }
    }).done( function(response) {
            console.log(response);
            addQuotesToDom();
            
    });

    
}