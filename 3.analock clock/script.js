let hour=document.getElementById("hour")
let minutes=document.getElementById("minutes")
let second=document.getElementById("second")


setInterval(() => {
    let date = new Date();
    let ht = date.getHours();
    let mt = date.getMinutes();
    let st = date.getSeconds();
    let hrotation  = 30*ht + mt/2;
    let mrotation = 6*mt;
    let srotation =  6*st;
        hour.style.transform =  `rotate(${hrotation}deg`;
        minutes.style.transform =  `rotate(${mrotation}deg`;
        second.style.transform =  `rotate(${srotation}deg`;
}, 1000);