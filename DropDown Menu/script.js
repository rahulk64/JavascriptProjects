$(document).ready(function() {
  $(".dropt-btn").hover(function() {
    $("#idDropDown").removeClass("dropdown-content");
  },
  function() {
    $("#idDropDown").addClass("dropdown-content");
  });
});
