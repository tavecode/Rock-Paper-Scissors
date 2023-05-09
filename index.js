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


//let playerScore = 0
//let computerScore = 0

let playerScore = 0
let computerScore = 0

function judge() {
//    let playerWeapon = prompt('choose a weapon')

//    let weapons = ['Rock', 'Paper', 'Scissors'];
//    let weapon = weapons[Math.floor(Math.random()*weapons.length)];



    const computerChoice = picker()
    const playerWeapon = playerPicker()



    if (playerWeapon === computerChoice) {
        alert('the computer chose ' + computerChoice + ', the round is a tie!')
        console.log(`Player: ${playerScore}   Computer ${computerScore}`) 
//        return 'Tie'
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
//        return computerScore
    }
    else {
        alert('game broken')
    }
    
} 

// structure

function game() {
//    let playerScore = 0
//   let computerScore = 0
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
}


//    if (judge(playerWeapon, weapon) == 'Player') {
//        ++playerScore
//    }





















// random computer picker

//const picks = ["Rock", "Paper", "Scissors"]

//function getComputerChoice() {
//   const choice = picks[Math.floor(Math.random * picks.length)]
//    return choice;
//}
// player picker (case insensitive)

//function playerChoice() {
//let player = prompt()
//}




// decider, return msg


//function input() {
//    getComputerChoice;
//    if (player === "Rock" && computer === "Rock") || (player === "Paper" && computer === "Paper")|| (player === "Scissors" && computer === "Scissors") {
//        console.log("tie") }
//    else if (player === "Rock" && computer === "Paper") || (player === "Paper" && computer === "Scissors") || (player === "Scissors" && computer === "Rock"){
//        console.log("you lose")
//    }
//    else if (player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper"){
//        console.log("you win")
//}
//    else {
//        console.log("broken")
//    }
//}



// 5rd game













//  function getComputerChoice() {
//    let rps = ["Rock", "Paper", "Scissors"]
//    let randInt = randomGenerator(0, rps.length - 1)
//    let pick = rps[randInt]
//    return pick;
// } 