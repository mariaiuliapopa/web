import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


const vuetify = createVuetify({
  components,
  directives,
});

// Plugins
import { registerPlugins } from "@/plugins";
// Register plugins
const app = createApp(App);
registerPlugins(app);

createApp(App).use(vuetify).mount("#app");
