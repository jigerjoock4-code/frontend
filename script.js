const userName = "Ana";
    const greetingElement = document.querySelector("#user-greeting");
    const profileName = document.querySelector("#profile-name");

    greetingElement.textContent = "Willkommen, " + userName + "!";
    profileName.textContent = userName + " Atwell"



  
             
         

let begruessung =document.querySelector("#user-greeting")

begruessung.textContent="Klasse AIM für Frontend"



const kontakt1 =document.querySelector("#a")
kontakt1.innerText = "Simon"

const kontakt2 =document.querySelector("#b")
kontakt2.innerText = "Finn"

const kontakt3 =document.querySelector("#c")
kontakt3.innerText = "Tinescha"

const uber =document.querySelector("#uber")
uber.innerText = "Guter Messenger"

const profil ={
name:"Simon",
userName:"Simon der große"
}
const profileTag = document.querySelector("#profilename")
console.log(profileTag)
profileTag.textContent = profil.name