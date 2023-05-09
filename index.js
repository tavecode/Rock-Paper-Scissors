//computer picker

function picker() {
    let weapons = ['Rock', 'Paper', 'Scissors'];
    let weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon
}

// player picker

function playerPicker() {
    let player = prompt('choose a weapon')
    return player
}

// global score

let playerScore = 0
let computerScore = 0

// logic + messages

function judge() {

    const computerChoice = picker()
    const playerWeapon = playerPicker()



    if (playerWeapon === computerChoice) {
        alert('the computer chose ' + computerChoice + ', the round is a tie!')
        console.log(`Player: ${playerScore}   Computer ${computerScore}`) 
    }
    else if ((playerWeapon === 'Rock' && computerChoice === 'Scissors') || (playerWeapon === 'Paper' && computerChoice === 'Rock') || (playerWeapon === 'Scissors' && computerChoice === 'Paper')) {
        alert('the computer chose ' + computerChoice + ', you win the round!')
        ++playerScore
        console.log(`Player: ${playerScore}   Computer ${computerScore}`)      
    }
    else if ((playerWeapon === 'Rock' && computerChoice === 'Paper') || (playerWeapon === 'Paper' && computerChoice === 'Scissors') || (playerWeapon === 'Scissors' && computerChoice === 'Rock')) {
        alert('the computer chose ' + computerChoice + ', you lose the round!')
        ++computerScore
        console.log(`Player: ${playerScore}   Computer ${computerScore}`)          
    }
    else {
        alert('game broken')
    }
    
} 

// structure (5rnds)

function game() {

    for (let i = 1; i <= 5; i++) {
    judge()
    console.log(i)
//    console.log(`${i} rounds   ${playerScore} player score   ${computerScore} computer score `)
    }
    if (playerScore > computerScore) {
        alert('YOU WON THE GAME!!!')
    }
    else if (computerScore > playerScore) {
        alert('YOU LOSE!!!')
    }
    else {
        alert("it's a tie...")
    }
    playerScore = 0
    computerScore = 0
}


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