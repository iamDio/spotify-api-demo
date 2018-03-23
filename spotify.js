$('#runMe').on('click',function(e){
    console.log(e);
    const queryURL = `https://api.spotify.com/`
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      });
})