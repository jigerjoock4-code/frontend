

  
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





    for (let i = 0; i<nachrichten.length; i++ ){


    let nachrichtenBlase  = document.createElement("div")

    if (nachrichten[i].sender=="Du") {
    nachrichtenBlase.classList.add("meineNachrichten")
    }

    nachrichtenBlase.classList.add("msg")

  

let sender = document.createElement("h1")
let msg = document.createElement("p")

sender.textContent=nachrichten[i].sender
msg.textContent=nachrichten[i].text
    nachrichtenBlase.appendChild(sender)
    nachrichtenBlase.appendChild(msg)





    div.appendChild(nachrichtenBlase)
    
    
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


