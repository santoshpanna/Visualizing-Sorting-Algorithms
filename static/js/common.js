// simple timeout function
function sleep(time = 50) {
    if (time != 50)
        time = sortApp.delayValue;
    return new Promise(resolve => setTimeout(resolve, time));
}

// function to return width value
function getWidth(width) {
    return Number(width.slice(0,2));
}

// function to return margin-right value
function getMargin(margin) {
    return Number(margin.slice(0,1));
}

// change color of active elements of array for better representation
function liteIt(i, j) {
    document.getElementById(i).style.backgroundColor = "#C1A106";
    document.getElementById(j).style.backgroundColor = "#059FC2";
}

// change back the color to original color
function reverseIt(i, j) {
    document.getElementById(i).style.backgroundColor = "#AE394B";
    document.getElementById(j).style.backgroundColor = "#AE394B";
}

// responsive website function
function responsive(noOfElements) {
    var width = getWidth(sortApp.line.width);
    var margin = getMargin(sortApp.line.marginRight);
    if (noOfElements * (width + margin) + 160 >= window.innerWidth) {
        width -= 2;
        if (width <= 4)
            margin = 1;
        sortApp.line.width = width + "px";
        sortApp.line.marginRight = margin + "px";
    } else {
        width += 2;
        if (width >= 12) {
            width = 12;
            margin = 2;
        }
        sortApp.line.width = width + "px";
        sortApp.line.marginRight = margin + "px";
    }
}