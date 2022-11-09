let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let date = document.getElementById("date");
let time = document.getElementById("time")

name1.innerText = localStorage.getItem("name1");
name2.innerText = localStorage.getItem("name2");
let d = new Date()
date.innerText = "date " + d.getDate() + " : " + d.getMonth() + " : " + d.getFullYear();
time.innerText =  d.getHours() + " hours " + " : " + d.getMinutes() + " Min " + " : " + d.getSeconds() + " Sec " + " : " + d.getMilliseconds()