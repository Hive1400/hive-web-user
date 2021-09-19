import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "tailwindcss/tailwind.css"
import "./index.css"
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App)
    .use(VueAxios, axios)
    .use(store).use(router).mount('#app')