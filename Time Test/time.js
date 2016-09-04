var name = prompt("What is your name?");
setInterval(function() {
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();

   if(hour >= 18) {
     greeting = "Good Evening";
   } else if (hour >= 12) {
     greeting = "Good Afternoon";
   } else if(hour > 0) {
     greeting = "Good Morning";
   } else {
     greeting = "Welcome";
   }
   $("#welcome").text(greeting + ", " + name + "!");

   if(hour > 12)
   {
     hour -= 12;
   }

   if(hour >= 10 && minute >= 10)
   {
     $("#time").text(hour.toString() + ":" + minute.toString());
   }
   else if (hour >= 10)
   {
     $("#time").text(hour.toString() + ":0" + minute.toString());
   }
   else if (minute >= 10)
   {
     $("#time").text('0'+ hour.toString() + ":" + minute.toString());
   }
   else
   {
     $("#time").text('0'+ hour.toString() + ":0" + minute.toString());
   }
   setTimeout(test, 5000);
}, 500);
