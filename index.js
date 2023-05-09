//computer picker


//let weapons = ['Rock', 'Paper', 'Scissors'];
//let weapon = weapons[Math.floor(Math.random()*weapons.length)];
//alert('The computer chose:' + weapon);

//player picker

//function player(){
//    let playerWeapon = prompt('choose a weapon')
//    alert('player chose ' + playerWeapon)
//}
// decider

function judge() {
    let playerWeapon = prompt('choose a weapon')

    let weapons = ['Rock', 'Paper', 'Scissors'];
    let weapon = weapons[Math.floor(Math.random()*weapons.length)];

    if (playerWeapon === weapon) {
        alert('the computer chose ' + weapon + ', tie!')
    }
    else if ((playerWeapon === 'Rock' && weapon === 'Scissors') || (playerWeapon === 'Paper' && weapon === 'Rock') || (playerWeapon === 'Scissors' && weapon === 'Paper')) {
        alert('the computer chose ' + weapon + ', you win!')
    }
    else if ((playerWeapon === 'Rock' && weapon === 'Paper') || (playerWeapon === 'Paper' && weapon === 'Scissors') || (playerWeapon === 'Scissors' && weapon === 'Rock')) {
        alert('the computer chose ' + weapon + ', you lose!')
    }
    else {
        alert('game broken')
    }
} 

// structure

function game() {
    for (let i = 1; i <= 5; i++) {
    judge()
    console.log(i)
    }
}
//function play() {
//    player()
//    judge()
//}






















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