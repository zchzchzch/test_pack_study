<template>
  <ul>
    <li>
       hello hhh
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface TestProps {
  msg: string
}

export default defineComponent({
  name: 'App'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
