let map = L.map('map1').setView([51.507297, 1.228882], 5.76);

// first map
L.tileLayer('https://api.mapbox.com/styles/v1/reganstaudt/clp2xjlze00yu01nsffdwbq8l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVnYW5zdGF1ZHQiLCJhIjoiY2xwMnhmcTN1MHMzZTJqbXI2dnh5MnR1aSJ9.oZkWjbwhv-lFanAqFYtJWw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);
let marker1 = L.marker([51.5504, -0.14057]).addTo(map);
let marker2 = L.marker([53.482540, -2.190960]).addTo(map);
let marker3 = L.marker([48.858093, 2.294694]).addTo(map);
let marker4 = L.marker([53.406420, -2.986960]).addTo(map);

marker1.bindPopup("I took this station every day over the summer.")
marker2.bindPopup("I visited Manchester City Stadium.")
marker3.bindPopup("I visited the Effiel Tower.")
marker4.bindPopup("The Beatles Muesum!")

