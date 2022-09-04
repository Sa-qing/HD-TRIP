import { createApp } from 'vue' 
import App from './App.vue'

// 引入样式
import 'normalize.css'
import './assets/css/index.css'

// 引入状态管理库
import pinia from './stores'

// 引入路由
import router from './router/index'

const app=createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
