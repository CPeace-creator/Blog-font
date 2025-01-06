import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import Slider from './components/Slider/Slider.vue'
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import './assets/iconfont/iconfont.js'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.component("Slider",Slider)
app.component("SvgIcon",SvgIcon)

app.mount('#app')
