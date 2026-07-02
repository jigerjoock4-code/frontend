


let nachrichten = [

 {
    sender:"Jackie",
    text:"Hallo Ana"
 },
 {
    sender:"Du",
    text:"Hallo Jackie"
 },
 {
    sender:"Finn",
    text:"Ich bin da"
 },
 {
    sender:"Simon",
    text:"Ich bin auch da"
 }
]






let div = document.querySelector("#chat-area")


function nachritenanzeigen (message){

for (let i = 0; i<message.length; i++ ){

// erstellen wir einen Container -> also eine Nachrichtenblase
let nachrichtenBlase  = document.createElement("div")


// wenn das Objekt in der Eigenschaft sender - "Du" enthält -> 
if (message[i].sender=="Du") 
{
    nachrichtenBlase.classList.add("meineNachrichten")
}

nachrichtenBlase.classList.add("msg")

let sender = document.createElement("h1")
let msg = document.createElement("p")
sender.textContent=message[i].sender
msg.textContent=message[i].text
nachrichtenBlase.appendChild(sender)
nachrichtenBlase.appendChild(msg)
div.appendChild(nachrichtenBlase)
    
    
}

}















let kontakte = [
    "Finn",
    "Joschka",
    "Simon",
    "Alper",
    "Döner Ali",
    "Polizei",
    "Mülleimer an der Ecke"
]

let kontakteDiv = document.querySelector("#contacts-list")

for(let i = 0; i<kontakte.length; i++){
    let div = document.createElement("div")
    div.textContent=kontakte[i]
    kontakteDiv.appendChild(div)
}


function begruessung(AIM){
   console.log("Willkommen zum", AIM)
}


begruessung("AIM")


let familienNachrichten = [

 {
    sender:"Mama",
    text:"Hallo Ana"
 },
 {
    sender:"Du",
    text:"Hallo Jackie"
 },
 {
    sender:"Papa",
    text:"Ich bin da"
 },
 {
    sender:"Du",
    text:"Ich bin auch da"
 }
]





function anzeigen(msg){

msg.forEach((message)=>{

let nachrichtenBlase  = document.createElement("div")

if (message.sender=="Du") 
{
    nachrichtenBlase.classList.add("meineNachrichten")
}

nachrichtenBlase.classList.add("msg")

let sender = document.createElement("h1")
let msg = document.createElement("p")
sender.textContent=message.sender
msg.textContent=message.text
nachrichtenBlase.appendChild(sender)
nachrichtenBlase.appendChild(msg)
div.appendChild(nachrichtenBlase)

})

}








let msgListe = [
   "Hello",
   "How are you?"
]

anzeigen(familienNachrichten)


const button = document.querySelector("#sendenbutton")
const input = document.querySelector("#message-input")

button.addEventListener("click",(event)=>{

   
   familienNachrichten.push({sender:"Du",text:input.value})
   div.innerHTML = ""
   anzeigen(familienNachrichten)
   input.value=""
   event.preventDefault()

})


