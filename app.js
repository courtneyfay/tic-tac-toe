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
-Solution should use ONLY jQuery or vanilla JavaScript - not some combination thereof												***NOT YET***
-A user should be able to click on different squares to make a move 																DONE
-Every click will alternate between marking an X and O 																				DONE
-Upon marking of an individual cell, use JavaScript to add a class to each cell  
	to display separate colors (either background or text-both is better)															DONE
-A cell should not be able to be replayed once marked																				DONE
-Reset button clears the contents of the board																						UPGRADED

BONUS
-Display a message at the beginning of the game telling X or O to go first.
-Alert the winner if they have won three in a row. Hint: Determine a set of winning combinations. 
	Check those combinations on the board contents after every move.
-Add a scoreboard!
*/ 

console.log("JS is loaded!");
//is there a vanilla JS equivalent to .ready() ?

// other global variables
let numberOfClicks = 0;

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

function cellClick() {
	numberOfClicks = numberOfClicks + 1;

	for (let i = 0; i < this.classList.length; i++) {
		console.log(this.classList[i]);

		// before it changes anything, checks to see if class of 'isClicked' has been added to the cell already - there has got to be a better way to do this
		if (this.classList[i] === "isClicked") {
			return;
		} 
	}

	// finds the remainder % to tell whether number of clicks is even or odd (determines whether X or O should appear)
	let remainder = numberOfClicks % 2;
	console.log("remainder " + remainder);

	//if number of clicks is even, then 
	if (remainder == 0) {
		// change box text to an 'X'
		this.textContent = "X";
		//add styles specific to the 'exes' class
		this.classList.add("exes");
		//adds isClicked as a class to the specific cell -- there has got to be a better way to do this
		this.classList.add("isClicked");
	} 
	//if number of clicks is odd, then 
	else if (remainder == 1) {
		// change box text to an 'O'
		this.textContent = "O";
		//add styles specific to the 'ohs' class
		this.classList.add("ohs");
		//adds isClicked as a class to the specific cell -- there has got to be a better way to do this
		this.classList.add("isClicked");

	} else {
		console.log("the number of clicks is neither odd nor even");
	}	
};

// reset button logic
// event handler listens for 'click' event and then runs the callback function
let buttonReset = document.getElementById('button-reset');
buttonReset.addEventListener("click", function() {
	document.location.reload(true);
	/*console.log("clicked on the reset button");
	numberOfClicks = 0;

	// local variable to grab all the cells by tag name 'td'
	let allCells = document.getElementsByTagName('td');

	// for loop clears the content of all cells and replaces with an empty string
	for (let i = 0; i < allCells.length; i++) {
		allCells[i].textContent = "";
		allCells[i].style.backgroundColor = "white";
	}*/
});

//

