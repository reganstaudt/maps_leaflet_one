
//second map 

let soccerMap = L.map('map2').setView([52.980616, -2.990659], 5.70)

L.tileLayer('https://api.mapbox.com/styles/v1/reganstaudt/clp2xjlze00yu01nsffdwbq8l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVnYW5zdGF1ZHQiLCJhIjoiY2xwMnhmcTN1MHMzZTJqbXI2dnh5MnR1aSJ9.oZkWjbwhv-lFanAqFYtJWw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(soccerMap);

for (let i =0; i < places.length; i++) {
    L.marker([places[i].latitude, places[i].longitude])
    .bindPopup( '<h3>'+ places[i].team + '</h3>'+'<p>'+ places[i].stadiumName + '</p>')
    .addTo(soccerMap); 
}
