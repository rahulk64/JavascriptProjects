$(document).ready(function() {
  $(".dropt-btn").hover(function() {
    $("#idDropDown").removeClass("dropdown-content");
    $("#idDropDown").hide().slideDown();
  },
  function() {
    $("#idDropDown").addClass("dropdown-content");
  });

  $("#idDropDown").hover(function() {
    $("#idDropDown").removeClass("dropdown-content");
  },
  function() {
    $("#idDropDown").addClass("dropdown-content");
  });
});
