import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import Slider from '../src/components/Slider/Slider.vue'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.component("Slider",Slider)

app.mount('#app')
