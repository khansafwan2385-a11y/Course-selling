let left = document.querySelector(".left");
let right = document.querySelector(".right");
let box = document.querySelector(".box101");
let position=0;
 let movement=0;
  let total = 325*8; 
left.addEventListener("click",function(){
    if(movement>0){
         movement = movement-325;

    
    position = position + 325;
    box.style.transform = `translateX(${position}px)`;
    }


});

right.addEventListener("click", function () {
   
   
    if(movement<total){
         movement = movement+325;

    
    position = position - 325;
    box.style.transform = `translateX(${position}px)`;
    }
});