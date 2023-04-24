function myClock(){
    const d=new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()
    let t=``
    if(h<=12){
        t=`AM`
    }
    if(h>12){
        t=`pm`
        h=h-12
    }
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;
    let clock=`${h}:${m}:${s} ${t}`
    document.getElementById("clock").innerText = clock;
    setInterval(myClock, 1000);
}
myClock()
// console.log(myClock())
