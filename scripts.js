$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    // console.log(year);
    var result = leapYear(year);
    $(".year").text(year);

    $("#result").text(result);


  });
});
var leapYear = function(year) {

  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    $(".not").text("");
  } else {
    $(".not").text("not")
  }

  $("#result").show();

};
