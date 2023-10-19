const elementBody = document.querySelector('body');
// console.log(elementBody);

const firstColor = document.getElementById('firstColorId');



const secondColor = document.querySelector('#secondColorId');


firstColor.addEventListener('input', function(event){
    elementBody.style = `background : linear-gradient(to right , ${firstColor.value}, ${secondColor.value})`;
    document.querySelector('p').innerText = elementBody.style.background;

})
secondColor.addEventListener('input', function(){
    elementBody.style = `background : linear-gradient(to right , ${firstColor.value}, ${secondColor.value})`;
    document.querySelector('p').innerText = elementBody.style.background;

})