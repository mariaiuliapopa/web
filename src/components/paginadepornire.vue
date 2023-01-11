<script>
export default {
  data() {
    return {
      oras: null, regiune: null, tara: null, latitudine: null, longitudine: null, temperatura:null, umiditate: null,
      saveCurentLocation:null,
      saveCurectLocationFromApi:null
    };
  },
  methods: {
    async vremeaapi(){
      await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${this.saveCurentLocation.latitude}&lon=${this.saveCurentLocation.longitude}&appid=4b5b12586aaaf341337e527c046c7a2c`)
    .then(resp=>resp.json())
    .then(data=>{console.log(data)
     this.saveCurectLocationFromApi=data;
    });
console.log(this.saveCurectLocationFromApi[0].name);
      var datadesprevreme={
            "location": `${this.saveCurectLocationFromApi[0].name}`
      };
      await fetch('https://api.m3o.com/v1/weather/Now', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ZDc3ZDRkODgtOGZiNS00NTQyLTg3ZWMtZjdhZWI2YmQ3MTU0',
          'content-type': 'application/json'
        },
        body: JSON.stringify(datadesprevreme)
      }).then(response => response.json())
        .then(result => {console.log(result);
        this.icon=result.icon_url;
        this.oras=result.location;
        this.tara=result.country;
        this.temperaturac=result.temp_c;
        this.umiditate=result.humidity;
        this.conditi=result.condition;
      });
     }
    },
    mounted: function() {
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords;
        this.saveCurentLocation=this.position;
        console.log(this.saveCurentLocation);
      })
    }
  }, 
};
</script>

<template>
  <div>
  <v-app>
  <v-main>
  <img :src="this.icon" alt="icon" id="imagine">
  <p></p>
  <div :is="vremeaapi()" v-if="this.saveCurentLocation"></div>
  <p  id="dimensiune" > Town: </p>
  <p id="dimensiune2" > {{this.oras}} </p>
  <p></p>
  <br/>
  <P  id="dimensiune" > Country: </p>
  <p id="dimensiune2" > {{this.tara}} </p>
  <br/>
  <p  id="dimensiune" > Temperature: </p>
  <p id="dimensiune2" > {{this.temperaturac}} </p>
  <br/>
  <p  id="dimensiune" > Humidity: </p>
  <p id="dimensiune2" > {{this.umiditate}} </p>
  <br/>
  <p id="dimensiune" > Weather conditions: </p>
  <p id="dimensiune2" > {{this.conditi}} </p>
  <br/>
  </v-main>
 </v-app>
</div>
</template>




