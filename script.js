document.getElementById("rulesSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("rulesInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://dnd5eapi.co/api/" + value;
  fetch(url, {mode: 'cors'});
  /*.then(function(response) {
    return response.json();
  }).then(function(json) {
      let results = "";
      results += '<h1>' + response.count + "</h1><hr>";*/
      /*results += '<div class="icons"><p>';
      for (let i=0; i < json.weather.length; i++) {
	       results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '</p></div>';
      results += '<p><b>Temperature:  </b>';
      results += json.main.temp + " &deg;F</p>"
      results += '<p><b>Weather:  </b>  ';
      for (let i=0; i < json.weather.length; i++) {
	       results += json.weather[i].description
	    if (i !== json.weather.length - 1)
	       results += ", "
      }
      results += "</p>";
      results += '<p><b>Cloudiness:  </b>' + json.clouds.all + '%</p>';
      results += '<p><b>Humidity:  </b>' + json.main.humidity + '%</p>';
      results += '<p><b>Wind Speed:  </b>' + json.wind.speed + ' mph</p>';*/
      /*document.getElementById("rulesResults").innerHTML = results;
  });*/

  /*const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=400abd2afe9852fb28cb6eb40e055c4e";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
	       forecast += "<div id='item'><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2><h3>" + moment(json.list[i].dt_txt).format('h:mm:ss a') + "</h3><hr>";
         forecast += '<div class="icons"><p>';
         for (let j=0; j < json.list[i].weather.length; ++j) {
           forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[j].icon + '.png"/></div>'
         }
         forecast += "<p><b>Temperature:</b> " + json.list[i].main.temp + " &deg;F</p>";
         forecast += '<p><b>Weather:  </b>  ';
         for (let j=0; j < json.list[i].weather.length; j++) {
   	       forecast += json.list[i].weather[j].description
   	    if (j !== json.list[i].weather.length - 1)
   	       forecast += ", "
         }
         forecast += "</p>";
         forecast += '<p><b>Cloudiness:  </b>' + json.list[i].clouds.all + '%</p>';
         forecast += '<p><b>Humidity:  </b>' + json.list[i].main.humidity + '%</p>';
         forecast += '<p><b>Wind Speed:  </b>' + json.list[i].wind.speed + ' mph</p></div>';
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });*/
});
