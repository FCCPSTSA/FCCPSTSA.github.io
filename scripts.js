var colorArray = ["C2185B", "AB47BC", "BA68C8", "7B1FA2", "3F51B5", "283593", "2196F3", "1565C0", "0097A7", "006064", "00897B", "004D40", "EF6C00", "BF360C", "607D8B", "37474F"];
function assignColor() {
    clearInterval(change);
    var change = setInterval(function() {
        var color = colorArray[Math.floor(Math.random() * colorArray.length)];
        document.body.style.backgroundColor = "#" + color;
        console.log("#" + color);
    }, 1000);
}

assignColor();
