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
    data.append('user', 'person');
    data.append('pwd', 'password');
    data.append('organization', 'place');
    data.append('requiredkey', 'keyana');

    var xhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:5000/accident?'
    url = url + 'longitude=' + document.getElementById("longitude").value + '&'
    url = url + 'latitude=' + document.getElementById("latitude").value + '&'
    url = url + 'day_of_week=' + document.getElementById("dayofweek").value + '&'
    url = url + 'weather_conditions=' + document.getElementById("selectbar").value + '&'
    url = url + 'month=' + document.getElementById("month").value + '&'
    url = url + 'day=' + document.getElementById("dayofmonth").value + '&'
    url = url + 'hour=' + document.getElementById("hour").value



    xhr.open('GET', url, true);
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
        let a = JSON.parse(this.responseText);
        let seve = a['severity']
        if(seve> 0.8){
            myFunction('#FF0000')

        }
        else{
            myFunction('#00FF00')

        }
        alert("Accident Possibility is "+ seve*100 +"%")
    };
    xhr.send(data);
}

function filltime(){
    var currentTime = new Date();
    document.getElementById("hour").value = currentTime.getHours()
    document.getElementById("month").value = currentTime.getMonth()+1
    document.getElementById("dayofmonth").value = currentTime.getDate()
    document.getElementById("dayofweek").value = currentTime.getDay()+1
}
