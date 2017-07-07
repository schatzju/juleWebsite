var wallpaper = ["http://7wallpapers.net/wp-content/uploads/20_Banana.jpg", "http://7wallpapers.net/wp-content/uploads/3_Banana.jpg", "http://7wallpapers.net/wp-content/uploads/13_Banana.jpg", "http://7wallpapers.net/wp-content/uploads/19_Banana.jpg", "https://images3.alphacoders.com/267/26755.jpg", "https://wallpaperscraft.com/image/banana_background_dried_77491_1920x1080.jpg"];
var letters = ["B", "A" , "N", "A", "N", "A"];

var index = 0;
$(".ban_class").hide();
$( "#banana" ).click(function() {
  alert( "Are you sure you are ready?" );
  $(".ban_class").show();
  $(".top").hide();
  
});

$( "#start" ).click(function() {
  $(".spell").append(letters[index]);
  $(".ban_class").css("background-image", "url(" + wallpaper[index] + ")");
  $("#start").html("Keep Clicking");
  index = index + 1;
  if(index === 7){
      $(".ban_class").hide();
    $(".top").show();
      index = 0;
  }
});

