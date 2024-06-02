const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    // console.log(btn);
    // const randomNumber = getRandomColor();

    document.body.style.backgroundColor = colors[getRandomColor()];
    color.textContent = colors[getRandomColor()];
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}






