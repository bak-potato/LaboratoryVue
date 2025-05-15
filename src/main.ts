import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// antdv 组件库
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// app.use(Antd).mount('#app')
app.use(Antd)
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export default {
  data() {
    return {
      locale: zhCN,
    }
  },
}
