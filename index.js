// Path: thCbiii.github.io/index.js

// HTML Content
var clickCounter = document.getElementById("clickCounter");
var clickButton = document.getElementById("clickButton");

// Click functions
clickButton.onclick = function() {
    clickCounter.innerHTML = parseInt(clickCounter.innerHTML) + 1;
};

