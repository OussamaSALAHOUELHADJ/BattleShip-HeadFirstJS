var positionToid;
var XPositions = [];
var YPositions = [];
var alphabetToNumbers = ["a", "b", "c", "d", "e", "f", "g"]; //numbers is index

function positioningShips(shipsPositions) {
  var i,
    j = 0;
  while (j != 3) {
    var isToken = false;
    var random = Math.floor(Math.random() * 7);
    for (i in shipsPositions) {
      if (shipsPositions[i] == random) {
        isToken = true;
      }
    }

    if (!isToken) {
      shipsPositions[j] = random;
      j += 1;
    }
  }
}

var ship1 = Math.trunc(Math.random(0, 7) * 10);

function FireButtonClicked() {
  var rightX = false;
  var rightY = false;
  var j;
  var inputText = document.getElementById("inputEnter").value;
  var inputY = inputText.substring(0, 1);
  var inputX = inputText.substring(1);
  var indexOfY = alphabetToNumbers.indexOf(inputY);
  console.log(indexOfY);
  setposition(inputX, indexOfY);
  if (indexOfY == -1 || inputX > 6) {
    alert("Please insetr a valid Location!");
    addToLog("Please insetr a valid Location!");
  } else {
    for (j in XPositions) {
      if (XPositions[j] == inputX) {
        console.log(XPositions[j]);
        rightX = true;
      }
    }
    for (j in YPositions) {
      if (YPositions[j] == indexOfY) {
        rightY = true;
      }
    }

    if (rightX && rightY) {
      Hit();
    } else {
      Miss();
    }
  }
}

function setposition(x, y) {
  positionToid = y.toString() + x.toString();
}

function Hit() {
  document.getElementById(positionToid).setAttribute("class", "hit");
  addToLog("Hit! Hit! Hit!");
}

function Miss() {
  document.getElementById(positionToid).setAttribute("class", "miss");
  addToLog("You missed keep trying!");
}

function solution() {
  setposition(XPositions[0], YPositions[0]);
  Hit();
  setposition(XPositions[1], YPositions[1]);
  Hit();
  setposition(XPositions[2], YPositions[2]);
  Hit();
  addToLog("We Hit, you LOSE!");
}

function addToLog(text) {
  var logText = document.getElementById("logsText");
  logText.innerHTML += text + "<br>";
}

function startPlaying() {
  addToLog("Starting...");
  positioningShips(XPositions);
  positioningShips(YPositions);
  console.log(XPositions + "\n" + YPositions);
  addToLog("Ships has been positioned!");
}
window.onload = startPlaying;
