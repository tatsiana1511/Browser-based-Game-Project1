let leftBoard
let rightBoard
let playerScore = 0;

let imagesArray = ['https://img.icons8.com/color/48/000000/cute-mouse.png', 'https://img.icons8.com/color/48/000000/avocado.png', 'https://img.icons8.com/color/48/000000/socks.png', 'https://img.icons8.com/color/48/000000/alarm-clock--v1.png', 'https://img.icons8.com/officel/50/000000/dolphin.png', 'https://img.icons8.com/color/48/000000/a.png', 'https://img.icons8.com/color/48/000000/lipstick.png', 'https://img.icons8.com/color/48/000000/chocolate-bar.png', 'https://img.icons8.com/color/48/000000/autumn.png'];

function reset() {
    playerScore = 0;
    document.getElementById('score').textContent = playerScore;
    flipCardInnerContainerLeft = undefined;
    flipCardInnerContainerRight = undefined;
    imgClickedLeftBoard = undefined;
    imgClickedRightBoard = undefined;
    numOfGuesses = 0;
    let deleteImgArray = document.querySelectorAll('img');
    for (let i = 0; i < deleteImgArray.length; i++) {
        deleteImgArray[i].parentElement.removeChild(deleteImgArray[i]);
    }
}

function prepareBoards() {

    let leftBoardImages = imagesArray.map(img => {
        let imageEl = document.createElement('img');
        imageEl.setAttribute('src', img);
        return imageEl;
    })

    leftBoardImages[0].classList.add('mouse');
    leftBoardImages[1].classList.add('avocado');
    leftBoardImages[2].classList.add('socks');
    leftBoardImages[3].classList.add('alarm');
    leftBoardImages[4].classList.add('dolphin');
    leftBoardImages[5].classList.add('letter-a');
    leftBoardImages[6].classList.add('lipstick');
    leftBoardImages[7].classList.add('chocolate');
    leftBoardImages[8].classList.add('fall');

    let rightBoardImages = imagesArray.map(img => {
        let imageEl = document.createElement('img');
        imageEl.setAttribute('src', img);
        return imageEl;
    });

    rightBoardImages[0].classList.add('mouse');
    rightBoardImages[1].classList.add('avocado');
    rightBoardImages[2].classList.add('socks');
    rightBoardImages[3].classList.add('alarm');
    rightBoardImages[4].classList.add('dolphin');
    rightBoardImages[5].classList.add('letter-a');
    rightBoardImages[6].classList.add('lipstick');
    rightBoardImages[7].classList.add('chocolate');
    rightBoardImages[8].classList.add('fall');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let r = Math.floor(Math.random() * (i + 1));
            let random = array[i];
            array[i] = array[r];
            array[r] = random;
        }
    }
    shuffleArray(leftBoardImages);
    shuffleArray(rightBoardImages);
    
    leftBoard = document.querySelectorAll('#computer-board .flip-card-back');

    for (let i = 0; i < leftBoard.length; i++) {
        leftBoard[i].append(leftBoardImages[i]);
    }

    rightBoard = document.querySelectorAll('#user-board .flip-card-back');

    for (let i = 0; i < rightBoard.length; i++) {
        rightBoard[i].append(rightBoardImages[i]);
    }
}

document.getElementById('start-btn').addEventListener('click', function() {
    reset();
    prepareBoards();
    let flipCardInnerArray = document.getElementsByClassName('flip-card-inner');
    
    function displayImg() {
        for (let i = 0; i < flipCardInnerArray.length; i++) {
            flipCardInnerArray[i].classList.add('clicked-flip-card-inner');
        }     
    };
    displayImg();

    function timer() {
        for (let i = 0; i < flipCardInnerArray.length; i++) {
            flipCardInnerArray[i].classList.remove('clicked-flip-card-inner');
        }
    }
    setTimeout(timer, 5000);
});

let imgClickedLeftBoard
let flipCardInnerContainerLeft
document.getElementById('computer-board').addEventListener('click', function(evt){
    flipCardInnerContainerLeft = evt.target.parentElement;
    let flipCardBack = flipCardInnerContainerLeft.children[1];
    imgClickedLeftBoard = flipCardBack.children[0];
    flipCardInnerContainerLeft.classList.add('clicked-flip-card-inner');
})

let imgClickedRightBoard
let flipCardInnerContainerRight
document.getElementById('user-board').addEventListener('click', function(evt){
    flipCardInnerContainerRight = evt.target.parentElement;
    let flipCardBack = flipCardInnerContainerRight.children[1];
    imgClickedRightBoard = flipCardBack.children[0];
    flipCardInnerContainerRight.classList.add('clicked-flip-card-inner');
    score();
})

let numOfGuesses = 0;

function score() {
    numOfGuesses++;
    if (imgClickedLeftBoard !== undefined || imgClickedRightBoard !== undefined) {
        if (imgClickedLeftBoard.className === imgClickedRightBoard.className) {
            playerScore = playerScore + 5;
        } else {
            if (numOfGuesses > 2) {
                playerScore = playerScore - 2;
            }
            setTimeout(function() {
                flipCardInnerContainerLeft.classList.remove('clicked-flip-card-inner');
                flipCardInnerContainerRight.classList.remove('clicked-flip-card-inner');
            }, 2000);   
        }
        gameOver();
    }
    document.getElementById('score').textContent = playerScore;
}

function gameOver() {
    let flipCardArray = document.getElementsByClassName('clicked-flip-card-inner');
    let convertedflipCardArray = Array.prototype.slice.call(flipCardArray);

    if (playerScore < 0) {
        document.getElementById('gameover').textContent = 'You lost! :( You should train your memory! Click Start to play again.';
    }
    if (playerScore >= 0 && convertedflipCardArray.length === 18) {
        document.getElementById('gameover').textContent = 'Congrats! You have great memory! Click Start to play again.';
    }
}
gameOver()

