let a;
let date;
let time;
let output;
let now;
let timezone;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const locations = document.querySelectorAll("section.time div");
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + " <br>On " + date;
}, 1000);

setInterval(() => {
    locations.forEach(location => {
        output = location.querySelector('output');
        timezone = location.getAttribute("data-timeZone");
        now = luxon.DateTime.now().setZone(timezone);
        output.innerHTML = now.toFormat("HH:mm:ss");
    })
}, 1000);