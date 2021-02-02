//This project is a testament to how far my partner and I have come. 
//We built this app in Mod 3 of our bootcamp and it is still a bit buggy.
// We have moved on to other passion projects and enjoy having this
//little time capsule of our skill level halfway through the bootcamp.

let allCards;
let deleteBtn;
let card1;
let card2;
let card3;

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/cards")
    .then(function (res) {
      return res.json();
    }) //ends .then
    .then(function (cards) {
      allCards = cards;
      allCards.forEach((card) => {
        renderCard(card);
      }); //ends forEach
    }); //ends.then

  function renderCard(card) {
    const cardContainer = document.querySelector("#card-summary-container");
    const cardDiv = document.createElement("div");
    cardDiv.className = "tarot-card";
    cardContainer.append(cardDiv);

    const h2 = document.createElement("h2");
    h2.innerText = card.name;

    const returnBtn = document.createElement("button");
    returnBtn.innerText = "Take Me Back To The Cards";
    returnBtn.style.display = "none";

    // listens for a click and conditionally renders only the tarot cards
    returnBtn.addEventListener("click", () => {
      console.log("show event listener is working");
      const showImg = document.querySelectorAll("img");
      const showName = document.querySelectorAll("h2");

      showName.forEach((name) => {
        name.style.display = "block";
      });

      showImg.forEach((image) => {
        image.style.display = "block";
      });

      h2.style.display = "none";
      img.style.display = "none";
      keyWordsUl.style.display = "none";
      meaningsUl.style.display = "none";
      returnBtn.style.display = "none";
    });

    const img = document.createElement("img");
    img.src = `../tarot-frontend/src/styles/images/${card.img}`;

    const keyWordsUl = document.createElement("ul");
    keyWordsUl.style = "list-style-type:none;";
    keyWordsUl.style.display = "none";
    card.keywords.forEach((keyword) => {
      const li = document.createElement("li");
      li.className = "list-items";
      li.innerText = keyword.content;
      keyWordsUl.append(li);
    });

    const meaningsUl = document.createElement("ul");
    meaningsUl.style = "list-style-type:none;";
    meaningsUl.style.display = "none";
    card.meanings.forEach((meaning) => {
      const meaningsLi = document.createElement("li");
      meaningsLi.innerText = meaning.content;
      meaningsLi.className = "list-items";
      meaningsUl.append(meaningsLi);
    });

    cardDiv.append(h2, img, keyWordsUl, meaningsUl, returnBtn);

    // listens for an image click and conditionally renders the information for the
    //clicked card while hiding the rest of cards
    img.addEventListener("click", () => {
      //console.log("hide event listener is working");
      const hideImg = document.querySelectorAll("img");
      const hideName = document.querySelectorAll("h2");

      hideName.forEach((name) => {
        name.style.display = "none";
      });
      hideImg.forEach((image) => {
        image.style.display = "none";
      });

      h2.style.display = "block";
      img.style.display = "block";
      keyWordsUl.style.display = "block";
      meaningsUl.style.display = "block";
      returnBtn.style.display = "block";
    }); //ends h2 event listener
  } //ends function renderCard()

  const readingBtn = document.querySelector("#get-reading");

  //listens for a click
  //calls getRandomCard() to select tarot cards for the reading
  //calls  renderReadingCard() to conditionally render the cards from the reading

  readingBtn.addEventListener("click", () => {
    readingBtn.style.display = "none";
    const hideImg = document.querySelectorAll("img");
    const hideName = document.querySelectorAll("h2");

    hideName.forEach((name) => {
      name.style.display = "none";
    });
    hideImg.forEach((image) => {
      image.style.display = "none";
    });
    card1 = getRandomCard();
    card2 = getRandomCard();
    card3 = getRandomCard();
    renderReadingCard(card1);
    renderReadingCard(card2);
    renderReadingCard(card3);
  }); //ends reading button event listener

  function renderReadingCard(card) {
    const cardContainer = document.querySelector("#card-summary-container");
    const cardDiv = document.createElement("div");
    cardDiv.className = "tarot-card-reading";
    cardContainer.append(cardDiv);

    const readingP1 = document.createElement("p");
    const readingP2 = document.createElement("p");
    const readingP3 = document.createElement("p");
    readingP1.innerHTML =
      "First card: What aspect of the situation requires the most focus?";
    readingP2.innerHTML =
      "Second card: What hidden forces are influencing or causing the situation?";
    readingP3.innerHTML = "Third card: What course of action is recommended?";

    const commentReadingH3 = document.createElement("h3");
    commentReadingH3.innerText = "Leave Comment";

    const form = document.createElement("form");
    form.className = "comment-form";

    const textarea = document.createElement("textarea");
    textarea.innerText = "Enter your thoughts about this reading";
    textarea.className = "new-comment";

    const commentButton = document.createElement("button");
    commentButton.className = "button";
    commentButton.innerText = "Leave Comment";
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");

    cardDiv.append(
      readingP1,
      readingP2,
      readingP3,
      commentReadingH3,
      form,
      textarea,
      br1,
      br2,
      br3,
      commentButton
    );
    //listens for a click and renders the user's comment
    commentButton.addEventListener("click", (e) => {
      e.preventDefault();
      //console.log("I've been clicked");
      //console.log(readings)

      let comment = document.querySelector("textarea").value;

      fetch(`http://localhost:3000/readings/50`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          comment: comment,
        }),
      })
        .then((response) => response.json())
        .then((comment) => {
          const patchP = document.createElement("li");
          patchP.innerText = comment.comment;
          cardDiv.append(patchP);
        });
    });

    const postButton = document.createElement("button");
    postButton.innerText = "Save This Reading";
    cardDiv.append(postButton);
    postButton.addEventListener("click", () => {
      //console.log(card1.name)
      comment = "This is the default comment";
      let postObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          card1: card1.name,
          card2: card2.name,
          card3: card3.name,
        }),
      };
      fetch("http://localhost:3000/readings", postObject)
        .then((res) => res.json())
        .then((readingObject) => {
          console.log(readingObject.id);

          const readingH3 = document.createElement("h3");
          readingH3.innerText = `Your reading has been successfully saved!`;

          deleteBtn = document.createElement("button");
          deleteBtn.innerText = "Delete Reading";

          postButton.style.display = "none";
          h2.style.display = "none";
          img.style.display = "none";
          keyWordsUl.style.display = "none";
          meaningsUl.style.display = "none";

          cardDiv.append(readingH3);
          readingH3.append(deleteBtn);

          deleteBtn.addEventListener("click", () => {
            fetch(`http://localhost:3000/readings/${readingObject.id}`, {
              method: "DELETE",
            }) //ends delete fetch
              .then((res) => res.json())
              .then((res) => readingH3.remove());
          }); //ends delete event listener

          readingH3.addEventListener("click", () => {
            console.log("this is a test!!!");
          }); //end h3 event listener
        });
    }); //ends POST eventListener

    const h2 = document.createElement("h2");
    h2.innerText = card.name;
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "View All Cards";
    returnBtn.style.display = "none";

    returnBtn.addEventListener("click", () => {
      console.log("show event listener is working");
      const showImg = document.querySelectorAll("img");
      const showName = document.querySelectorAll("h2");

      let theReadingDiv = document.querySelectorAll(".tarot-card-reading");
      theReadingDiv.forEach((div) => {
        div.style.display = "none";
      });

      showName.forEach((name) => {
        name.style.display = "block";
      });
      showImg.forEach((image) => {
        image.style.display = "block";
      });
      
    });

    const img = document.createElement("img");
    img.src = `../tarot-frontend/src/styles/images/${card.img}`;

    const keyWordsUl = document.createElement("ul");
    keyWordsUl.style = "list-style-type:none;";
    keyWordsUl.style.display = "none";

    card.keywords.forEach((keyword) => {
      const li = document.createElement("li");
      li.innerText = keyword.content;
      keyWordsUl.append(li);
    });

    const meaningsUl = document.createElement("ul");
    meaningsUl.style = "list-style-type:none;";
    meaningsUl.style.display = "none";
    card.meanings.forEach((meaning) => {
      const meaningsLi = document.createElement("li");
      meaningsLi.innerText = meaning.content;
      meaningsUl.append(meaningsLi);
    });
    cardDiv.append(h2, img, keyWordsUl, meaningsUl, returnBtn);

    h2.style.display = "block";
    img.style.display = "block";
    keyWordsUl.style.display = "block";
    meaningsUl.style.display = "block";
    returnBtn.style.display = "block";
  } //ends function render reading card
  function getRandomCard() {
    let random = allCards[Math.floor(Math.random() * allCards.length)];
    return random;
  }
}); //ends dom content loaded
