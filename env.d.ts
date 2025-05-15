/// <reference types="vite/client" />
declare module 'dayjs'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
