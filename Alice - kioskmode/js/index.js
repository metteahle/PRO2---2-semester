$(document).ready(function() {

//Århus vejr kilde: https://home.openweathermap.org/api_keys
    // get the weather data via query URI
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=3f02e6b21898bd47b4c139eeb6e600a6").then(response => {
        return response.json();
    }).then(data => {

      //Tid
      const now = new Date()
      let hour = now.getHours()
      let minute = now.getMinutes()
      let second = now.getSeconds()

      if(minute < 10) {minute = '0' + minute}
      if(second < 10) {second = '0' + second}

      let time = 'Klokken er nu:' + hour + ':' + minute + ':' + second

        //Men hvordan får jeg tiden ind på siden så den vises?
        document.getElementById("whattime").innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();



        // Work with JSON data here
        console.log(data); // show what's in the json
        console.log(data.weather[0].description)


        //Vis på skærm
        result.innerHTML = `
        <h2 id="weatherNow">Vejret nu:</h2> <h2>${data.name}</h2>
        <h3 id="temperature">Temperatur</h3> <h3>${data.main.temp}</h3>
        <h3 id="feelsLike">Føles som </h3> <h3>${data.main.feels_like}</h3>
        <p> ${data.weather[0].description}</p>
        <p>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon" />
        </p>
        `
    })

      .catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });

}); // document ready end


  //Translation
  function translation(){
    document.getElementById("translate1").innerHTML = "Order and pay here"
    document.getElementById("translate2").innerHTML = "Press to order"
    document.getElementById("translate3").innerHTML = "PRESS TO ORDER"
    document.getElementById("weatherNow").innerHTML = "Weather now:"
    document.getElementById("temperature").innerHTML = "Temperature"
    document.getElementById("feelsLike").innerHTML = "Feels like"
  }

  function getDanishTranslation(){
    document.getElementById("translate1").innerHTML = "Bestil og betal her"
    document.getElementById("translate2").innerHTML = "Tryk for at bestillle"
    document.getElementById("translate3").innerHTML = "TRYK FOR AT BESTILLE"
    document.getElementById("weatherNow").innerHTML = "Vejret nu:"
    document.getElementById("temperature").innerHTML = "Temperatur"
    document.getElementById("feelsLike").innerHTML = "Føles som"
  }
