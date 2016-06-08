

$(document).ready(function(){
  // load.preventDefault();

  $(document).on("click", ".album_item", function(){
    $("#textarea").append( $(this).attr("id") + " <br /> " );
  });

  $("#clear_butt").on("click", function(){
    $("#textarea").empty();
  });
  $("#submit_butt").click(function(){
    $.post("https://lit-fortress-6467.herokuapp.com/post", function(){
      $("#textarea").append("<p>Successfully retrieved</p>");
    });
});
  var url = "https://lit-fortress-6467.herokuapp.com/object"
  $.get(url, function(my_request){
    for (var i = 0; i < my_request.results.length; i++) {
      var this_albums_image = my_request.results[i].cover_art;
      var this_album_names = my_request.results[i].title ;

      $("#scrollbar").append('<img class="album_item" src="../images/' + this_albums_image +'" id= "'+ this_album_names +'" />');
        };
  });
});
