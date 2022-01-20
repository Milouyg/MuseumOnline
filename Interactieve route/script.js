const lokatie = document.getElementById("location");
const myInput = document.getElementById("myInput");
let currentIndex = 0;

let locationList = [
    { // index 0
        text: "Je staat op de begane grond midden in het Rijksmuseum",
        image: "./img/begin.png",
        commands: {
            "noord": 1,
            "oost": 2,
            "zuid": 4,
            "west":3 
        }
    }, 
   { // index 1
        text: "je bent naar het noorden gegaan",
        image: "./img/garderobe.png",
        commands: {
            "noord":15,
            "oost": 10,
            "west":11 
        },
    },
    { // index 2
        text: "dit is text",
        image: "./img/Auditorium.png",
        commands: {
            "west":0
        }
    },
    { // index 3
        text: "Je staat nu bij de café en shop",
        image: "./img/Caféshop.png",
        commands: {
            "oost": 0
        }
    },
   { // index 4
        text: "Je bent nu bij de ticket verkoop",
        image: "./img/ticket.jpg",
        commands: {
            "oost":6,
            "zuid":5,
            "west":14
        },
    },
    { // index 5
        text: "dit is text",
        image: "./img/Toilette.png",
        commands: {
            "noord": 4
        }
    },
    { // index 6
        text: "Dit is text",
        image: "./img/kamer6.png",
        commands: {
            "oost": 2,
            "west": 4
        }
    },
   { // index 7
        text: "Dit is text",
        image: "./img/kamer7.png",
        commands: {
            "noord":8,
            "west":6
        },
    },
    { // index 8
        text: "dit is text",
        image: "./img/kamer8.png",
        commands: {
            "noord":9,
            "zuid":8
        }
    },
    { // index 9
        text: "Dit is text",
        image: "./img/kamer9.png",
        commands: {
            "zuid":3,
            "west":10
        }
    },
   { // index 10
        text: "Dit is text",
        image: "./img/kamer10.png",
        commands: {
            "oost":9,
            "zuid":1
        },
    },
    { // index 11
        text: "dit is text",
        image: "./img/Kamer11.png",
        commands: {
            "oost":11,
            "west":12 
        }
    },
    { // index 12
        text: "Dit is text",
        image: "./img/kamer12.png",
        commands: {
            "oost": 2,
            "west": 13,
        }
    },
   { // index 13
        text: "Dit is text",
        image: "./img/kamer13.png",
        commands: {
            "noord":12,
            "zuid": 14,
        },
    },
    { // index 14
        text: "dit is text",
        image: "./img/kamer14.png",
        commands: {
            "noord":13,
            "oost": 4,
        }
    },
    { // index 15
        text: "Dit is text",
        image: "./img/kamer15.png",
        commands: {
            "west":1
        },
    },
];

myInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter") option(myInput.value)
})

function setup(index) {
    document.getElementById("errorMessage").textContent = "";
    if(!isFinite(index)) { 
        callError("Dit is geen optie");
        return;
    }
    if(index > locationList.length-1) {
        callError("Deze locatie bestaat niet");
        return;
    }

    currentIndex = index;

    document.querySelector("div.tekstPositie > p").textContent = locationList[currentIndex].text;
    document.getElementById("locationImage").src = locationList[currentIndex].image;

    // mogelijkheden
    document.getElementById("mogelijkheden").innerHTML = "";
    document.getElementById("knop-nav").innerHTML = "";

    for(let i in locationList[currentIndex].commands) {
        let newListItem = document.createElement("li");
        newListItem.textContent = i;
        document.getElementById("mogelijkheden").appendChild(newListItem);
        let newKnop = document.createElement("button");
        newKnop.textContent = i;
        newKnop.onclick = () => {setup(locationList[currentIndex].commands[newKnop.textContent])}
        document.getElementById("knop-nav").appendChild(newKnop);
    }
}

// option function handelt de input van de user
function option(text) {
    myInput.value = "";
    setup(locationList[currentIndex].commands[text.toLowerCase()])
}

// function om de error naar de user te displayen
function callError(message) {
    document.getElementById("errorMessage").textContent = message;
}

// call de eerste setup handmatig.
setup(currentIndex);