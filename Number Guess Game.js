var y = Math.floor(Math.random() * 10 + 1); 
var guess = 1; 
document.getElementById("g").onclick = function(){      
   var x = document.getElementById("d").value; 
  
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
               
   } 
   else if(x > y) 
   {     
       guess++; 
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER");
   } 
   if(guess==4)
   {
       guess=1;
       alert("YOU LOOSE !! GAME OVER :(");
   }
}    