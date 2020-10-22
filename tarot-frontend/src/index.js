//whenever you want to use an image REMEMBER you must use the relative file path
//`styles/images/${card.img}`

//in your html file you must use the relative path to both your src and style.css
//to style.css from index.html
//relative path: src/styles/style.css
// to index.js from index.html
//src/index.js
let allCards
// console.log("js is running")
document.addEventListener("DOMContentLoaded",()=> {
    console.log("event listener is working")
  
    fetch("http://localhost:3000/cards")///is this what our localhost is actually called?
    .then(function(res){
        return res.json()
    })//ends .then
    .then(function(cards){
        //console.log(cards)
        allCards = cards
        allCards.forEach(card => {renderCard(card)})//ends forEach
    })//ends.then
    function renderCard(card){
        console.log("renderCard() is running")

        const cardContainer = document.querySelector("#card-summary-container")
        const cardDiv = document.createElement("div")
        cardContainer.append(cardDiv)
        
        const h2 = document.createElement("h2")
        h2.innerText = card.name
       
        const returnBtn = document.createElement("button")
        returnBtn.innerText = "Take Me Back To The Cards"
        returnBtn.style.display = "none"
        returnBtn.addEventListener("click", ()=> {
        console.log("show event listener is working")
            const showImg = document.querySelectorAll("img")
            const showName = document.querySelectorAll("h2")
            const showElemental = document.querySelectorAll(".elemental")
            showName.forEach(name =>{
                name.style.display = "block"
                })
            showImg.forEach(image =>{
            image.style.display = "block"
            
            })
            showElemental.forEach(elemental =>{
                elemental.style.display = "block"
                })
            h2.style.display = "none"
             img.style.display = "none"
             keyWordsUl.style.display= "none"
             meaningsUl.style.display= "none"
             returnBtn.style.display = "none"
            })  

        const img = document.createElement("img")
        img.src = `../tarot-frontend/src/styles/images/${card.img}`
        //img.className = "image"
        
        const keyWordsUl = document.createElement("ul")
        keyWordsUl.style.display= "none"
        

        card.keywords.forEach(keyword => {
            const li = document.createElement("li")
            li.innerText = keyword.content
            keyWordsUl.append(li)
        })
        
        const meaningsUl = document.createElement("ul")
        meaningsUl.style.display= "none"
        card.meanings.forEach(meaning =>{
            const meaningsLi = document.createElement("li")
             meaningsLi.innerText = meaning.content
             meaningsUl.append(meaningsLi)
        })

        const h5 = document.createElement("h5")
        h5.innerText = `Elemental: ${card.elemental}`
        h5.className = "elemental"
        // if (card.elemental == "null"){
        //     h5.innerText = " "
        // }else{
        //     h5.innerText = `Elemental: ${card.elemental}`
        // }
        // const br1 = document.createElement("br")
        // const br2 = document.createElement("br")
        // h5.append( br1, br2)
        
        cardDiv.append(h2, img, h5, keyWordsUl, meaningsUl, returnBtn)
       
        img.addEventListener("click", ()=> {
            console.log("hide event listener is working")
            const hideImg = document.querySelectorAll("img")
            const hideName = document.querySelectorAll("h2")
            const hideElemental = document.querySelectorAll(".elemental")
            hideName.forEach(name =>{
                name.style.display = "none"
                })
            hideImg.forEach(image =>{
            image.style.display = "none"
            })
            hideElemental.forEach(elemental =>{
                elemental.style.display = "none"
                })
            h2.style.display = "block"
             img.style.display = "block"
             keyWordsUl.style.display= "block"
             meaningsUl.style.display= "block"
             returnBtn.style.display = "block"
        })//ends h2 event listener

       //button.addEventListener
           
    }//ends function renderCard()

    
    const readingBtn = document.querySelector("#reading")
    //readingBtn.addEventListener("click", ()=> {
    readingBtn.addEventListener("click", ()=> {
        const hideImg = document.querySelectorAll("img")
        const hideName = document.querySelectorAll("h2")
        const hideElemental = document.querySelectorAll(".elemental")
        hideName.forEach(name =>{
            name.style.display = "none"
            })
        hideImg.forEach(image =>{
        image.style.display = "none"
        })
        hideElemental.forEach(elemental =>{
            elemental.style.display = "none"
            })

            let card1 = getRandomCard()
            let card2 = getRandomCard()
            let card3 = getRandomCard()
            renderReadingCard(card1)
            renderReadingCard(card2)
            renderReadingCard(card3)
       
    })//ends reading button event listener
    function renderReadingCard(card){
        console.log("renderReadingCard() is running")

        const cardContainer = document.querySelector("#card-summary-container")
        const cardDiv = document.createElement("div")
        cardContainer.append(cardDiv)
        
        const h2 = document.createElement("h2")
        h2.innerText = card.name
       
        const returnBtn = document.createElement("button")
        returnBtn.innerText = "View All Cards"
        returnBtn.style.display = "none"
        returnBtn.addEventListener("click", ()=> {
        console.log("show event listener is working")
            const showImg = document.querySelectorAll("img")
            const showName = document.querySelectorAll("h2")
            const showElemental = document.querySelectorAll(".elemental")
            showName.forEach(name =>{
                name.style.display = "block"
                })
            showImg.forEach(image =>{
            image.style.display = "block"
            
            })
            showElemental.forEach(elemental =>{
                elemental.style.display = "block"
                })
            h2.style.display = "none"
             img.style.display = "none"
             keyWordsUl.style.display= "none"
             meaningsUl.style.display= "none"
             returnBtn.style.display = "none"
            })  

        const img = document.createElement("img")
        img.src = `../tarot-frontend/src/styles/images/${card.img}`
        //img.className = "image"
        
        const keyWordsUl = document.createElement("ul")
        keyWordsUl.style.display= "none"
        

        card.keywords.forEach(keyword => {
            const li = document.createElement("li")
            li.innerText = keyword.content
            keyWordsUl.append(li)
        })
        
        const meaningsUl = document.createElement("ul")
        meaningsUl.style.display= "none"
        card.meanings.forEach(meaning =>{
            const meaningsLi = document.createElement("li")
             meaningsLi.innerText = meaning.content
             meaningsUl.append(meaningsLi)
        })

        const h5 = document.createElement("h5")
        h5.innerText = `Elemental: ${card.elemental}`
        h5.className = "elemental"
        
        cardDiv.append(h2, img, h5, keyWordsUl, meaningsUl, returnBtn)
            h2.style.display = "block"
             img.style.display = "block"
             keyWordsUl.style.display= "block"
             meaningsUl.style.display= "block"
             returnBtn.style.display = "block"
    }//ends function render reading card
    function getRandomCard(){
        var random = allCards[Math.floor(Math.random()*allCards.length)] 
        return random 
    }

})//ends dom content loaded