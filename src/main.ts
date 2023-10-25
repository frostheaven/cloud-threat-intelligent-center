import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
import pinia from './store'
import router from './router'
app.use(pinia)
app.use(router)
app.mount('#app')
