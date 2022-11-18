'use strict'


function StartUp() {
    document.body.innerHTML = "";
    AssignColor();
    for (var x = 1; x < 4; x++) {
            if (x == 1) {
                for (var y = 1; y < 5; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 100 + "px";
                    newBtn.style.width = 100 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.innerText = "button" + y;
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
            }
            if (x == 2) {
                for (var y = 5; y < 9; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 100 + "px";
                    newBtn.style.width = 100 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.innerText = "button" + y;
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
            }
            if (x == 3) {
                for (var y = 9; y < 13; y++) {
                    var newBtn = document.body.appendChild(document.createElement('button'));
                    newBtn.style.height = 100 + "px";
                    newBtn.style.width = 100 + "px";
                    newBtn.type = "submit";
                    newBtn.id = "btn" + y;
                    newBtn.innerText = "button" + y;
                }
                var lineBreak = document.createElement("br");
                document.body.appendChild(lineBreak);
            }
        }
}


function AssignColor() {
    var colors = ['red', 'blue', 'green', 'white', 'black', 'pink', 'red', 'blue', 'green', 'white', 'black', 'pink']
    //alert(colors.getRandom())
    for (var i = 1; i >= 12; i++) {
        var buttonSelected = document.getElementById("btn"+i)
        buttonSelected.addEventListener('click', function() {
            buttonSelected.style.backgroundColor = colors.getRandom();
        }, false)
    }
}
Array.prototype.getRandom = function (cut) {
    var i = Math.floor(Math.random() * this.length);
    if (cut && i in this) {
        return this.splice(i, 1)[0];
    }
    return this[i];
}
