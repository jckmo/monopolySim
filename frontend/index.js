const topRowContainer = document.querySelector('.topRow')
const middleNineContainer = document.querySelector('.middleNine')
const bottomRowContainer = document.querySelector('.bottomRow')

const game = document.querySelector('.game')
const setup = document.querySelector('.setup')
const submitSetup = document.querySelector('#submitSetup')

//initialize game
// move to function later after setup is created
document.addEventListener('DOMContentLoaded', () => {
  for (let x in GameSquare.squareData) {
    for (let y of GameSquare.squareData[x]) {
      new GameSquare(y.id, y.name, y.buyable, y.price, y.owned, y.buildable, y.builtOn)
    }    
  }

  for (let i = 0; i < GameSquare.gameSquares.length; i++) {
    let div
    if (i < 11) {
      div = topRowContainer
    } else if (i >= 11 && i < 29) {
      div = middleNineContainer
    } else {
      div = bottomRowContainer
    }
    GameSquare.gameSquares[i].createSquare(div)
  }
  
  submitSetup.addEventListener('click', (e) => {
    e.preventDefault()
    setup.style.visibility = 'hidden'
    game.style.visibility = 'visible'
  })
})




