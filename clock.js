const currentDate = new Date().getDate()
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const currentMonth = month[new Date().getMonth()]
const currentYear = new Date().getFullYear()

document.getElementById("day").textContent = currentDate;
document.getElementById("month").textContent = currentMonth;
document.getElementById("year").textContent = currentYear;
window.addEventListener('DOMContentLoaded', ()=>{
    const toggleState = localStorage.getItem("toggle");
    if(toggleState === 'on'){
        toggleon();
    }
    if (toggleState === 'off'){
        toggleoff();
    }
})
function toggleon(){
    document.getElementById("toggleon").style.display= 'inline';
    document.getElementById("toggleoff").style.display= 'none';
    changeto12hour();
    localStorage.setItem("toggle", "on")
}
function toggleoff(){
    document.getElementById("toggleoff").style.display = 'inline';
    document.getElementById("toggleon").style.display = 'none';
    updateTime()
    localStorage.setItem("toggle", "off")
}

function updateTime(){
    const currentTime = new Date();
    const currentHour = String(currentTime.getHours()).padStart(2, '0');
    const currentMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const currentSeconds = String(currentTime.getSeconds()).padStart(2, '0');
    //document.getElementById("hours").textContent = currentHour;
    //document.getElementById("minutes").textContent = currentMinutes;
    //document.getElementById("seconds").textContent = currentSeconds;
    document.querySelector(".time").innerHTML = `
    <div class="dis-hr">
        <span class="hours">${currentHour}</span>
        <p>hour</p>
    </div>
    <div class="dis-min">
        <span class="minutes">${currentMinutes}</span>
        <p>minutes</p>
    </div>
    <div class="dis-sec">
        <span class="seconds">${currentSeconds}</span>
        <p>seconds</p>
    </div>
`
}
function changeto12hour(){
    const time = new Date();
    var hours = time.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours%12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2,'0');
    const mins = String(time.getMinutes()).padStart(2,'0');
    const secs = String(time.getSeconds()).padStart(2,'0');
    document.querySelector(".time").innerHTML = `
    <div class="dis-hr">
        <span class="hours">${hours}</span>
        <p>hour</p>
    </div>
    <div class="dis-min">
        <span class="minutes">${mins}</span>
        <p>minutes</p>
    </div>
    <div class="dis-sec">
        <span class="seconds">${secs}</span>
        <p>seconds</p>
    </div>
    <div class="ampm">
        <p>${ampm}</p>
    </div>
`
}
setInterval(function() {
    // Check which format to display
    if (document.getElementById("toggleon").style.display === 'inline') {
        changeto12hour();
    } else {
        updateTime();
    }
}, 1000);