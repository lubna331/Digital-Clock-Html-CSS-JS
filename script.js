
setInterval(() => { 
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hhCircle = document.querySelector(".circle:nth-child(1) svg circle:nth-child(2)");
    let mmCircle = document.querySelector(".circle:nth-child(2) svg circle:nth-child(2)");
    let ssCircle = document.querySelector(".circle:nth-child(3) svg circle:nth-child(2)");
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    if (h > 12) {
        h = h - 12;
    }

    // Add zero before single-digit numbers
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    // stroke-dashoffset for smooth animation
    hhCircle.style.strokeDashoffset = 440 - (440 * h) / 12; // 12-hour format
    mmCircle.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 minutes
    ssCircle.style.strokeDashoffset = 440 - (440 * s) / 60; // 60 seconds

    // // Move pointer along the circle
    // let angleH = (360 * h) / 12 - 90;  // Convert hours to degrees (offset -90°)
    // let angleM = (360 * m) / 60 - 90;
    // let angleS = (360 * s) / 60 - 90;
    // Convert time to angles (adjust -90° to start at the top)
    let angleH = (360 * (h % 12) / 12) - 90;
    let angleM = (360 * m / 60) - 90;
    let angleS = (360 * s / 60) - 90;

}, 1000);
