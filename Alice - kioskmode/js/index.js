$(document).ready(function() {

//Århus vejr
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
        <h2>Vejret nu: ${data.name}</h2>
        <h3>Temperatur ${data.main.temp}</h3>
        <h3>Føles som ${data.main.feels_like}</h3>
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
