let hours = 0;
let minutes = 0;
let seconds = 0;

const showTime = ()=>{
    if (seconds === 59){
        seconds = 0;
        if(minutes == 59){
            minutes = 0;
            if (hours === 23) {
                hours = 0;
                minutes = 0;
                seconds =  0;
            } else {
              hours +=1;  
            }
        }else{
            minutes += 1;
        }
    }else{
        seconds += 1;
    }
    const hour = hours<10 ? "0"+hours : hours
    const minute = minutes<10 ? "0"+minutes : minutes
    const second = seconds<10 ? "0"+seconds : seconds
    const time = `${hour}:${minute}:${second}`

    console.log(time);
}

setInterval(showTime, 1000);