let leftBoard
let rightBoard
let playerScore = 0;

let imagesArray = ['https://img.icons8.com/color/48/000000/cute-mouse.png', 'https://img.icons8.com/color/48/000000/avocado.png', 'https://img.icons8.com/color/48/000000/socks.png', 'https://img.icons8.com/color/48/000000/alarm-clock--v1.png', 'https://img.icons8.com/officel/50/000000/dolphin.png', 'https://img.icons8.com/color/48/000000/a.png', 'https://img.icons8.com/color/48/000000/lipstick.png', 'https://img.icons8.com/color/48/000000/chocolate-bar.png', 'https://img.icons8.com/color/48/000000/autumn.png'];

let imageElsArray = imagesArray.map(img => {
    let imageEl = document.createElement('img');
    console.log(imageEl);
    imageEl.setAttribute('src', img);
    return imageEl;
})

imageElsArray[0].classList.add('mouse');
imageElsArray[1].classList.add('avocado');
imageElsArray[2].classList.add('socks');
imageElsArray[3].classList.add('alarm');
imageElsArray[4].classList.add('dolphin');
imageElsArray[5].classList.add('letter-a');
imageElsArray[6].classList.add('lipstick');
imageElsArray[7].classList.add('chocolate');
imageElsArray[8].classList.add('fall');

let playerBoardImages = imagesArray.map(img => {
    let imageEl = document.createElement('img');
    imageEl.setAttribute('src', img);
    return imageEl;
});

playerBoardImages[0].classList.add('mouse');
playerBoardImages[1].classList.add('avocado');
playerBoardImages[2].classList.add('socks');
playerBoardImages[3].classList.add('alarm');
playerBoardImages[4].classList.add('dolphin');
playerBoardImages[5].classList.add('letter-a');
playerBoardImages[6].classList.add('lipstick');
playerBoardImages[7].classList.add('chocolate');
playerBoardImages[8].classList.add('fall');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let random = array[i];
        array[i] = array[r];
        array[r] = random;
    }
}
shuffleArray(imageElsArray);
shuffleArray(playerBoardImages);
    
leftBoard = document.querySelectorAll('#computer-board td');

for (let i = 0; i < leftBoard.length; i++) {
    leftBoard[i].append(imageElsArray[i]);
}

rightBoard = document.querySelectorAll('#user-board td');

for (let i = 0; i < rightBoard.length; i++) {
    rightBoard[i].append(playerBoardImages[i]);
}

document.getElementById('start-btn').addEventListener('click', function() {
    let imgArray = document.getElementsByTagName('img');
    
    function displayImg() {
        for (let i = 0; i < imgArray.length; i++) {
            imgArray[i].style.opacity = "1";
        }     
    };
    displayImg();

    function timer() {
        for (let i = 0; i < imgArray.length; i++) {
            imgArray[i].style.opacity = "0";
        }
    }
    setTimeout(timer, 2000);
});

let imgClickedLeftBoard
document.getElementById('computer-board').addEventListener('click', function(evt){
    imgClickedLeftBoard = evt.target.className;
    evt.target.style.opacity = '1';
})

let imgClickedRightBoard
document.getElementById('user-board').addEventListener('click', function(evt){
    imgClickedRightBoard = evt.target.className;
    evt.target.style.opacity = '1';
    score();
})

function score() {
    if (imgClickedLeftBoard !== undefined || imgClickedRightBoard !== undefined) {
        if (imgClickedLeftBoard === imgClickedRightBoard) {
            playerScore = playerScore + 5;
        } else {
            playerScore = playerScore - 2;
        }
    }
    document.getElementById('score').textContent = playerScore;
}
score();

function gameOver() {

}

