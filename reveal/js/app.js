/**
 * app.js
 * main application script
 * Author - Sam Pattnaik
 */
"use strict";


var nameInput = document.querySelector("#username");
var resultOutput = document.querySelector(".result-title");
var resultOutputdesc = document.querySelector(".result-details-desc");
var submitButton = document.querySelector(".submit-button");



/* This block gets the value of the radio button once submit button is clicked and returns the results based on the selected options*/
submitButton.addEventListener("click", function(){

    /* These variables get the value of the radio buttons, by first checking the name and then checking if they are checked */
    var answer1 = document.querySelector("input[name=options1]:checked");
    var answer2 = document.querySelector("input[name=options2]:checked");
    var answer3 = document.querySelector("input[name=options3]:checked");
    var answer4 = document.querySelector("input[name=options4]:checked");
    var answer5 = document.querySelector("input[name=options5]:checked");
    var answer6 = document.querySelector("input[name=options6]:checked");
    
    if (answer1 == null || answer2 == null || answer3 == null || answer4 == null || answer5 == null || answer6 == null) {  /*checks if all the radio buttons are checked - all questions answered? */
        alert("Not so soon Padawan, answer all the quiz questions first!"); /* if not, throws error */
    }
    /* if all is good, runs the conditions and displays according to data from the array */
    else {  
        document.querySelector(".results-card").style.display = "block";
        document.querySelector(".see-results-title").style.display = "block";
        document.querySelector(".scroll-down").style.display = "block";
        if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[10].title; /* This part checks, if no name is entered, addresses the user as Padawan */
                    resultOutputdesc.textContent = RESULTS[10].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/smart.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[10].title;
                    resultOutputdesc.textContent = RESULTS[10].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/smart.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        if(answer1.value == answer2.value == "give" && answer4.value == "kind"){
                if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[0].title;
                    resultOutputdesc.textContent = RESULTS[0].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/saviour.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";

                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[0].title;
                    resultOutputdesc.textContent = RESULTS[0].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/saviour.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";

                }
        } else if(answer3.value == "convince"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[5].title;
                    resultOutputdesc.textContent = RESULTS[5].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/lover.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[5].title;
                    resultOutputdesc.textContent = RESULTS[5].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/lover.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        } else if(answer5.value == "believe"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[9].title;
                    resultOutputdesc.textContent = RESULTS[9].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/hope.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[9].title;
                    resultOutputdesc.textContent = RESULTS[9].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/hope.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }  else if(answer2.value == "spit" || answer3.value == "against" || answer5.value == "happy"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[3].title;
                    resultOutputdesc.textContent = RESULTS[3].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/hater.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[3].title;
                    resultOutputdesc.textContent = RESULTS[3].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/hater.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }   else if(answer6.value == "electric" && answer4.value == "alone"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[4].title;
                    resultOutputdesc.textContent = RESULTS[4].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/nature-lover.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[4].title;
                    resultOutputdesc.textContent = RESULTS[4].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/nature-lover.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }   else if(answer4.value == "party" && answer6.value == "royal"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[7].title;
                    resultOutputdesc.textContent = RESULTS[7].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/drunk.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[7].title;
                    resultOutputdesc.textContent = RESULTS[7].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/drunk.gif')"; 
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        
        }   else if(answer2.value == "envy" && answer5.value == "die"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[8].title;
                    resultOutputdesc.textContent = RESULTS[8].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/dreamer.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[8].title;
                    resultOutputdesc.textContent = RESULTS[8].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/dreamer.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }   else if(answer4.value == "work" && answer6.value == "economic"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[2].title;
                    resultOutputdesc.textContent = RESULTS[2].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/workaholic.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[2].title;
                    resultOutputdesc.textContent = RESULTS[2].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/workaholic.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }   else if(answer2.value == "get-a-job" && answer3.value == "dont-care"){
              if(nameInput.value==""){
                    resultOutput.textContent = "Hello padawan, " + RESULTS[1].title;
                    resultOutputdesc.textContent = RESULTS[1].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/troublemaker.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
                else {
                    resultOutput.textContent = "Hello, " + nameInput.value + ". " + RESULTS[1].title;
                    resultOutputdesc.textContent = RESULTS[1].description;
                    document.querySelector(".result-image").style.background = "url('../reveal/img/troublemaker.gif')";
                    document.querySelector(".result-image").style.backgroundRepeat = "no-repeat";
                    document.querySelector(".result-image").style.backgroundSize = "cover";
                    document.querySelector(".result-image").style.backgroundPosition = "center";
                }
        }   
    
     
    }

});  
     
     
 