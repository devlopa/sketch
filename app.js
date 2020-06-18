let container = document.querySelector('.container');
let btn = document.getElementById('btn');
let input = 0;




for(let i=0; i<256; i++){
    let div = document.createElement('div');
    div.setAttribute('class','box');
    container.appendChild(div);
    div.style.width = '60px';
    div.style.height = '60px';
}

let divs = document.querySelectorAll('.box');

divs.forEach((div)=>{
    div.addEventListener('mouseover',function(){
        let rand = Math.floor(Math.random()* 256) + 1;
        let rand2 = Math.floor(Math.random()*256) + 1;
        let rand3 = Math.floor(Math.random()*256) + 1;
        div.style.backgroundColor = `rgb(${rand},${rand2},${rand3})`;
    })
})


btn.addEventListener('click',function(){
// container.innerHTML = '';


while(container.firstChild){
    container.removeChild(container.firstChild);
}
input = prompt('Do you want to make a Grid Enter a number');
input = parseInt(input);
if(isNaN(input) === true){
    alert("Only Numbers are Allowed");
}else{
    let containerWidth = 960;
    let boxWidth = containerWidth/ input;
    
for(let i=0; i<input * input; i++){
    let div = document.createElement('div');
    div.setAttribute('class','box');
    container.appendChild(div);
}
let modifiedDivs = document.querySelectorAll('.box');
modifiedDivs.forEach((item)=>{
    item.style.width = `${boxWidth}px` ;
    item.style.height = `${boxWidth}px` ;
    item.style.display = `inline-block`;
    item.addEventListener('mouseover',function(){
        let rand = Math.floor(Math.random()* 256) + 1;
        let rand2 = Math.floor(Math.random()*256) + 1;
        let rand3 = Math.floor(Math.random()*256) + 1;

        item.style.backgroundColor = `rgb(${rand},${rand2},${rand3})`;
        
    })
})
}
 

});


