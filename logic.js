setInterval(()=>{
    date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    hrotate=30*h+m/2;
    mrotate=6*m;
    srotate=6*s;

    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000);