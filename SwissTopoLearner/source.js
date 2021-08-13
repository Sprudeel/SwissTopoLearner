
// Informationen über den ausgewählten Mode (String)
let currentMode;

// Antworten für Kanton Mode (Array)
let cantonAnswers = ["Zürich", "Bern", "Luzern", "Uri", "Schwyz", "Obwalden", "Nidwalden", "Glarus", "Zug", "Freiburg", "Solothurn", "Basel Stadt", "Basel Land", "Schaffhausen", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "Sankt Gallen", "Graubünden", "Aargau", "Thurgau", "Tessin", "Waadt", "Wallis", "Neuenburg", "Genf", "Jura"];

// Antworten für Stadt Mode (Array)
let stadtAnswers = ["Aarau", "Herisau", "Appenzell", "Liestal", "Basel", "Bern", "Biel", "Thun", "Freiburg", "Genf", "Glarus", "Chur", "Delémont", "Luzern", "La Chaux-de-Fonds", "Neuenburg", "Stans", "Sarnen", "Schaffhausen", "Schwyz", "Olten", "Solothurn", "Sankt Gallen", "Bellinzona", "Chiasso", "Lugano", "Frauenfeld", "Altdorf", "Lausanne", "Sion", "Zug", "Winterthur", "Zürich"];

// Antworten für Pass Mode (Array)
let passAnwers = ["Bernina", "Bözberg", "Col du Mollendruz", "Furka", "Gemmi", "Gotthard", "Greina", "Grimsel", "Grosser Sankt Bernhard", "Hauenstein", "Julier", "Lötschberg", "Lukmanier", "Maloja", "Monte Moro", "Nufenen", "Ofen", "Panixer", "San Bernadino", "Septimer", "Simplon", "Vue des Alpes"];

// Antworten für Seen Mode (Array)
let seenAnswers = ["Bielersee", "Bodensee", "Genfersee", "Langensee", "Luganersee", "Neuenburgersee", "Sankt Moritzersee", "Thunersee", "Vierwaldstättersee", "Walensee", "Zugersee", "Zürichsee"];

// Antworten für Fluss Mode (Array)
let flussAnswers = ["Aare", "Birs", "Broye", "Doubs", "Grosse Emme", "Hinterrhein", "Inn", "Kander", "Kleine Emme", "Landquart", "Limmat", "Linth", "Maggia", "Reuss", "Rhein", "Rhone", "Saane", "Simme", "Sitter", "Tessin", "Thur", "Vorderrhein"];

// Antworten für Berge, Gebirge Mode (Array)
let bergAnswers = ["Alpen", "Chasseral", "Churfirsten", "Dom", "Dufourspitze", "Eiger", "Jungfrau", "Jura", "Les Diablerets", "Matterhorn", "Mythen", "Napf", "Pilatus", "Piz Bernina", "Rigi", "San Salvatore", "Säntis", "Weissenstein"];

// Antworten für Special Mode (Array)
let specialAnswers = ["Berner Oberland", "Engadin", "Mittelland", "Seeland"];

// Hält die momentane Antwort (String)
let currentAnswer;

// Antwort des Users (String)
let answer;

// Score (Int)
let score = 0;



// Antworten des momentanen Mode (Array)
let arrayAnswers;

// Changes the Mode
function changeMode(id) {

    // Jeden Knopf Transparent machen
    for(i=1; i < 8;i++) {
        document.getElementById(i * 100).style.backgroundColor = "transparent";
    }

    // Gedrückten Knopf weiss machen
    id = id*100;
    document.getElementById(id).style.backgroundColor = "white";


    // switch currentMode to current mode!
    switch(id) {
        case 100:
            currentMode = "Kanton";
            setArray("Kanton");
            Game(currentMode);
            break;
        case 200:
            currentMode = "Stadt";
            setArray("Stadt");
            Game(currentMode);
            break;
        case 300:
            currentMode = "Pass";
            setArray("Pass");
            Game(currentMode);
            break;
        case 400:
            currentMode = "Seen";
            setArray("Seen");
            Game(currentMode);
            break;
        case 500:
            currentMode = "Fluss";
            setArray("Fluss");
            Game(currentMode);
            break;
        case 600:
            currentMode = "Berge";
            setArray("Berge");
            Game(currentMode);
            break;
        case 700:
            currentMode = "Special";
            setArray("spezial");
            Game(currentMode);
            break;
    }
}


function setArray(id) {

    switch(id) {
        case "Kanton":  
            arrayAnswers = cantonAnswers;
            break;
        case "Stadt":  
            arrayAnswers = stadtAnswers;
            break;
        case "Pass":
            arrayAnswers = passAnwers;
            break;
        case "Seen":
            arrayAnswers = seenAnswers;
            break;
        case "Fluss":
            arrayAnswers = flussAnswers;
            break;
        case "Berge":
            arrayAnswers = bergAnswers;
            break;
        case "spezial":
            arrayAnswers = specialAnswers;
            break;
    }
    return arrayAnswers;

}

let last = "Bern";
let randomNumber = 1;
// actuall game
function Game(mode) {
    document.getElementById("losung").style.display = "none";

    // change input to normal color
    document.getElementById(69).style.backgroundColor = "white";
    document.getElementById(69).style.borderColor = "black";
    document.getElementById(69).value = "";
    document.getElementById("solution").style.display = "none";

    // check which mode
    if(mode === "Kanton") {
        // KANTON GAME
        
        // random number
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }

        last = randomNumber;

        // Select PNG
        document.getElementById(6969).src = "images/kantone/" +  arrayAnswers[randomNumber - 1] + ".jpg"
        // make answer
        currentAnswer = arrayAnswers[randomNumber - 1];

        // repeat!
        return last, randomNumber;
    } else if (mode === "Stadt") {
        // STADT GAME

        // random number
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }

        last = randomNumber;

        // Select PNG
        document.getElementById(6969).src = "images/staedte/" +  arrayAnswers[randomNumber - 1] + ".jpg"
        // make answer
        currentAnswer = arrayAnswers[randomNumber - 1];

        // repeat!
        return last, randomNumber;

    } else if (mode == "Pass") {
        // PASS GAME

         // random number
         randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

         if(randomNumber === last) {
             randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
 
             if(randomNumber == last) {
                 randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
             }
         }
 
         last = randomNumber;
 
         // Select PNG
         document.getElementById(6969).src = "images/paesse/" +  arrayAnswers[randomNumber - 1] + ".jpg"
         // make answer
         currentAnswer = arrayAnswers[randomNumber - 1];
 
         // repeat!
         return last, randomNumber;
    } else if (mode == "Seen") {
        // SEEN GAME

         // random number
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
 
            if(randomNumber == last) {
                 randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }
 
         last = randomNumber;
 
         // Select PNG
         document.getElementById(6969).src = "images/seen/" +  arrayAnswers[randomNumber - 1] + ".jpg"
         // make answer
         currentAnswer = arrayAnswers[randomNumber - 1];
 
         // repeat!
         return last, randomNumber;
    } else if (mode == "Fluss") {
        // FLUSS GAME

         // random number
         randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

         if(randomNumber === last) {
             randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
  
             if(randomNumber == last) {
                  randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
             }
         }
  
          last = randomNumber;
  
          // Select PNG
          document.getElementById(6969).src = "images/fluesse/" +  arrayAnswers[randomNumber - 1] + ".jpg"
          // make answer
          currentAnswer = arrayAnswers[randomNumber - 1];
  
          // repeat!
          return last, randomNumber;
    } else if (mode == "Berge") {
        // BERG GAME

         // random number
         randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

         if(randomNumber === last) {
             randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
  
             if(randomNumber == last) {
                  randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
             }
         }
  
          last = randomNumber;
  
          // Select PNG
          document.getElementById(6969).src = "images/berge/" +  arrayAnswers[randomNumber - 1] + ".jpg"
          // make answer
          currentAnswer = arrayAnswers[randomNumber - 1];
  
          // repeat!
          return last, randomNumber;
    } else if (mode == "Special") {
        // SPEZIAL GAME

         // random number
         randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

         if(randomNumber === last) {
             randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
  
             if(randomNumber == last) {
                  randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
             }
         }
  
          last = randomNumber;
  
          // Select PNG
          document.getElementById(6969).src = "images/special/" +  arrayAnswers[randomNumber - 1] + ".jpg"
          // make answer
          currentAnswer = arrayAnswers[randomNumber - 1];
  
          // repeat!
          return last, randomNumber;
    } else {
        window.alert("Something went really wrong....")
    }
}

// check answer
function checkAnswer() {
    answer = document.getElementById(69).value; 

    if(answer.toLowerCase() == currentAnswer.toLowerCase()) {

        // change color if correct
        document.getElementById(69).style.backgroundColor = "limegreen";
        document.getElementById(69).style.borderColor = "rgba(28, 151, 28, 0.52)";
        document.getElementById(1000).style.borderColor = "limegreen";

        // repeat after 1sec
        setTimeout(function(){ Game(currentMode)}, 1000);

        // update score
        score++;
        document.getElementById(420).innerHTML = "Score: " + score;
    } else {

        // change color if incorrect
        document.getElementById(69).style.backgroundColor = "red";
        document.getElementById(69).style.borderColor = "rgba(202, 29, 29, 0.452)";

        // update score!
        score--;
        document.getElementById(420).innerHTML = "Score: " + score;
        document.getElementById("solution").style.display = "inline";
    }
}


function showSolution() {
    // zeigt lösung an 
    document.getElementById("losung").innerHTML = "Lösung: " + currentAnswer;
    document.getElementById("losung").style.display = "block";
}




let secret = 0;
// dont look in here
function secretSh() {
    secret++;

    if(secret > 5) {
        document.getElementById(999).innerHTML = "Topo Schweiz - Developer Mode";
            document.getElementById(2000).style.display = "block";
            document.getElementById(2001).style.display = "block";
    }
}





function doSorting() {
    for (i=0;i < arrayAnswers.length;i++) {
        var before = document.getElementById("text");
        var test = document.createElement("input");
        var text = document.createElement("h4");


        
        text.id = i + 201
        text.className = "auswahlText"
        before.insertBefore(text, null);



        test.id = i + 91;
        test.className = "auswahl";
        test.type = "checkbox";
        text.insertBefore(test, null);
        var currentHTML = document.getElementById(i + 201).innerHTML
        document.getElementById(i + 201).innerHTML = currentHTML + "   " + arrayAnswers[i];  
    }

        var btn = document.createElement("button");
        btn.id = 170;
        btn.className = "submit"
        btn.setAttribute("onclick", "submitChoose()");
        before.insertBefore(btn, null);
        document.getElementById(170).innerHTML = "Submit";


        document.getElementById(2001).style.display = "none";
}
function chooseShit() {

    document.getElementById("overlay").style.display = "block";


}




function submitChoose() {
    
    let tempStorage = [];
    for (i=0;i < arrayAnswers.length;i++) {


        if(document.getElementById(i + 91).checked == true) {
            tempStorage.push(arrayAnswers[i]);
        }

    }

    arrayAnswers = tempStorage;


    document.getElementById("overlay").style.display = "none";


    return arrayAnswers;
}


let why = 0
function breakImg() {
    why++;

    if( why == 5) {
        document.getElementById(6969).src = "images/kantone/why.jpg"
    }
}