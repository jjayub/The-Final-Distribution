/*
var rectangle =new google.maps.Circle({
    map: map,
    center:new google.maps.LatLng(51.501481,-0.125064),
    radius:800,

    fillColor:"#00FF00"

});
*/


function myFunction(colo) {
    var latitude = document.getElementById("latitude").value
    var longitude = document.getElementById("longitude").value

    var rectangle =new google.maps.Circle({
        map: map,
        center:new google.maps.LatLng(latitude,longitude),
        radius:500,

        fillColor:colo//"#00FF00"

    });

}

function httpGetAsync(theUrl1, callback)
{
    theUrl ="http://127.0.0.1:5000/"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function asd(meme) {
    console.log(meme)
}


function asd1() {

    var data = new FormData();
    data.append('latitude', '51.123123');
    data.append('longitude', '-0.213231');
    data.append('day_of_week', '1');
    data.append('hour', '23');
    data.append('min', '23');
    data.append('day_of_month', '23');
    data.append('month', '11');

    var xhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:5000/crime?'
    url = url + 'latitude=' + document.getElementById("latitude").value + '&'
    url = url + 'longitude=' + document.getElementById("longitude").value + '&'
    url = url + 'day_of_week=' + document.getElementById("dayofweek").value + '&'
    url = url + 'hour=' + document.getElementById("hour").value + '&'
    url = url + 'min=' + document.getElementById("min").value + '&'
    url = url + 'day_of_month=' + document.getElementById("dayofmonth").value + '&'
    url = url + 'month=' + document.getElementById("month").value
    xhr.open('GET', url, true);
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
        let a = JSON.parse(this.responseText);
        let crim = a['crime_class_probabilities']

        if(crim[0]<0.7){
            myFunction('#FF0000')

        }
        else{
            myFunction('#00FF00')

        }
        document.getElementById("test").innerText= (crim[0]*100).toFixed(1) +'% No Crime\n '+(crim[1]*100).toFixed(1) +'% Drug Possesion\n'+(crim[2]*100).toFixed(1) +'% Vandalism\n'+(crim[3]*100).toFixed(1) +'% Firearms Possesion\n'+(crim[4]*100).toFixed(1) +'% Knife or Offensive Weapon Posession\n'+(crim[5]*100).toFixed(1) +'% Violence\n'
        //alert()
        // No Crime
        // Drug Possesion
        // Vandalism
        // Firearms Possesion
        // Knife or Offensive Weapon Posession
        // Violence
    };
    xhr.send(data);
}

function filltime(){
    var currentTime = new Date();
    document.getElementById("hour").value = currentTime.getHours()
    document.getElementById("min").value = currentTime.getMinutes()
    document.getElementById("month").value = currentTime.getMonth()+1
    document.getElementById("dayofmonth").value = currentTime.getDate()
    document.getElementById("dayofweek").value = currentTime.getDay()+1
}
