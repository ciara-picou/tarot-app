//whenever you want to use an image REMEMBER you must use the relative file path
//`styles/images/${card.img}`

//in your html file you must use the relative path to both your src and style.css
//to style.css from index.html
//relative path: src/styles/style.css
// to index.js from index.html
//src/index.js

// console.log("js is running")
document.addEventListener("DOMContentLoaded",()=> {
    console.log("event listener is working")
    fetch("http://localhost:3000/cards")///is this what our localhost is actually called?
    .then(function(res){
        return res.json()
    })//ends .then
    .then(function(cards){
        //console.log(cards)
        cards.forEach(card => {renderCard(card)})//ends forEach
    })//ends.then
    function renderCard(card){
    //create div element/container to hold a card
    //create div elements for each card attribute (e.g. name, suit, astrology, etc)
    //use .append to append those attributes to that original container
    //use container.innerText = "" to clear
    //conditionally render the cards
    //display:block or display:none to hide the cards

        console.log("renderCard() is running")
        // console.log(card)
        // <div id="card-info">
        // <div class="image-card">
        //   <h2 class="title">Title of image goes here</h2>
        //   <h4 id="arcana">Arcana goes here</h4>
        //   <img src="./assets/image-placeholder.jpg" class="image" />
        // </div>
        const cardContainer = document.querySelector("#card-summary-container")
        const cardDiv = document.createElement("div")
        cardContainer.append(cardDiv)
        
        const h2 = document.createElement("h2")
        h2.innerText = card.name
        
        const img = document.createElement("img")
        img.src = `../tarot-frontend/src/styles/images/${card.img}`
        
        const keyWordsUl = document.createElement("ul")

        // card.keywords.forEach(keyword => {
        //     const li = document.createElement("li")
        //     li.innerText = keyword
        //     keyWordsUl.append(li)
        // })
        
        // const meaningsUl = document.createElement("ul")
        // card.meanings.light.forEach(meaning =>{
        //     const meaningsLi = document.createElement("li")
        //      meaningsLi.innerText = meaning
        //      meaningsUl.append(meaningsLi)
        // })

        const h5 = document.createElement("h5")
        h5.innerText = card.Elemental
        
        cardDiv.append(h2, img, h5)
        //cardDiv.append(keyWordsUl, meaningsUl)

           
    }//ends function renderCard()
})//ends dom content loaded