//computer picker

function picker() {
    let weapons = ['Rock', 'Paper', 'Scissors'];
    let weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon
}

// player picker

//function playerPicker() {
//    let player = prompt('choose a weapon')
//    return player
//}

// global score

let playerScore = 0
let computerScore = 0


// logic + messages

function round(playerWeapon) {

    const computerChoice = picker()

// you want to return the results of this function call, not console.log()

    if (playerWeapon === computerChoice) {
    //    alert('the computer chose ' + computerChoice + ', the round is a tie!')
        console.log(`Player: ${playerScore}   Computer ${computerScore}`) 
    }
    else if ((playerWeapon === 'Rock' && computerChoice === 'Scissors') || (playerWeapon === 'Paper' && computerChoice === 'Rock') || (playerWeapon === 'Scissors' && computerChoice === 'Paper')) {
    //    alert('the computer chose ' + computerChoice + ', you win the round!')
        ++playerScore
        console.log(`Player: ${playerScore}   Computer ${computerScore}`) 

    }
    else if ((playerWeapon === 'Rock' && computerChoice === 'Paper') || (playerWeapon === 'Paper' && computerChoice === 'Scissors') || (playerWeapon === 'Scissors' && computerChoice === 'Rock')) {
    //    alert('the computer chose ' + computerChoice + ', you lose the round!')
        ++computerScore
        console.log(`Player: ${playerScore}   Computer ${computerScore}`)          
    }
    else {
        alert('game broken')
    }
    if (playerScore >= 5) {
        alert('YOU WON THE GAME!!!')
        console.log('YOU WON THE GAME!!!')
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore >= 5) {
        alert('YOU LOSE!!!')
        console.log('YOU LOSE!!!')
        playerScore = 0
        computerScore = 0
    }
} 

// structure (5rnds)

//function game(playerWeapon) {

//    for (let i = 1; i <= 5; i++) {
//    judge(playerWeapon)
//    console.log(i)
//    console.log(`${i} rounds   ${playerScore} player score   ${computerScore} computer score `)
//    }
//    if (playerScore > computerScore) {
//        alert('YOU WON THE GAME!!!')
//    }
//    else if (computerScore > playerScore) {
//        alert('YOU LOSE!!!')
//    }
//    else {
//        alert("it's a tie...")
//    }
//    playerScore = 0
//    computerScore = 0
//}




window.onload = function(){ 
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    round('Rock')
    score()
  });
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
      round('Paper')
      score()
    });
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        round('Scissors')
        score()
      });


}

function score() {
    const pscore = document.querySelector('pscore');
    document.querySelector('.pscore').textContent = `Player Score: ${playerScore}`
    const cscore = document.querySelector('cscore');
    document.querySelector('.cscore').textContent = `Computer Score: ${computerScore}`
}




//window.onload = function(){ 
//const paper = document.querySelector('#paper');
//paper.addEventListener('click', () => {
//    round('Paper')
//  });
//}





//    if (judge(playerWeapon, weapon) == 'Player') {
//        ++playerScore
//    }


// player picker (case insensitive)

// 5rd game













//  function getComputerChoice() {
//    let rps = ["Rock", "Paper", "Scissors"]
//    let randInt = randomGenerator(0, rps.length - 1)
//    let pick = rps[randInt]
//    return pick;
// } 



// button => pick, play round + judge
// running score
// message and reset
// display score on page
//  change text content (backticks?)
//


// style