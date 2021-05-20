const UserChoiceDisplay = document.createElement('h1')
const SheldonChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameBoard = document.getElementById('game')
gameBoard.append(UserChoiceDisplay, SheldonChoiceDisplay, resultDisplay)

const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
let UserChoice
let SheldonChoice


const handleClick = (e) =>{
    UserChoice = e.target.id 
    UserChoiceDisplay.innerHTML = 'You: ' + UserChoice
    generateSheldonChoice()
    resultado()
    
}

const generateSheldonChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    SheldonChoice = randomChoice
    SheldonChoiceDisplay.innerHTML = 'Sheldon: ' + SheldonChoice
}

const resultado = function() {
    switch(UserChoice + SheldonChoice){
        case 'ScissorsPaper':
        case 'PaperRock':
        case 'RockLizard':
        case 'SpockScissors':
        case 'ScissorsLizard':
        case 'LizardPaper':
        case 'PaperSpock':
        case 'SpockRock':
            resultDisplay.innerHTML = "You Won!"
                break
        case 'RockScissors':
            resultDisplay.innerHTML = "As it always has. By the way, you won!"
                break

        case 'PaperScissors':
        case 'RockPaper':
        case 'LizardRock':
        case 'ScissorsSpock':
        case 'LizardScissors':
        case 'PaperLizard':
        case 'SpockPaper':
        case 'RockSpock':
            resultDisplay.innerHTML = "You Lost!"
            break
        case 'ScissorsRock':
            resultDisplay.innerHTML = "As it always has. By the way, you lost!"
            break

        case 'PaperPaper':
        case 'RockRock':
        case 'LizardLizard':
        case 'ScissorsScissors':
        case 'SpockSpock':
            resultDisplay.innerHTML = "Again!"
            break
    }
}

for (let i =0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameBoard.appendChild(button)
}

// const Results = () =>{
//     switch(UserChoice + SheldonChoice){
//         case 'scissorspaper':
//         case 'paperrock':
//         case 'rocklizard':
//         case 'spockscissors':
//         case 'scissorslizard':
//         case 'lizardpaper':
//         case 'paperspock':
//         case 'spockrock':
//             resultDisplay.innerHTML = "You Won!"
//                 break
//         case 'rockscissors':
//             resultDisplay.innerHTML = "As it always has. By the way, you Won!"
//                 break

//         case 'paperscissors':
//         case 'rockpaper':
//         case 'lizardrock':
//         case 'scissorsspock':
//         case 'lizardscissors':
//         case 'paperlizard':
//         case 'spockpaper':
//         case 'rockspock':
//             resultDisplay.innerHTML = "You Lost!"
//             break
//         case 'scissorsrock':
//             resultDisplay.innerHTML = "As it always has. By the way, you Lost!"
//             break

//         case 'paperpaper':
//         case 'rockrock':
//         case 'lizardlizard':
//         case 'scissorsscissors':
//         case 'spockspock':
//             resultDisplay.innerHTML = "Again!"
//             break
//     }
    
// }
