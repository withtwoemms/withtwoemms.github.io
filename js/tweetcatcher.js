$('#get-access-tokens').click(function(event){
    event.preventDefault();
    
    url = window.location.href; 
    url = url.substring(0, url.length - 5)  
 
    $.ajax({
        type: "GET",
        url: url + "/oauth",
    }).done(function(response) {
        $('button').attr('disabled', 'disabled');  
        $('#link-loc').append('</br></br>');
        $('#link-loc').append('<a href="' + response + '">' + response + '</a>');
    }); 
});
