let allCards
let deleteBtn
let card1
let card2
let card3

document.addEventListener("DOMContentLoaded",()=> {
    fetch("http://localhost:3000/cards")
    .then(function(res){
        return res.json()
    })//ends .then
    .then(function(cards){
        allCards = cards
        allCards.forEach(card => {renderCard(card)})//ends forEach
    })//ends.then
    
    function renderCard(card){
        const cardContainer = document.querySelector("#card-summary-container")
        const cardDiv = document.createElement("div")
        cardDiv.className = "card-container"
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
            showName.forEach(name =>{
                name.style.display = "block"
                 })
            showImg.forEach(image =>{
                image.style.display = "block"
            })
            
             h2.style.display = "none"
             img.style.display = "none"
             keyWordsUl.style.display= "none"
             meaningsUl.style.display= "none"
             returnBtn.style.display = "none"
            })  

        const img = document.createElement("img")
        img.src = `../tarot-frontend/src/styles/images/${card.img}`
        
       
        const keyWordsUl = document.createElement("ul")
        keyWordsUl.style= "list-style-type:none;"
        keyWordsUl.style.display= "none"
        card.keywords.forEach(keyword => {
            const li = document.createElement("li")
            li.className = "list-items"
            li.innerText = keyword.content
            keyWordsUl.append(li)
        })  
        const meaningsUl = document.createElement("ul")
        meaningsUl.style= "list-style-type:none;"
        meaningsUl.style.display= "none"
        card.meanings.forEach(meaning =>{
            const meaningsLi = document.createElement("li")
             meaningsLi.innerText = meaning.content
             meaningsLi.className= "list-items"
             meaningsUl.append(meaningsLi)
        })
        
        cardDiv.append(h2, img, keyWordsUl, meaningsUl, returnBtn)
        
        img.addEventListener("click", ()=> {
            console.log("hide event listener is working")
            const hideImg = document.querySelectorAll("img")
            const hideName = document.querySelectorAll("h2")
            
             hideName.forEach(name =>{
                name.style.display = "none"
            })
            hideImg.forEach(image =>{
            image.style.display = "none"
            })
           
            h2.style.display = "block"
             img.style.display = "block"
             keyWordsUl.style.display= "block"
             meaningsUl.style.display= "block"
             returnBtn.style.display = "block"
        })//ends h2 event listener
           
    }//ends function renderCard()

    
    const readingBtn = document.querySelector("#reading")

    readingBtn.addEventListener("click", ()=> {
        readingBtn.style.display = "none"
        const hideImg = document.querySelectorAll("img")
        const hideName = document.querySelectorAll("h2")
        
        hideName.forEach(name =>{
            name.style.display = "none"
            })
        hideImg.forEach(image => {
        image.style.display = "none"
        })
             card1 = getRandomCard()
             card2 = getRandomCard()
             card3 = getRandomCard()
            renderReadingCard(card1)
            renderReadingCard(card2)
            renderReadingCard(card3)
          
       
    })//ends reading button event listener
    function renderReadingCard(card){
        const cardContainer = document.querySelector("#card-summary-container")
        const cardDiv = document.createElement("div")
        cardContainer.append(cardDiv)
        const readingP1 = document.createElement("p")
        const readingP2 = document.createElement("p")
        const readingP3 = document.createElement("p")
        readingP1.innerHTML = "The first card represents the light of the situation or what aspect needs to be focused on."
        readingP2.innerHTML = "The second card represents the shadow of the situation or what hidden forces are causing the situation." 
        readingP3.innerHTML = "The third card represents the course of action which the situation requires."
        cardDiv.append(readingP1, readingP2, readingP3)
        //readingInstructions()
        const postButton = document.createElement("button")
         postButton.innerText = "Save This Reading"
        cardDiv.append(postButton)
        postButton.addEventListener("click", () => {
            console.log(card1.name)
            let postObject = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
                body: JSON.stringify({
                   comment: "this is a comment",
                   card1: card1.name,
                   card2: card2.name,
                   card3: card3.name
                })
            };
            fetch("http://localhost:3000/readings", postObject )
            .then(res => res.json())
            .then(readingObject => {
                console.log(readingObject)
                const readingH3 =document.createElement("h3")
                //readingH3.innerText = `Reading number ${readingObject.id} has been saved`
                readingH3.innerText = `Your reading has been successfully saved!`

                //delete button is defined as a global variable at top of this file 
                //but I still get this error:
                //index.js:146 Uncaught (in promise) ReferenceError: deletBtn is not defined
                deleteBtn = document.createElement("button")
                deleteBtn.innerText= "X"
                postButton.style.display = "none"
                h2.style.display="none"
                img.style.display="none"
                keyWordsUl.style.display="none"
                meaningsUl.style.display="none"
                //the ABOVE CODE IS NOT HIDING THE ELEMENTS PROPERLY
                cardDiv.append(readingH3)
                readingH3.append(deletBtn)
                
                readingH3.addEventListener("click", ()=> {
                    console.log("this is a test!!!")
                })//end h3 event listener
            })
        
        })//ends POST eventListener
        const h2 = document.createElement("h2")
        h2.innerText = card.name
        const returnBtn = document.createElement("button")
        returnBtn.innerText = "View All Cards"
        returnBtn.style.display = "none"
      
        returnBtn.addEventListener("click", ()=> {
        console.log("show event listener is working")
            const showImg = document.querySelectorAll("img")
            const showName = document.querySelectorAll("h2")
            
            showName.forEach(name =>{
                name.style.display = "block"
                })
            showImg.forEach(image =>{
            image.style.display = "block"
            })
             postButton.style.display = "none"
             h2.style.display = "none"
             img.style.display = "none"
             keyWordsUl.style.display= "none"
             meaningsUl.style.display= "none"
             returnBtn.style.display = "none"
            })  

        const img = document.createElement("img")
        img.src = `../tarot-frontend/src/styles/images/${card.img}` 
        
        const keyWordsUl = document.createElement("ul")
        keyWordsUl.style= "list-style-type:none;"
        keyWordsUl.style.display= "none"

        card.keywords.forEach(keyword => {
            const li = document.createElement("li")
            li.innerText = keyword.content
            keyWordsUl.append(li)
        })
        
        const meaningsUl = document.createElement("ul")
        meaningsUl.style= "list-style-type:none;"
        meaningsUl.style.display= "none"
        card.meanings.forEach(meaning =>{
            const meaningsLi = document.createElement("li")
             meaningsLi.innerText = meaning.content
             meaningsUl.append(meaningsLi)
        })
        cardDiv.append(h2, img, keyWordsUl, meaningsUl, returnBtn)
    
            h2.style.display = "block"
             img.style.display = "block"
             keyWordsUl.style.display= "block"
             meaningsUl.style.display= "block"
             returnBtn.style.display = "block"
    }//ends function render reading card
    function getRandomCard(){
        let random = allCards[Math.floor(Math.random()*allCards.length)] 
        return random 
    }
   
    
})//ends dom content loaded

//deleteBtn.addEventListener("click", ()=> {

//fetch(`http://localhost:3000/${readings.id}`,{
    // method: "DELETE"
//})//ends delete fetch
//.then(res=> res.json())
//.then(res => readingH3)
//})//ends delete event listener


//where to create the textarea??
// textAreaBtn.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     comment = document.querySelector('textarea').value
//     fetch(`http://localhost:3000/${readings.id}`,{
//         method: "PATCH",
//         headers:{
//          "Content-Type": "application/json",
//          "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             comment: comment
//         })
//     })//ends PATCH fetch
//     .then(res => res.json())
//     .then(idk => {console.log(idk)})
//     //probably create a p with innerText comment and append p to something
// })//ends textAreaBtn event listener





// IF WE DECIDE POST TO CARDREADINGS
// let postObject = {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//     },
//     body: JSON.stringify({
//     //    "comment": "this is a comment",
//     //    "card1": card1.name,
//     //    "card2": card2.name,
//     //    "card3": card3.name
//     card_id: 1,
//     reading_id: 1
//     })
// };
// fetch("http://localhost:3000/card_readings", postObject )
// .then(res => res.json())
// .then(idk => {
//    // const readingsUl= document.createElement("ul")
//     //console.log(Reading.all)
//     console.log(card.cardreadings)
// })

// function readingInstructions(){
//     const cardDiv = document.createElement("div")
//     const readingP1 = document.createElement("p")
//     const readingP2 = document.createElement("p")
//     const readingP3 = document.createElement("p")
//     readingP1.innerHTML = "The first card represents the light of the situation or what aspect needs to be focused on."
//     readingP2.innerHTML = "The second card represents the shadow of the situation or what hidden forces are causing the situation." 
//     readingP3.innerHTML = "The third card represents the course of action which the situation requires."
//     cardDiv.append(readingP1, readingP2, readingP3)
// }//end readingInstructions