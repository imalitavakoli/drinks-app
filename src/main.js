// Import main files
import './assets/styles/index.scss'
import './assets/scripts/index.js'

// Import app files
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Create app
createApp(App).use(store).use(router).mount('#app')
