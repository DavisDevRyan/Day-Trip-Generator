"User Strict"

prompt("Welcome to 'Day Trip Generator'! Press 'ENTER' to Start");


let personName = prompt ("What is your name?");
 




let destinations = ["Los Angeles, CA" , "Miami, FL" , "New York, NY" , "Dallas, TX" , "Denver, CO"];
  let randomDest = destinations[Math.floor(Math.random() * destinations.length)];
  prompt("You'll spend a day at" , randomDest);



  let resturant = ["Subway" , "Mcdonalds" , "Chick Fil A" , "Apple Bees" , "Olive Garden"];
  let randomRest = resturant[Math.floor(Math.random() * resturant.length)];
    prompt("You'll enjoy lunch at" , randomRest);


  let transportation = ["Bicycle" , "Heliopter" , "Uber" , "HorseBack" , "Walk", "Bus"];
  let randomTrans = transportation[Math.floor(Math.random() * transportation.length)];
  prompt("Mode of transportation" , randomTrans);


  let entertainment = ["Club" , "Sip N Paint" , "Hike" , "Concert" , "Bowling" , "Movie" , "Amusement Park"];
  let randomEnte = entertainment[Math.floor(Math.random() * entertainment.length)];
  prompt("Entertainment for the day" , randomEnte);{

    prompt("Would you like to take this trip?");
    if (prompt = "yes") 

let resultsdDayTrip = (personName + 
  "You will arrive in" + randomDest + 
  "For lunch you will have" + randomRest + 
  "For transport, you will utilize" + randomTrans + 
  "Lastly you will finish the day with" + randomEnte + 
  "Congratulations you have successfully selected a Day Trip, Enjoy!");
   console.log(resultsDayTrip);
    }

          
  
//let 

//how do i generate a number in js
//how do i specify the minimum and maximum number to generate 











