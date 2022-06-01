
let madlibsArray = [];

let MadlibsObject = function(pNoun, pVerb, paNoun) {
  this.Noun = pNoun;
  this.Verb = pVerb;
  this.aNoun = paNoun;
  this.ID = madlibsArray.length + 1;
}

madlibsArray.push(new MadlibsObject("time", "waste", "life"));
console.log(madlibsArray);

/* let zipzapArray = [];

let ZipzapObject = function(pName) {
  this.Name = pName;
  this.ID = zipzapArray.length + 1; //unique ID setup
}

zipzapArray.push(new ZipzapObject("Adam"));
console.log(zipzapArray);

document.addEventListener("DOMContentLoaded", function() {

  createList();

  document.getElementById("playZipzap").addEventListener("click", function() {
    zipzapArray.push(new ZipzapObject(document.getElementById("name").value));
    document.location.href = "index.html#page3";
  });

  document.getElementById("buttonClearZz").addEventListener("click", function() {
    document.getElementById("name").value = "";
  });

  document.getElementById("buttonSortName").addEventListener("click", function() {
    madlibsArray.sort(dynamicSort("Name"));
    createList();
    document.location.href = "index.html#page3";
  });

  $(document).on("pagebeforeshow", "#page3", function(event) {
    createList();
  });

  $(document).on("pagebeforeshow", "#page7", function(event) {
    let ZipzapID = localStorage.getItem('parm');
    document.getElementById("thatZipZapID").innerHTML = ZipzapID;
  });
});
*/
document.addEventListener("DOMContentLoaded", function() {

  createList();

  document.getElementById("buttonForReplay").addEventListener("click", function() {
    document.location.href = "index.html#page1";
  });

  document.getElementById("playMadlibs").addEventListener("click", function() {
    madlibsArray.push(new MadlibsObject(document.getElementById("noun").value, document.getElementById("verb").value, document.getElementById("anoun").value));
    document.location.href = "index.html#page4";
    document.getElementById("noun").value = ""; //clear after press button
    document.getElementById("verb").value = "";
    document.getElementById("anoun").value = "";
    createList();
  });

  document.getElementById("buttonClear").addEventListener("click", function() {
    document.getElementById("noun").value = ""; //clear contents when making mistakes, have to start from scratch to re-enter
    document.getElementById("verb").value = "";
    document.getElementById("anoun").value = "";
  });

  document.getElementById("buttonSortVerb").addEventListener("click", function() {
    madlibsArray.sort(dynamicSort("Verb"));
    createList();
    document.location.href = "index.html#page4";
  });

  $(document).on("pagebeflist", "#page4", function(event) {
    createList();
  });

  $(document).on("pagebeflist", "#page7", function(event) {
    let MadlibsID = localStorage.getItem('parm');  // get the unique key
    document.getElementById("thatMabLibsID").innerHTML = MadlibsID;
  });

  $(document).on("pagebeflist", "#page7", function(event) {
    let localParm = localStorage.getItem('parm');  // unique key
    let localID = GetArrayPointer(localParm); // map it

    movieArray = JSON.parse(localStorage.getItem('movieArray'));

    document.getElementById("oneNoun").innerHTML = "The first noun is: " + madlibsArray[localID].Noun;
    document.getElementById("oneVerb").innerHTML = "The verb is : " + madlibsArray[localID].Verb;
    document.getElementById("oneaNoun").innerHTML = "The second noun is: " + madlibsArray[localID].aNoun;
  });

});

function createList() {
  var mlList = document.getElementById("mllist");
  mlList.innerHTML = ""; //clear

  madlibsArray.forEach(function(element, i) {   //forEach method make each active, clickable
    var myLi = document.createElement('li');
    myLi.classList.add('oneWord');
    myLi.innerHTML = madlibsArray[i].ID + ": " + element.Noun + "  " + element.Verb + "  " + element.aNoun; //list out mad libs
    mlList.appendChild(myLi);
  });

  var liList = document.getElementsByClassName("oneWord");
  console.log(liList);

  let newMadLibsArray = Array.from(liList);

  newMadLibsArray.forEach(function(element, i) {
    element.addEventListener('click', function() {
      alert("you clicked li number " + (i + 1));

      document.location.href = "index.html#page7";
    });
  });
};

function dynamicSort(property) {
  return function(a, b) {
    return a[property].localeCompare(b[property]);
  }
}

//rock paper scissors javascript starts from here
document.getElementById('computer').addEventListener('click', computer);
let choices = ['rock', 'paper', 'scissors'];
var pcchose; //initial pcchose value

document.getElementById('rockuser').addEventListener('click', rockuser);
function rockuser() { //display user choice - rock
  let result11 = 'rock';
  document.getElementById('display11').innerHTML = result11;
}

document.getElementById('paperuser').addEventListener('click', paperuser);
function paperuser() { //display user choice - paper
  let result11 = 'paper';
  document.getElementById('display11').innerHTML = result11;
}

document.getElementById('scissorsuser').addEventListener('click', scissorsuser);
function scissorsuser() { //display user choice - scissors
  let result11 = 'scissors';
  document.getElementById('display11').innerHTML = result11;
}

function computer() { //display computer choice
  pcchose = Math.floor(Math.random() * choices.length); //random computer choice setup
  let result10 = choices[pcchose];
  document.getElementById('display10').innerHTML = result10;
}

document.getElementById('rock').addEventListener('click', rockFunction);
document.getElementById('paper').addEventListener('click', paperFunction);
document.getElementById('scissors').addEventListener('click', scissorsFunction);

function rockFunction(event) { //results when user clicks rock
  rockuser();
  computer();
  if (choices[pcchose] == 'rock') {
    let result1 = "It's a Tie!";
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'paper') {
    let result1 = "Computer wins!";
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'scissors') {
    let result1 = "User wins!";
    document.getElementById('display1').innerHTML = result1;
  }
}

function paperFunction(event) { //results when user clicks paper
  paperuser();
  computer();
  if (choices[pcchose] == 'rock') {
    let result1 = "User wins!";
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'paper') {
    let result1 = "It's a tie!";
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'scissors') {
    let result1 = "Computer wins!";
    document.getElementById('display1').innerHTML = result1;
  }
}

function scissorsFunction(event) { //results when user clicks scissors
  scissorsuser();
  computer();
  if (choices[pcchose] == 'rock') {
    let result1 = "Computer wins!";
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'paper') {
    let result1 = "User wins!"
    document.getElementById('display1').innerHTML = result1;
  } else if (choices[pcchose] == 'scissors') {
    let result1 = "It's a tie!";
    document.getElementById('display1').innerHTML = result1;
  }
}
