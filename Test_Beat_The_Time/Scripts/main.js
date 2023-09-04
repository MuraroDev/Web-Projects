const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "Images/emojy_face.webp") {
        myImage.setAttribute("src", "Images/crying.jpg")
      }
        else {
            myImage.setAttribute("src", "Images/emojy_face.webp")
          }
        }

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Qual o seu nome?");
      if (!myName) {
            setUserName()
          }
            else {
            localStorage.setItem("name", myName);
       myHeading.textContent = `Ola, ${myName}. Seja bem vindo!`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Ola, ${storedName}. Seja bem vindo`;
  }

  myButton.onclick = () => {
    setUserName();
  };
