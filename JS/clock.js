console.log("Hi Iam Nithin");
setInterval(() => {
a=new Date();
let date=a.toLocaleDateString();
let time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
// console.log(time)
// console.log(date)

document.getElementById('time').innerHTML=time + ' on '+ date;
}, 1000);