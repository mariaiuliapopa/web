<script setup>
import proiect from "./components/proiect.vue"
import about from "./components/despreproiect.vue"

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
      <v-app-bar title="Vreme">
        <v-btn href="#/proiect">Vremea</v-btn>
        <v-btn href="#/about">About</v-btn>
      </v-app-bar>
      <v-main>
        <component :is="currentView" />
      </v-main>
<v-footer>
  <v-btn href="#/Admin">Admin</v-btn>
</v-footer>

    </v-app>
  </main>
</template>

<style scoped>

</style>