const buton = document.getElementById("btn")
const kart = document.querySelector(".kart")
buton.addEventListener("click",function(){
	let r=Math.floor(Math.random()*100)
	let g=Math.floor(Math.random()*80)
	let b=Math.floor(Math.random()*100)+30
     kart.style.borderColor=`rgb(${r+100},${g+50},${b+10},0.7)`
     kart.style.dropShadow=`(rgb(${r+100} ${g+50} ${b+10} red))`

})