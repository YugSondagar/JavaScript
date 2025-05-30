const clock = document.getElementById('clock')

setInterval(()=>{    //setInterval in JavaScript is a built-in function that repeatedly calls a function at a specified time interval (in milliseconds).
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)