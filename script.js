let gridContainer = document.querySelector("#grid-container");
//color array for multiple colors
let colorArr = ["sapphire blue" , "ruby red" , "teal" , "aquamarine" , "magenta" , "silver" , "red" , "orange" , "pink"] ; 
createDiv();
// here is default 16*16 grid box
function createDiv() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let noOfGrids = document.createElement("div");
            noOfGrids.classList.add("grid-items");
            gridContainer.appendChild(noOfGrids);
        }
    }
    setGridDimensions(16); 
}

// to take the user entry for no of grid boxes 
function EnterGrids() {
    let noOfRows = prompt("Hey, let me know how many rows and columns you want");
    if (noOfRows !== "" && !isNaN(noOfRows) && noOfRows <=100) {
        let gridSize = parseInt(noOfRows);
        deletePreviousGrid(gridContainer);
        createNewGrid(gridSize);
    } else {
        alert("Enter a value between 0 and 100");
    }
}

// to delete the previous grid boxes
function deletePreviousGrid(noOfGrids) {
    noOfGrids.innerHTML = "";
}

// creation of new grid boxes
function createNewGrid(totalGridLines) {
    for (let i = 0; i < totalGridLines * totalGridLines; i++) {
        let newGridItems = document.createElement("div");
        newGridItems.classList.add("grid-items");
        gridContainer.appendChild(newGridItems);
    }
    setGridDimensions(totalGridLines);
}

// set the width and height for each grid column or row boxes
function setGridDimensions(gridLines) {
    let gridItems = document.querySelectorAll(".grid-items");
    let itemSize = 500 / gridLines;

    // css styling for responsiveness
    gridItems.forEach((item) => {
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;
    });

    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
    gridContainer.style.width = "500px";
    gridContainer.style.height = "500px";

    gridItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            let randomColorIndex = Math.floor(Math.random() * (colorArr.length-1));
            item.style.background = colorArr[randomColorIndex];
        })
})}

function erase()
{
    let gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
        item.style.background = "white" ;
    })
})}

function eraseAll()
{
    let gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(function(item) 
    {
        item.style.background = "white" ;   
    })
}

function linearColor()
{
    let gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(function(item) {
        item.addEventListener("mouseenter", function(){
            item.style.background = "linear-gradient(47deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd)";
        })
})
}

function differentColors()
{
    let gridItems = document.querySelectorAll(".grid-items");
    gridItems.forEach(function(item) {
        item.addEventListener("mouseenter", function(){
            let randomColorIndex = Math.floor(Math.random() * (colorArr.length-1));
            item.style.background = colorArr[randomColorIndex];
        })
    })   
}