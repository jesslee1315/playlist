//
// var tracks_butt = document.getElementById('tracks_butt');
// var set_img_inside_railtrack = document.getElementsByClassName('className');
//
//
//
// tracks_butt.addEventListener("click", function(when_clicked){
//   when_clicked.preventDefault();
//
//   var my_request = new XMLHttpRequest();
//   my_request.onreadystatechange = function(){
//     if(my_request.readyState === 4){
//     if(my_request.status < 400){
//       var got_info = JSON.parse(my_request.responseText);
//           for (var i = 0; i < got_info.results.length; i++) {
//             console.log(got_info.results);
//             var all_info = got_info.results[i];
//             // console.log(all_info);
//             console.log(typeof all_info.cover_art);
//             console.log(all_info.cover_art);
//         }
//       }
//     }
//   }
//   var  playlist = "https://lit-fortress-6467.herokuapp.com/object"
//   my_request.open('GET', playlist)
//   my_request.send();
// }); SAME THING BELOW

// var url = "https://lit-fortress-6467.herokuapp.com/object"
// $.get(url, function(my_request){
//   console.log();
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }


// $("#tracks_butt").on("click", function(when_clicked){
//   when_clicked.preventDefault();
//
//   var url = "https://lit-fortress-6467.herokuapp.com/object"
//   $.get(url, function(my_request){
//     console.log(my_request.results.length);
//
//     var arr_cover_art = [];
//     for (var i = 0; i < my_request.results.length; i++) {
//       // console.log(my_request.results[i]);
//       var cover_art = my_request.results[i].cover_art;
//       arr_cover_art.push(cover_art);
//       // console.log(arr_cover_art);
//     }
//     var random_3 = [];
//     for (var i = 0; i < arr_cover_art.length; i++) {
//     var random = Math.floor((Math.random() * arr_cover_art.length));
//     random_3.push(arr_cover_art.splice(random,1));
//     }
//     // console.log(random_3);
//   })
// });


var url = "https://lit-fortress-6467.herokuapp.com/object";

$.get(url, function(my_request){

var result = my_request.results;

for(var i = 1; i < 4; i++) {
    var max = result.length;
    console.log(max);
    var random = Math.floor(Math.random() * max);
    console.log(result[random].cover_art);
    $("#album_"+ i).attr("src", "images/" + result[random].cover_art);
    result.splice(random, 1); /*wanted to remove objects inside of the array*/
  }
});
