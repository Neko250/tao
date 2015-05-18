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

  $('.book').hide();
  $("#iconPlus").hide();
  $(".startPage").stop().fadeOut(5000, function() {
  });

  $("#iconMinus").on("click", function() {    //Menu collapse on click
    $(".tocWrapper").stop().animate({
      width: "10px"
    }, 400, function() {
      $(".tocLevelOne").hide();
      $(".toc > hr").hide();
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

  var getPage = function() {

    $(".tocLevelOne").on("click", function(){

      $(".startPage").hide();
      $(".book").hide();
      var x = $(this).attr('id');
      x = x.substring(3);
      x = x.toLowerCase();
      if (x === "all") {
        $(".theTao .book").show();
      } else {
        $("#" + x).fadeIn(2000, function() {
        });
      }
    });
  };

getPage();

});





