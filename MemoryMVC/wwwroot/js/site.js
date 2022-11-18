'use strict'
window.sessionStorage.clear();
var guessCount = 2;
function StartUp() {
    document.body.innerHTML = "";
    
    for (var x = 1; x < 4; x++) {
            if (x == 1) {
                for (var y = 1; y < 5; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 300 + "px";
                    newBtn.style.width = 300 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.value = y;
                    newBtn.className = "btn"
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
            }
            if (x == 2) {
                for (var y = 5; y < 9; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 300 + "px";
                    newBtn.style.width = 300 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.value = y;
                    newBtn.className = "btn"
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
            }
            if (x == 3) {
                for (var y = 9; y < 13; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 300 + "px";
                    newBtn.style.width = 300 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.value = y;
                    newBtn.className = "btn"
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
        } 
    }
    AssignColor()
    /*addClick()*/
}


var colors = ['red', 'blue', 'green', 'white', 'black', 'pink', 'red', 'blue', 'green', 'white', 'black', 'pink']
/*console.log(colors)*/
function AssignColor() {
    var y = 1;
    //alert(colors.getRandom())
    //console.log(colors)
    const buttons = Array.from(document.querySelectorAll('.btn'));
    buttons.forEach((button) => {
        var i = Math.floor(Math.random() * 11);
        button.addEventListener('click', function () { 
            if (button.style.background == '') {
                var randomColor
                if (colors[i] != null) {
                    randomColor = colors[i];
                }
                else {randomColor = colors[0] }
            button.style.backgroundColor = randomColor;
            var col = button.style.backgroundColor
            var b = colors.splice(colors.indexOf(col), 1)
                window.sessionStorage.setItem("bgColor" + y, col)
                y++; 
                guessCount++
                guessTwo(button.value)
                //console.log(window.sessionStorage.getItem("bgColor1"))
                //console.log(window.sessionStorage.getItem("bgColor2"))
                //console.log(window.sessionStorage.getItem("bgColor3"))
                //console.log(window.sessionStorage.getItem("bgColor4"))
                //console.log(window.sessionStorage.getItem("bgColor5"))
                //console.log(window.sessionStorage.getItem("bgColor6"))
                //console.log(window.sessionStorage.getItem("bgColor7"))
                //console.log(window.sessionStorage.getItem("bgColor8"))
                //console.log(window.sessionStorage.getItem("bgColor9"))
                //console.log(window.sessionStorage.getItem("bgColor10"))
                //console.log(window.sessionStorage.getItem("bgColor11"))
                //console.log(window.sessionStorage.getItem("bgColor12"))
            }
        })
    })
}
Array.prototype.getRandom = function (cut) {
    var i = Math.floor(Math.random() * this.length);
    if (cut && i in this) {
        return this.splice(i, 1)[0];
        window.sessionStorage.setItem("updatedArray", JSON.stringify(this))
    }
    window.sessionStorage.setItem("updatedArray", JSON.stringify(this))
    return this[i];
}
function addClick() {
    const buttons = Array.from(document.querySelectorAll('.btn'));
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            guessCount++
            guessTwo(button.value);
        });
    });
}
function checkGuess(y) {
    var guessColor = window.sessionStorage.getItem("bgColor" + y)
    if (window.sessionStorage.getItem("firstGuess") == '' || undefined || null) {
        window.sessionStorage.setItem("firstGuess", guessColor)
    }
    if (window.sessionStorage.getItem("firstBtn") == '' || undefined || null) {
        window.sessionStorage.setItem("firstBtn", y)
    }
    var guess1 = window.sessionStorage.getItem("firstGuess");
    var guess2 = guessColor
    if (guessCount == 2 && guess1 == guess2) {
            var first = window.sessionStorage.getItem("firstBtn")
        window.sessionStorage.setItem("firstGuess", '')
        window.sessionStorage.setItem("firstBtn", '')
        guessCount = 0;
        alert('correct!')
        
        }
    else if (guessCount == 2 && guess1 != guess2) {
        var x = window.sessionStorage.getItem("firstBtn")
        window.sessionStorage.setItem("firstGuess", '')
        window.sessionStorage.setItem("firstBtn", '')
        alert('not correct')
        guessCount = 0;
    }
        console.log(guess1)
    console.log(guess2)
    console.log(guessCount)
}
var isTrue = true;

function guessTwo(y) {
    var x;
    console.log(guessCount)
    if (guessCount % 2 == 0) {
        isTrue = true
        guessCheck(y)
    }
    if (guessCount % 2 != 0) {
        x = y;
        window.sessionStorage.setItem("x", x)
        isTrue = false
    }
}
function guessCheck(y) {
    var x = window.sessionStorage.getItem("x")
    var butOne = document.getElementById("btn" + x).style.backgroundColor
    var butTwo = document.getElementById("btn"+y).style.backgroundColor
    console.log(butOne, butTwo)
    console.log(x,y)
    if (butOne == butTwo) {
        alert('good job')
        window.sessionStorage.clear("x")
    }
    else if (butOne != butTwo) {
        alert('better luck next time')
        window.sessionStorage.removeItem("x")
    }
}

