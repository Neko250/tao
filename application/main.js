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

  $('.theTao').hide();
  $("#iconPlus").hide();
  $(".startPage").stop().fadeOut(5000, function() {
    })


  $("#iconMinus").on("click", function() {
    $(".tocWrapper").stop().animate({
      width: "10px"
    }, 200, function() {
      $("#iconMinus").hide(); 
      $("#iconPlus").show();   
    });
  });


  $("#iconPlus").on("click", function() {
    $(".tocWrapper").stop().animate({
      width: "272px"
    }, 200, function() {
      $("#iconPlus").hide(); 
      $("#iconMinus").show();   
    });
  });


});



