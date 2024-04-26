const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color'),
 btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        // Callback function getRandomNumber() is called here
        hexColor += hex[getRandomNumber()]; 
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
// Callback function definition
function getRandomNumber(){
    return(Math.floor(Math.random() * hex.length)); 
}



// const hex = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i++) {
// //   console.log("The value of i is: " + i);
//   console.log("The value of hex[" + i + "] is: " + hex[i]);
// }
