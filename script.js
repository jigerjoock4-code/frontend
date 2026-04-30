

  
let nachrichten = [

       "Hallo Ana",
       "Hallo Jackie",
       "Hallo Fin",
       "Wie geht es dir?",
       "Tschüß",
       "Hallo Herr Finn, wie ist es also heute",
       "Wie wie ist es",
       "Ja wie"

]

     


for (let i = 0; i < nachrichten.length ; i++) {


    console.log(nachrichten[i])

}

let div = document.querySelector("#chat-area")


for(let i = 0; i<nachrichten.length; i++){

let p = document.createElement("p")
p.textContent=nachrichten[i]
div.appendChild(p)


}
 
