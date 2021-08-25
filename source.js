
document.getElementById(400).style.display = "none";

// hide Menu
function hideMenu() {
    var menu = document.getElementById(99);
    var animation = [
        {transform: "translateX(-100%)"}
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    setTimeout(function() { document.getElementById(400).style.display = "block"; }, 500);
}

function expandMenu() {
    var menu = document.getElementById(99);
    var animation = [
        {transform: "translateX(0%)"}
        
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    document.getElementById(400).style.display = "none";
}

function showCorrect(name) {

    // Create a new Element to host all informations

    // Fill Element
    
}




// Multilingual Shit
var language = {
    en: {
        credit: "created by Sprudeel"
    },
    de: {
        credit: "erstellt von Sprudeel"
    }
};


if (window.location.hash) {
    if (window.location.hash === "#de") {
        credit.textContent = language.de.credit;
    }
}


