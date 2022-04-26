// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the number they chose
 */
function displayNumber () {
  	// initialize variables
	let response = ""
	let randomNumber = Math.floor((Math.random() * 6) + 1);
  
	// get user input
	let number = parseInt(document.getElementById('numRan').value)


  	// if number is number is equal to random number, display correct response
	if (number == randomNumber) {
		response = "Right on, great job!"
	} 
	// otherwise, if number is not equal to random number, display incorrect response	
	else if(number != randomNumber) {
		response = "Unfortunately, you guessed wrong! Try again :)"
	}

  // display the results
  document.getElementById('number').innerHTML = response
}
