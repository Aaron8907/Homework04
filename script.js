var intro = document.querySelector("header");
var headerT= document.querySelector("h1");
var startB=document.querySelector("button");
var timer=document.querySelector(".card");
var timerElement = document.querySelector(".timer-count");
var body=document.querySelector("body")
var cardTimer=document.querySelector(".card");
var timerCount=51
var points=0


function removeIntro() {
    headerT.setAttribute("style", "display:none");
    startB.setAttribute("style", "display:none");
    timer.setAttribute("style","display:inherit")
}



function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);  
    }
 }, 1000);
}
//Question 1
function question1() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="1)What is the main purpose of Javascript?";
  option1.textContent="Aesthetics";
  option2.textContent="Structure";
  option3.textContent="Functionality";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question2()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question2()
  });

 option3.addEventListener("click",function(){
 points=points+10;
 console.log(points);
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 question2()
 }); 
}
//Question 1 Ends
//Question 2 Starts
function question2() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="2)What tag is used to add Javascript?";
  option1.textContent="Script tag";
  option2.textContent="JS Tag";
  option3.textContent="Bootstrap Tag";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question3()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question3()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question3()
 });
}
//Question 2 Ends
//Question 3 Starts
function question3() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="3)Which is the correct way declare a variable?";
  option1.textContent="[var]:FirstName= 'Aaron'";
  option2.textContent="'var=FistName=Aaron'";
  option3.textContent="var firstName='Aaron'";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question4()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question4()
  });

 option3.addEventListener("click",function(){
 points=points + 10;
 console.log(points);
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 question4()
 });
}
//Question 3 Ends
//Question 4 Starts
function question4() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="4)What would the console show for a variable defined as '1'";
  option1.textContent="Number";
  option2.textContent="String";
  option3.textContent="Integer";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question5()
  });

  option2.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question5()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question5()
 });
}
//Question 4 Ends
//Question 5 Starts
function question5() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="5)What does console.log('document.body'); log?";
  option1.textContent="document.body";
  option2.textContent="the body of document";
  option3.textContent="Undefined";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question6()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question6()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question6()
 });
}
//Question 5 Ends
//Question 6 Starts
function question6() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="6)How would you change the color of the text using Javasript?";
  option1.textContent="variableName='style.color.red'";
  option2.textContent="variableName:'style','color-red'";
  option3.textContent="variableName.style.color = 'red'";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question7()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question7()
  });

 option3.addEventListener("click",function(){
 points=points + 10;
 console.log(points);
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 question7()
 });
}
//Question 6 Ends
//Question 7 Starts
function question7() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="7)What does node.appendChild() do?";
  option1.textContent="Adds the Javascript file to HTML without having to declare function";
  option2.textContent="Adds the function to the appended CSS while also copying to HTML";
  option3.textContent="Adds a node to the end of the list of children of a specified parent node";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question8()
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question8()
  });

 option3.addEventListener("click",function(){
 points=points + 10;
 console.log(points);
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 question8()
 });
}
//Question 7 Ends
//Question 8 Starts
function question8() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="8)How do you set time interval in Javascript?";
  option1.textContent="setTime()";
  option2.textContent="setInterval()";
  option3.textContent="setInt()";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question9()
  });

  option2.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question9()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question9()
 });
}
//Question 8 Ends
//Question 9 Starts
function question9() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="9)What is .addEventListener() used for?";
  option1.textContent="Set up music to webpage";
  option2.textContent="Set up an element to listen for a specific event";
  option3.textContent="Set up a function to css";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question10()
  });

  option2.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question10()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question10()
 });
}
//Question 9 Ends
//Question 10 Starts
function question10() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="10)Does the localstorage erase when browser is closed?";
  option1.textContent="Yes";
  option2.textContent="No";
  option3.textContent="Maybe";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  timerCount=timerCount-5;
  question11()
  });

  option2.addEventListener("click",function(){
  points=points + 10;
  console.log(points);
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  question11()
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 timerCount=timerCount-5;
 question11()
 });
}
//Question 10 ends
//Question 11 Starts
function question11() {
  var parag = document.createElement("h2");
  var option1=document.createElement("button");
  var option2=document.createElement("button");
  var option3=document.createElement("button");
  
  parag.textContent="11)What year did Harry Potter defeat Voldemort?";
  option1.textContent="1996";
  option2.textContent="1997";
  option3.textContent="1998";
  document.body.appendChild(parag);
  document.body.appendChild(option1);
  document.body.appendChild(option2);
  document.body.appendChild(option3);

  option1.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  harrypotterL();
  endGame();
  renderLastRegistered();
  });

  option2.addEventListener("click",function(){
  parag.setAttribute("style", "display:none");
  option1.setAttribute("style", "display:none");
  option2.setAttribute("style", "display:none");
  option3.setAttribute("style", "display:none");
  harrypotterL();
  endGame();
  });

 option3.addEventListener("click",function(){
 parag.setAttribute("style", "display:none");
 option1.setAttribute("style", "display:none");
 option2.setAttribute("style", "display:none");
 option3.setAttribute("style", "display:none");
 harrypotterW();
 endGame();
 });
}

var score= localStorage.getItem("points");

function endGame(){
  cardTimer.setAttribute("style", "display:none");
  body.setAttribute("style","background-color:black");
  var divFinal=document.createElement("div");
  divFinal.textContent="Score: " + points;
  document.body.appendChild(divFinal);
  divFinal.setAttribute("style","margin-left:500px");
  divFinal.setAttribute("style","font-size: 80px");
  localStorage.setItem("score",points);
};

function harrypotterL(){
  cardTimer.setAttribute("style", "display:none");
  body.setAttribute("style","background-color:black");
  var divFinal=document.createElement("div");
  divFinal.textContent="Need to read Harry Potter ASAP!";
  document.body.appendChild(divFinal);
  var picture=document.createElement("img");
  document.body.appendChild(picture);
  picture.setAttribute("src","https://i1.wp.com/pbs.twimg.com/media/CjVqxiFUYAAk0sk.jpg");
};

function harrypotterW(){
  cardTimer.setAttribute("style", "display:none");
  body.setAttribute("style","background-color:black");
  var divFinal=document.createElement("div");
  divFinal.textContent="Way to go Potterhead";
  document.body.appendChild(divFinal);
  var picture=document.createElement("img");
  document.body.appendChild(picture);
  picture.setAttribute("src","https://imgix.bustle.com/rehost/2016/9/13/8154b8f5-ee31-4462-bc19-3dfe9ae46cdb.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2");
};



function startGame(){
    removeIntro()   
    startTimer() 
    question1()
}

intro.addEventListener("click",startGame);