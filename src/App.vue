<script setup>
import proiect from "./components/proiect.vue"
import about from "./components/despreproiect.vue"
import paginapornire from "./components/paginadepornire.vue"
import { useTheme } from "vuetify";
</script>

<script>
const routes = {

  "/proiect": proiect,
  "/about": about
};

export default {
  setup() {
    const theme = useTheme();

  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {},
};
</script>
<template>

  <main>
    <v-app>
      <v-app-bar title="WEATHER" id="titlu_bara_start">
        <v-btn href="#/paginadepornire" id="bara_start">The weather in the current location</v-btn> 
        <v-btn href="#/proiect" id="bara_start">Search the weather in various cities</v-btn>
        <v-btn href="#/about" id="bara_start">About the page</v-btn>
      </v-app-bar>
      <v-main>

        <component :is="currentView" />
        <paginapornire v-if="(this.currentPath!=='#/proiect')&&(this.currentPath!=='#/about')"/>
      </v-main>
<v-footer>
 
</v-footer>

    </v-app>
  </main>
</template>

<style scoped>
#titlu
{
  color:blue;
  
  
}
</style>