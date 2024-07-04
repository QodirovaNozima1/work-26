const title = document.querySelector(".title")

function clock() {
// var weekend =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//     var month = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December" ];

//     var now = new Date()
//     document.getElementById(`date`).innerHTML = (weekend[now.getDay()]+ " " + now.getDate()+ ` `+ month[now.month()]+ ` ` + now.getFullYear())


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