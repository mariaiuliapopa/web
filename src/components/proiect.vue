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
        this.temperatura=result.temp_c;
      });
     }
    } 
};
</script>

<template>
  <v-app>
  <v-app-bar title="Vremea"></v-app-bar>
  <h2>My Deck</h2>
  <v-main>
  <v-btn @click="vremeaapi"> Autentificare </v-btn>
  <v-text-field bg-color="white" color="white" label="Input" placeholder="vreme" variant="solo" id="vreme">    </v-text-field>
  <p> {{this.oras}} </p>
  <p> {{this.temperatura}} </p>
</v-main>
</v-app>
</template>

<style scoped>
img {
  float: left;
  margin-right: -160px;
}
</style>