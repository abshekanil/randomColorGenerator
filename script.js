let container = document.querySelector('.container');
let colorContainer = document.querySelector('.colorContainer');

for(let i=0; i<30; i++)
{
    let div = document.createElement("div");
    div.classList.add('colorContainer');
    container.appendChild(div);
}

let allColorContainers = document.querySelectorAll('.colorContainer');

function generateColor(){
    allColorContainers.forEach((allColorContainer) => {
        const newColorCode = randomColor();
        allColorContainer.style.backgroundColor = "#" + newColorCode;
        allColorContainer.innerHTML = "#" + newColorCode;
        
    });
    
}

generateColor();

function randomColor(){
    const char = "0123456789abcdef";
    const colorCodeLength = 6;
     let colorCode = "";

     for(let i=0; i<colorCodeLength; i++)
     {
        let randomNum = Math.floor(Math.random() * char.length);
        colorCode += char.substring(randomNum, randomNum + 1);
     }
     return colorCode;
}
