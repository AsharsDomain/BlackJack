let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Ashar",
    chips: 145,
    sayHello: function(){
      console.log("Wassup!")
    }
}
player.sayHello()


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(cards)

function getRandomCard(){
   let randomNum = Math.floor(Math.random() * 14)
   if(randomNum === 1){
      return 11
   }
   else if(randomNum>10){
      return 10
   }
   else{
      return randomNum 
   }
}

function startGame(){
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard =  getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   
   renderGame()
}

function renderGame(){
   cardsEl.textContent = "Cards "
   for(let i = 0; i<cards.length;i++){
      cardsEl.textContent += cards[i] + " "
   }
   sumEl.textContent = "Sum: " + sum
   if(sum <= 20){
      message = "do you want to draw a new card"
   }
   else if(sum === 21){
      message = "Wohoo! you won the game of blackjack"
      hasBlackJack = true
   }
   else{
      message = "You're out of the game"
      isAlive = false
   }
   messageEl.textContent = message
   console.log(message)
}
function newCard(){
   if(isAlive === true && hasBlackJack === false){
   console.log("Drawing a new card from the deck")
   let card = getRandomCard()
   sum += card
   cards.push(card)
   console.log(cards)
   renderGame() 
   }
}