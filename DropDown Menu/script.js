$(document).ready(function() {
  $(".dropDown").hover(function() {
    $(this).children(".idDropDown").removeClass("dropdown-content");
    $(this).children(".idDropDown").hide().slideDown();
  },
  function() {
    $(this).children(".idDropDown").addClass("dropdown-content");
  });
});
