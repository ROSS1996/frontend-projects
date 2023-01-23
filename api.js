const markerIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [30, 38],

});

let map = L.map('map').setView([51.505, -0.09], 13);
var marker = L.marker([51.5, -0.09], { icon: markerIcon }).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


const ipDOM = document.getElementById('ipAddress')
const regionDOM = document.getElementById('location')
const timezoneDOM = document.getElementById('timezone')
const ispDOM = document.getElementById('isp')

const info = document.getElementById('info')

info.addEventListener('submit', function (event) {
    event.preventDefault()
    const input = new FormData(event.target);
    const ip = input.get("search");
    changeFields(ip)
})


function changeFields(ip) {
    const info = getInfo(ip)
    info.then(data => {
        if (data.error) {
            alert(data.reason)
        }
        ipDOM.innerText = data.ip
        regionDOM.innerText = data.region
        timezoneDOM.innerText = data.timezone
        ispDOM.innerText = data.org
        map.setView([data.latitude, data.longitude], 13);
        L.marker([data.latitude, data.longitude], { icon: markerIcon }).addTo(map);
        console.log(data)
    }
    )
}

async function getInfo(ip) {
    let url = `https://ipapi.co/${ip}/json/`

    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error ocurred trying to fetch that IP info: ${response.status}`
        throw new Error(message);
    }
    const info = await response.json();
    return info
}

getInfo().catch(error => {
    error.message;
})

