<script>
export default {
  data() {
    return {
      oras: null, regiune: null, tara: null, latitudine: null, longitudine: null, temperatura:null, umiditate: null
      
    };
  },
  methods: {
    async vremeaapi(){
      var iaorasul= document.getElementById ("vreme").value;
      var datadesprevreme={
            "location": `${iaorasul}`
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
        
        this.oras=result.location;
        this.tara=result.country;
        this.temperaturac=result.temp_c;
        this.umiditate=result.humidity;
        this.conditi=result.condition;
        
      });
     }
    } 
};
</script>


<template>
  
  <v-app>
  <h2 id="insereaza" >Insert the city</h2>
  <br/>
  <v-main>
  <v-text-field  bg-color="white" color="white" label="City" placeholder="City" variant="solo" id="vreme">    </v-text-field>
  <v-btn id="search" @click="vremeaapi"> search </v-btn>
  <p></p>
  <br/>
  <br/>
  <p id="dimensiune" > Town: </p>
  <p id="dimensiune2" > {{this.oras}} </p>
  <P id="dimensiune" > Country: </p>
  <p id="dimensiune2" > {{this.tara}} </p>
  <p id="dimensiune" > Temperature: </p>
  <p id="dimensiune2" > {{this.temperaturac}} </p>
  <p id="dimensiune" > Humidity: </p>
  <p id="dimensiune2" > {{this.umiditate}} </p>
  <p id="dimensiune" > Weather conditions: </p>
  <p id="dimensiune2" > {{this.conditi}} </p>
</v-main>
</v-app>
</template>

