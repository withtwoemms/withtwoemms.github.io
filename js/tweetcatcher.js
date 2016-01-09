$('#get-access-tokens').click(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "",
        data: ""
    }).done(function(response) {
        console.log(response);
    }); 
});
