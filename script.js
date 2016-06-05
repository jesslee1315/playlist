
var tracks_butt = document.getElementById('tracks_butt');




tracks_butt.addEventListener("click", function(when_clicked){
  when_clicked.preventDefault();

  var my_request = new XMLHttpRequest();
  my_request.onreadystatechange = function(){
    if(my_request.readyState === 4){
    if(my_request.status < 400){
      var got_info = JSON.parse(my_request.responseText);
          for (var i = 0; i < got_info.results.length; i++) {
            var all_info = got_info.results[i];
            console.log(all_info);
        }
      }
    }
  }
  var  playlist = "https://lit-fortress-6467.herokuapp.com/object"
  // var concat = movieTitles + input.value;
  my_request.open('GET', playlist)
  my_request.send();
});
