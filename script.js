const CountInterval = 0;

const countdown = () => {
    const countDate = new Date("september 24 2026 00:00:00").getTime()
    const CurrentDate = new Date().getTime();
    const gap = countDate - CurrentDate;

    if(gap <= 0){
    clearInterval(CountInterval);
    window.location.href = ("https://www.youtube.com")
    return;
    
}

    //math

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60; 
    const day = hour * 24;

    //math #2

    const TextDay = Math.floor(gap / day);
    const TextHour = Math.floor((gap % day) / hour);
    const TextMinute = Math.floor((gap % hour) / minute);
    const TextSecond = Math.floor((gap % minute) / second);
    
    document.querySelector(".day").innerText = TextDay;
    document.querySelector(".hour").innerText = TextHour;
    document.querySelector(".minute").innerText = TextMinute;
    document.querySelector(".second").innerText = TextSecond;

    TextDay.innerHTML = day;

    
}

setInterval(countdown, 1000)
