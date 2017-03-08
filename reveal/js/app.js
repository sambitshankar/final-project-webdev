/**
 * app.js
 * main application script
 */
"use strict";


var nameInput = document.querySelector("#username");
var resultOutput = document.querySelector(".result-title");
var resultOutputdesc = document.querySelector(".result-details-desc");
var submitButton = document.querySelector(".submit-button");



/* This block gets the value of the radio button once submit button is clicked and returns the results based on the selected options*/
submitButton.addEventListener("click", function(){
console.log("button clicked"); /* line for debugging purposes */
    var answer1 = document.querySelector("input[name=options1]:checked");
    var answer2 = document.querySelector("input[name=options2]:checked");
    var answer3 = document.querySelector("input[name=options3]:checked");
    var answer4 = document.querySelector("input[name=options4]:checked");
    var answer5 = document.querySelector("input[name=options5]:checked");
    var answer6 = document.querySelector("input[name=options6]:checked");
    
    if (answer1 == null || answer2 == null || answer3 == null || answer4 == null || answer5 == null || answer6 == null) {
        alert("Not so soon Padawan, answer all the quiz questions first!");
    }
    else {
        document.querySelector(".results-card").style.display = "block";
        document.querySelector(".see-results-title ").style.display = "block";
        if(answer1.value == "country" && answer2.value == "give" && answer4.value == "kind"){
                if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[0].title;
                    resultOutputdesc.textContent = RESULTS[0].description;
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + " " + RESULTS[0].title;
                    resultOutputdesc.textContent = RESULTS[0].description;
                }
    } 
    }
     
});  
     
     
 