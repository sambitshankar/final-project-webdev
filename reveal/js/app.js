/**
 * app.js
 * main application script
 */
"use strict";


var nameInput = document.querySelector("#username");
var resultOutput = document.querySelector(".result-title");
var resultOutputdesc = document.querySelector(".result-details-desc");
var submitButton = document.querySelector(".submit-button");

/*document.querySelector(".question1.radio-options").addEventListener("click", function(){
    var answer1 = document.querySelector("input[name=options1]"); 
    
})*/



submitButton.addEventListener("click", function(){
    console.log("button clicked");
    var answer1 = document.querySelector("input[name=options1]:checked");
    var answer2 = document.querySelector("input[name=options2]:checked");
    var answer3 = document.querySelector("input[name=options3]:checked");
    var answer4 = document.querySelector("input[name=options4]:checked");
    var answer5 = document.querySelector("input[name=options5]:checked");
    var answer6 = document.querySelector("input[name=options6]:checked");
    console.log(answer1.value + answer2.value + answer3.value + answer4.value + answer5.value + answer6.value);
     if(answer1.value !== undefined && answer2.value !== undefined && answer3.value !== undefined && answer4.value !== undefined && answer5.value !== undefined && answer6.value !== undefined ){
            document.querySelector(".results-card").style.display = "block";
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
        } else {
            alert("Not so soon Padawan, answer all the quiz questions first!");
        }

});
    



/*
 



}*/