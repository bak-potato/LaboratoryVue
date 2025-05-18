import './assets/main.less'
import 'animate.css'

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

// TinyVue icon 图标库
import * as Icons from '@ant-design/icons-vue'
for (const i in Icons) {
  app.component(i, Icons[i as keyof typeof Icons])
}
