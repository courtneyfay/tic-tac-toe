/*
Hints and Tricks
3. JavaScript portion will be next:
	3a. Locate the element first to use it within your app. 
		Think about using document.getElementById, document.getElementsByClassName or 
		something similar to locate your target elements. 
		Try this in your console to make sure your selection works.																DONE
	3b. After finding the elements, start writing logic to listen for click events on those elements
	3c. You will also need a variable to keep track of moves - this will be used to indicate whether or not to draw an X or an O.

REQUIREMENTS
-Solution should use ONLY jQuery or vanilla JavaScript - not some combination thereof
-A user should be able to click on different squares to make a move
-Every click will alternate between marking an X and O
-Upon marking of an individual cell, use JavaScript to add a class to each cell 
	to display separate colors (either background or text-both is better)
-A cell should not be able to be replayed once marked
-Reset button clears the contents of the board																					DONE

BONUS
-Display a message at the beginning of the game telling X or O to go first.
-Alert the winner if they have won three in a row. Hint: Determine a set of winning combinations. 
	Check those combinations on the board contents after every move.
-Add a scoreboard!
*/ 

console.log("JS is loaded!");
//is there a vanilla JS equivalent to .ready() ?

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
let arrayOfAllCells = [];
arrayOfAllCells.push(topLeftCell, topMiddleCell, topRightCell);
console.log(arrayOfAllCells);

// global variables to grab row, column and diagonal classes
let leftColumn = document.getElementsByClassName('left-column');
let middleColumn = document.getElementsByClassName('middle-column');
let rightColumn = document.getElementsByClassName('right-column');
let topRow = document.getElementsByClassName('top-row');
let middleRow = document.getElementsByClassName('middle-row');
let rightRow = document.getElementsByClassName('right-row');
let leftDiagonal = document.getElementsByClassName('left-diagonal');
let rightDiagonal = document.getElementsByClassName('right-diagonal');

//3b. After finding the elements, start writing logic to listen for click events on those elements
// find the individual cell (so 9) and create event listeners on each of them
//first go round, just console log that something is happening to the cell
		
topLeftCell.addEventListener("click", cellClickX); 
topMiddleCell.addEventListener("click", cellClickX); 
topRightCell.addEventListener("click", cellClickX); 
middleLeftCell.addEventListener("click", cellClickX); 
middleMiddleCell.addEventListener("click", cellClickX); 
middleRightCell.addEventListener("click", cellClickX); 
bottomLeftCell.addEventListener("click", cellClickX); 
bottomMiddleCell.addEventListener("click", cellClickX); 
bottomRightCell.addEventListener("click", cellClickX); 

function cellClickX() {
	console.log(event.type);
	this.textContent = "X";
};

//could you use an array of individual cells to keep this DRY?
	//arrayOfAllCells.addEventListener("click", cellClickX);
		/*for (var i = 0; i < arrayOfAllCells.length; i++) {
			arrayOfAllCells[i].addEventListener("click", cellClickX(arrayOfAllCells[i]));
		}*/

// reset button logic
// event handler listens for 'click' event and then runs the callback function
let buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener("click", function() {
	console.log("clicked on the reset button");

	// local variable to grab all the cells by tag name 'td'
	let allCells = document.getElementsByTagName('td');

	// for loop clears the content of all cells and replaces with an empty string
	for (let i = 0; i < allCells.length; i++) {
		allCells[i].textContent = "";
	}
});

//

