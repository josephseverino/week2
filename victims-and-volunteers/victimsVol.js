var userInput = prompt("How many disaster victims do you have");

var names = [];
var phoneNumbers = [];
var street = [];

for(var i=0; i < userInput; i++){
    names.push(prompt("What's the name?"));
  
   
} 

for(var i=0; i < userInput; i++){
    phoneNumbers.push(prompt("What's the phone number of " + names[i] +"?"));
  
   
} 

for(var i=0; i < userInput; i++){
    street.push(prompt("What's the street for " + names[i] +"?"));
  
   
} 
alert( street.join(', ') + "\n" + names.join(', ') + "\n" + street.join(','))





