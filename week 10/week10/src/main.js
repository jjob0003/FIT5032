import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3Uoe94cES-RST8gt3GeqPHszw6j-OOzk",
  authDomain: "week7-janice.firebaseapp.com",
  projectId: "week7-janice",
  storageBucket: "week7-janice.appspot.com",
  messagingSenderId: "451611284671",
  appId: "1:451611284671:web:f3765be9563aa44413e20a"
};

initializeApp(firebaseConfig);


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
