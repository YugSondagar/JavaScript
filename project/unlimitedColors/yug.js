//generate random color
const RandomColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let Interval

const startChanging = ()=>{
    if(!Interval){
        Interval = setInterval(changeBgColor,1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = RandomColor()
    }
    
}

const stopChanging = ()=>{
    clearInterval(Interval)
    Interval = null
}

document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)