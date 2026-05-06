import { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const testPlugin = {
   install: (app: App) => {
      app.config.globalProperties.$echo = () => {
         console.log('this is a test plugin')
      }
      app.component('HelloWorld', HelloWorld)
      app.provide('test123', 'from test plugin')
   }
}

export default testPlugin