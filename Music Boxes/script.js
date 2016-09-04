$(document).ready(function() {
  //Audio File Imports
  var cNote = document.getElementById("cAudio");
  var dNote = document.getElementById("dAudio");
  var eNote = document.getElementById("eAudio");
  var fNote = document.getElementById("fAudio");
  var gNote = document.getElementById("gAudio");
  var aNote = document.getElementById("aAudio");
  var bNote = document.getElementById("bAudio");

  //Play Audio through Clicking
  $("#c").mousedown(function(){
    cNote.currentTime = 0;
    cNote.play();
  });

  $("#d").mousedown(function(){
    dNote.currentTime = 0;
    dNote.play();
  });

  $("#e").mousedown(function(){
    eNote.currentTime = 0;
    eNote.play();
  });

  $("#f").mousedown(function(){
    fNote.currentTime = 0;
    fNote.play();
  });

  $("#g").mousedown(function(){
    gNote.currentTime = 0;
    gNote.play();
  });

  $("#a").mousedown(function(){
    aNote.currentTime = 0;
    aNote.play();
  });

  $("#b").mousedown(function(){
    bNote.currentTime = 0;
    bNote.play();
  });

  //Play Audio through Key Presses
  //Key Down: Play Audio, Turn on Active
  $(window).keydown(function(e) {
     switch(e.which) {
       case 49:
         cNote.currentTime = 0;
         cNote.play();
         $("#c").addClass("activate");
         break;

       case 50:
         dNote.currentTime = 0;
         dNote.play();
         $("#d").addClass("activate");
         break;

       case 51:
         eNote.currentTime = 0;
         eNote.play();
         $("#e").addClass("activate");
         break;

       case 52:
         fNote.currentTime = 0;
         fNote.play();
         $("#f").addClass("activate");
         break;

       case 53:
         gNote.currentTime = 0;
         gNote.play();
         $("#g").addClass("activate");
         break;

       case 54:
         aNote.currentTime = 0;
         aNote.play();
         $("#a").addClass("activate");
         break;

       case 55:
         bNote.currentTime = 0;
         bNote.play();
         $("#b").addClass("activate");
         break;
     }
   });

   //Turn off Active
   $(window).keyup(function(e) {
     switch(e.which) {
       case 49:
         $("#c").removeClass("activate");
         break;

       case 50:
         $("#d").removeClass("activate");
         break;

       case 51:
         $("#e").removeClass("activate");
         break;

       case 52:
         $("#f").removeClass("activate");
         break;

       case 53:
         $("#g").removeClass("activate");
         break;

       case 54:
         $("#a").removeClass("activate");
         break;

       case 55:
         $("#b").removeClass("activate");
         break;
     }
   });
});
