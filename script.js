let input = document.getElementById("input");

let button = document.getElementById("button-addon2");

let city = document.querySelector(".aqiCity");
let AQI = document.querySelector(".aqi");
let dew = document.getElementById("dewVal");
let h = document.getElementById("hVal");
let p = document.getElementById("pVal");
let pm25 = document.getElementById("pm25Val");
let t = document.getElementById("tVal");
let w = document.getElementById("wVal");


//to get input value when enter is pressed instead of submit button
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".btn").click();
    fetch(
      `https://api.waqi.info/feed/${input.value}/?token=8c12f585214b67f1850c17df7a71793c7d03c4a2`
    )
      .then((response) => response.json())
      .then((data) => aqi(data));
  }
});

// to get input value when submit button is clicked
button.addEventListener("click", function () {
  fetch(
    `https://api.waqi.info/feed/${input.value}/?token=8c12f585214b67f1850c17df7a71793c7d03c4a2`
  )
    .then((response) => response.json())
    .then((data) => aqi(data));
});

//function to display aqi value in the feed
function aqi(data) {
  city.innerText = input.value;
  AQI.innerText = data.data.aqi;
  dew.innerText = data.data.iaqi.dew.v;
  h.innerText = data.data.iaqi.h.v;
  p.innerText = data.data.iaqi.p.v;
  pm25.innerText = data.data.iaqi.pm25.v;
  t.innerText = data.data.iaqi.t.v;
  w.innerText = data.data.iaqi.w.v;


  if (data.data.aqi <= 50) {
  document.getElementById('para').style.backgroundColor  = "#00D100";
  document.getElementById('para').style.border = "#00D100";
  document.querySelector('.aqiLevel').innerText = "Good";
}else if (data.data.aqi > 50 && data.data.aqi <= 100){
    document.getElementById('para').style.backgroundColor  = "#FFED01";
    document.getElementById('para').style.border = "#FFED01";
    document.querySelector('.aqiLevel').innerText = "Moderate";
}else if(data.data.aqi > 100 && data.data.aqi <= 150){
    document.getElementById('para').style.backgroundColor  = "red";
    document.getElementById('para').style.border = "#FFA500";
    document.querySelector('.aqiLevel').innerText = "Unhealthy for Sensitive Groups";
} else if(data.data.aqi > 150 && data.data.aqi <= 200){
    document.getElementById('para').style.backgroundColor  = "#E32227";
    document.getElementById('para').style.border = "#E32227";
    document.querySelector('.aqiLevel').innerText = "Unhealthy";
} else if(data.data.aqi > 200 && data.data.aqi <= 300){
    document.getElementById('para').style.backgroundColor  = "#6500B0";
    document.getElementById('para').style.border = "#6500B0";
    document.querySelector('.aqiLevel').innerText = "Very Unhealthy";
} else if(data.data.aqi > 300){
    document.getElementById('para').style.backgroundColor  = "#800000";
    document.getElementById('para').style.border = "#800000";
    document.querySelector('.aqiLevel').innerText = "Hazardous";
} else {
window.alert("AQI value is null or undefined");
}

  document.querySelector(".cityName").style.display = "grid";
  document.querySelector(".cityName").style.justifyContent = "center";
}

let reset = document.getElementById("button");

reset.addEventListener("click", function(){

    window.location.reload();

});
