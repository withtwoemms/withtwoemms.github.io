$('#get-access-tokens').click(function(event){
    event.preventDefault();
    
    url = window.location.href; 
    url = url.substring(0, url.length - 5)  
 
   
    $.ajax({
        type: "GET",
        url: url + "/oauth",
    }).done(function(response) {
        console.log(response);
        $('button').attr('disabled', 'disabled');  
    }); 
});
