var tiles = Array.from(document.querySelectorAll('.cells'));
var playerDisplay = document.querySelector('.display-player');
var resetButton = document.querySelector('#reset');
var announcer = document.querySelector('.announcer');
var gameBoard = document.querySelector('.container')

var tile0 = document.getElementById('1');
var tile1 = document.getElementById('2');
var tile2 = document.getElementById('3');
var tile3 = document.getElementById('4');
var tile4 = document.getElementById('5');
var tile5 = document.getElementById('6');
var tile6 = document.getElementById('7');
var tile7 = document.getElementById('8');
var tile8 = document.getElementById('9');
 

var board = ['', '', '', '', '', '', '', '', ''];
var firstPlayer = 'X';
var secondPlayer = 'O';
var currentPlayer = firstPlayer;
var gameActive = true;
var counter = 0;


// event listeners for each tile
tile0.addEventListener('click', handleClicks);
tile1.addEventListener('click', handleClicks);
tile2.addEventListener('click', handleClicks);
tile3.addEventListener('click', handleClicks);
tile4.addEventListener('click', handleClicks);
tile5.addEventListener('click', handleClicks);
tile6.addEventListener('click', handleClicks);
tile7.addEventListener('click', handleClicks);
tile8.addEventListener('click', handleClicks);


function handleClicks(event) {
var eventTarget = event.target
    if (eventTarget.textContent == '') { 
        if (counter % 2 == 0 ){ 
            eventTarget.textContent = 'X'
            playerDisplay.innerHTML = 'O'
        } else {
            eventTarget.textContent = 'O'
            playerDisplay.innerHTML = 'X'
        }  
        counter++;
    }
        announceWinner();
}
// All possible win combinations
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
   

function announceWinner (){
    if (tile0.textContent == 'X' && tile1.textContent  == 'X' && tile2.textContent  == 'X' ||
    tile3.textContent  == 'X' && tile4.textContent  == 'X' && tile5.textContent  =='X' ||
    tile6.textContent  == 'X' && tile7.textContent  == 'X' && tile8.textContent  =='X' ||
    tile0.textContent  == 'X' && tile3.textContent  == 'X' && tile6.textContent  =='X' ||
    tile1.textContent  == 'X' && tile4.textContent  == 'X' && tile7.textContent  =='X' ||
    tile2.textContent  == 'X' && tile5.textContent  == 'X' && tile8.textContent  =='X' ||
    tile0.textContent  == 'X' && tile4.textContent  == 'X' && tile8.textContent  =='X' ||
    tile2.textContent  == 'X' && tile4.textContent  == 'X' && tile6.textContent  =='X') {
    announcer.innerHTML = "X wins the pot"
    console.log("X wins");

    } else if (tile0.textContent == 'O' && tile1.textContent  == 'O' && tile2.textContent  == 'O' ||
    tile3.textContent  == 'O' && tile4.textContent  == 'O' && tile5.textContent  =='O' ||
    tile6.textContent  == 'O' && tile7.textContent  == 'O' && tile8.textContent  =='O' ||
    tile0.textContent  == 'O' && tile3.textContent  == 'O' && tile6.textContent  =='O' ||
    tile1.textContent  == 'O' && tile4.textContent  == 'O' && tile7.textContent  =='O' ||
    tile2.textContent  == 'O' && tile5.textContent  == 'O' && tile8.textContent  =='O' ||
    tile0.textContent  == 'O' && tile4.textContent  == 'O' && tile8.textContent  =='O' ||
    tile2.textContent  == 'O' && tile4.textContent  == 'O' && tile6.textContent  =='O') {
        announcer.innerHTML = "O wins the pot"
        console.log("O wins");
    } else if  (counter == 9) {
        announcer.innerHTML = "It's draw"
    }
}

function resetGame() {
    board = 0;
    gameActive = true;
    tile0.textContent = '';
    tile1.textContent = '';
    tile2.textContent = '';
    tile3.textContent = '';
    tile4.textContent = '';
    tile5.textContent = '';
    tile6.textContent = '';
    tile7.textContent = '';
    tile8.textContent = '';
    playerDisplay.innerHTML = 'X';
    announcer.innerHTML = '';
    counter = 0;
    
       
}
resetButton.addEventListener('click', resetGame);