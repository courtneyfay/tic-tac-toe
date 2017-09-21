/*
Hints and Tricks
3. JavaScript portion will be next:
	3a. Locate the element first to use it within your app. 
		Think about using document.getElementById, document.getElementsByClassName or 
		something similar to locate your target elements. 
		Try this in your console to make sure your selection works.																	DONE
	3b. After finding the elements, start writing logic to listen for click events on those elements 								DONE
	3c. You will also need a variable to keep track of moves - this will be used to indicate whether or not to draw an X or an O. 	DONE

REQUIREMENTS
-Solution should use ONLY jQuery or vanilla JavaScript - not some combination thereof												DONE
-A user should be able to click on different squares to make a move 																DONE
-Every click will alternate between marking an X and O 																				DONE
-Upon marking of an individual cell, use JavaScript to add a class to each cell  
	to display separate colors (either background or text-both is better)															DONE
-A cell should not be able to be replayed once marked																				DONE
-Reset button clears the contents of the board																						UPGRADED

BONUS
-Display a message at the beginning of the game telling X or O to go first.															**NOT YET**
-Alert the winner if they have won three in a row. Hint: Determine a set of winning combinations. 									MEH
	Check those combinations on the board contents after every move.
-Add a scoreboard!																													**NOT YET**
*/ 

console.log("JS is loaded!");
//is there a vanilla JS equivalent to .ready() ?

// other global variables
let numberOfClicks = 0;

//sweet music sounds
let princessZeldaNoise = new Audio("media/zelda.mp3");
let yoshiNoise = new Audio("media/yoshi.mp3");


// global variables to grab individual cell IDs
let topLeftCell = document.getElementById('top-left');
let topMiddleCell = document.getElementById('top-middle');
let topRightCell = document.getElementById('top-right');
let middleLeftCell = document.getElementById('middle-left');
let middleMiddleCell = document.getElementById('middle-middle');
let middleRightCell = document.getElementById('middle-right');
let bottomLeftCell = document.getElementById('bottom-left');
let bottomMiddleCell = document.getElementById('bottom-middle');
let bottomRightCell = document.getElementById('bottom-right');

// creates an array of all the cells which can be looped through with one event listener
/*let arrayOfAllCells = [];
arrayOfAllCells.push(topLeftCell, topMiddleCell, topRightCell);
console.log(arrayOfAllCells);*/

// global variables to grab row, column and diagonal classes - all the possible patterns for winning 
// create a new function that checks through all winning patterns after every turn
let leftColumn = document.getElementsByClassName('left-column');
let middleColumn = document.getElementsByClassName('middle-column');
let rightColumn = document.getElementsByClassName('right-column');
let topRow = document.getElementsByClassName('top-row');
let middleRow = document.getElementsByClassName('middle-row');
let rightRow = document.getElementsByClassName('right-row');
let leftDiagonal = document.getElementsByClassName('left-diagonal');
let rightDiagonal = document.getElementsByClassName('right-diagonal');
//let possibleWinCombos = [];

// each individual cell listens for a "click" event and then runs the function cellClick 		
topLeftCell.addEventListener("click", cellClick); 
topMiddleCell.addEventListener("click", cellClick); 
topRightCell.addEventListener("click", cellClick); 
middleLeftCell.addEventListener("click", cellClick); 
middleMiddleCell.addEventListener("click", cellClick); 
middleRightCell.addEventListener("click", cellClick); 
bottomLeftCell.addEventListener("click", cellClick); 
bottomMiddleCell.addEventListener("click", cellClick); 
bottomRightCell.addEventListener("click", cellClick); 

//could I use an array of individual cells to make this DRYer?
	//arrayOfAllCells.addEventListener("click", cellClickX);
		/*for (var i = 0; i < arrayOfAllCells.length; i++) {
			arrayOfAllCells[i].addEventListener("click", cellClickX(arrayOfAllCells[i]));
		}*/

function checkForWin(array) {
	//all three in the class have the same text content (or could check by CSS class?)
	//WORKING: leftColumn, middleColumn, rightColumn, leftDiagonal, rightDiagonal
	//NOT WORKING: topRow, middleRow, bottomRow

	let checkArray = [];
	let xCount = 0;
	let oCount = 0;

	// creates an array of all the text in all three cells in the class
	for (let i = 0; i < array.length; i++) {
		checkArray.push(array[i].innerText);
	}

	for (let i = 0; i < checkArray.length; i++) {
		if (checkArray[i] === "X") {
			xCount = xCount + 1;
		} else if (checkArray[i] === "O") {
			oCount = oCount + 1;
		}
	}
	if (xCount === 3 || oCount === 3) {
		alert("We have a winner!");
	}
};

function cellClick() {
	numberOfClicks = numberOfClicks + 1;

	for (let i = 0; i < this.classList.length; i++) {
		// before it changes anything, checks to see if class of 'isClicked' has been added to the cell already 
		// - there has got to be a better way to do this!
		if (this.classList[i] === "isClicked") {
			return;
		} 
	}

	// finds the remainder % to tell whether number of clicks is even or odd (determines whether X or O should appear)
	let remainder = numberOfClicks % 2;

	//if number of clicks is even, then 
	if (remainder == 0) {
		// change box text to an 'X'
		this.textContent = "X";
		//play awesome sound!
		yoshiNoise.play();
		//add styles specific to the 'exes' class
		this.classList.add("exes");
		//adds isClicked as a class to the specific cell -- there has got to be a better way to do this
		this.classList.add("isClicked");
	} 
	//if number of clicks is odd, then 
	else if (remainder == 1) {
		// change box text to an 'O'
		this.textContent = "O";
		//play awesome sound!
		princessZeldaNoise.play();
		//add styles specific to the 'ohs' class
		this.classList.add("ohs");
		//adds isClicked as a class to the specific cell -- there has got to be a better way to do this
		this.classList.add("isClicked");

	} else {
		console.log("the number of clicks is neither odd nor even");
	}	

	checkForWin(leftColumn);
	checkForWin(middleColumn);
	checkForWin(rightColumn);
	checkForWin(topRow);
	checkForWin(middleRow);
	checkForWin(rightRow);
	checkForWin(leftDiagonal);
	checkForWin(rightDiagonal);
};

// reset button logic
// event handler listens for 'click' event and then runs the callback function to reload the page
let buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener("click", function() {
	document.location.reload(true);
});

