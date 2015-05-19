var tocLevelOne = [
  {book:"One", title:"The Silent Void",toc:"tocOne", tao: "one"},
  {book:"Two", title:"The Ancient Masters",toc:"tocTwo", tao: "two"},
  {book:"Three", title:"Design",toc:"tocThree", tao: "three"},
  {book:"Four", title:"Coding",toc:"tocFour", tao: "four"},
  {book:"Five", title:"Maintenance",toc:"tocFive", tao: "five"},
  {book:"Six", title:"Management",toc:"tocSix", tao: "six"},
  {book:"Seven", title:"Corporate Wisdom",toc:"tocSeven", tao: "seven"},
  {book:"Eight", title:"Hardware and Software",toc:"tocEight", tao: "eight"},
  {book:"Nine", title:"Epilogue",toc:"tocNine", tao: "nine"}
];


$(document).ready(function () {  

// $( document ).on( "mousemove", function( event ) {             //Working on a function to have page background dynamically populated with mouse coord
//   var x = event.pageX;
//   var y = event.pageY;
//   $(".container").append("<span>" + x + y + "</span>")})

//   $(".book").hide();
//   $("#iconPlus").hide();
//   $(".startPage").stop().fadeOut(5000, function() {
//   });

  $("#iconMinus").on("click", function() {    //Menu collapse on click
      $(".tocLevelOne").hide();
      $(".toc > hr").hide();
      $(".tocWrapper").stop().animate({
      width: "10px"
    }, 400, function() {

      $("#iconMinus").hide(); 
      $("#iconPlus").show();   
    });
  });

  $("header").on("click", function() {
    $(".book").fadeOut(1000, function() {
    });
    $(".startPage").fadeIn(2000, function() {
    });
    $(".startPage").fadeOut(2000, function() {
    });
  });


  $("#iconPlus").on("click", function() {     //Menu expand on click
    $(".tocWrapper").stop().animate({
      width: "280px"
    }, 400, function() {
      $("#iconPlus").hide(); 
      $(".tocLevelOne").show();
      $(".toc > hr").show();
      $("#iconMinus").show();   
    });
  });

  var randomTaoGenerator = function() {
    randomNumber = Math.random() * 10;
    console.log(randomNumber)
    if (randomNumber <= 2) {
      randomTao = "one"
    } else if ((randomNumber > 2) && (randomNumber <=3)) {
      randomTao = "two"
    } else if ((randomNumber > 3) && (randomNumber <=4)) {
      randomTao = "three"
    } else if ((randomNumber > 4) && (randomNumber <=5)) {
      randomTao = "four"
    } else if ((randomNumber > 5) && (randomNumber <=6)) {
      randomTao = "five"
    } else if ((randomNumber > 6) && (randomNumber <=7)) {
      randomTao = "six"
    } else if ((randomNumber > 7) && (randomNumber <=8)) {
      randomTao = "seven"
    } else if ((randomNumber > 8) && (randomNumber <=9)) {
      randomTao = "six"
    } else if ((randomNumber > 9) && (randomNumber <=10)) {
      randomTao = "six"
    } return randomTao;
  };

  var getPage = function() {

    $(".tocLevelOne").on("click", function(){

      $(".startPage").hide();
      $(".book").hide();
      var x = $(this).attr('id');
      x = x.substring(3);
      x = x.toLowerCase();
      console.log(x)
      if (x === "all") {
        $(".theTao .book").fadeIn(2000, function() {
        });
      } else if (x === "randomtao") {
        randomTaoGenerator()
        $("#" + randomTao).fadeIn(2000, function() {
        });
    
      } else {
        $("#" + x).fadeIn(2000, function() {
        console.log(x)
        });
      }
    });
  };

getPage();

});





