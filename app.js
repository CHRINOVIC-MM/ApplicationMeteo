const temp = document.getElementById('temp'),
    date = document.getElementById('date-time');

let currentCity = '';
let currentUnit = '';
let hourlyOrWeek = 'week';

//Update date time

function getDateTime(){
    let now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes();

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    hour = hour % 12;
    if (hour  < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }

    let dayString = days[now.getDay()];

    return `${dayString}, ${hour}:${minute}`
}

date.innerHTML  = getDateTime();

//Update time every second

setInterval(()=>{
    date.innerHTML  = getDateTime();
}, 1000);

function getPublicIp(){
    fetch('https://geolocation-db.com/json/',
    {
        method: 'GET',
    })

    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        currentCity = data.currentCity;
    })
}

getPublicIp();

//get weather data

function getWeatherData(city, unit, hourlyOrWeek){
    //visualcrossing.com
    const apiKey = '';
    fetch('',{
        method: 'GET'
    })
}