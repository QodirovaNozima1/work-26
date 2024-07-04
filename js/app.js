const title = document.querySelector(".title")
const date = document.querySelector(".date")

function sana(params) {
    let date = new Date()
}

function clock() {
let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let result = [hour,minute,second].map(i => i.toString().padStart(2,"0")).join(":")
title.textContent = result
}
clock()
setInterval(()=>{
    clock()
},1000)