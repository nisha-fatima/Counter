let value = document.getElementById("value")
const decrease = document.getElementById("decrease")
decrease.addEventListener('click',function(){
value.innerHTML = value.innerHTML - 1
})

const increase = document.getElementById("increase")
increase.addEventListener('click',function(){
value.innerHTML = parseInt(value.innerHTML) + 1;
})

const reset = document.getElementById("reset")
reset.addEventListener('click',function(){
value.innerHTML = 0 ;
})

