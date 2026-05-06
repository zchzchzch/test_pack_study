<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <HelloWorld msg="Welcome to Your Vue.js App"/>
   <component :is="LText" />
</template>

<script setup lang="ts">
import { getCurrentInstance, onBeforeUpdate, onMounted, provide, inject } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import LText from './components/LText.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   },
//   setup() {
    
    const instance = getCurrentInstance()
    console.log(instance)
    onBeforeUpdate(() => {
      console.log('beforeUpdate')
    })
    onMounted(() => {
      console.log('mounted')
      instance?.appContext.config.globalProperties.$echo()
      console.log(inject('test123'))
    })
    provide('name', 'zhangsan')
    provide('age', 18)
  // }

// }
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
