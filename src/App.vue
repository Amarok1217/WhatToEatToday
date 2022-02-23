<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
import Demo from '@/components/Demo.vue';
import Main from '@/pages/main/Main.vue'
import { reactive, ref} from 'vue';

// let val = ref(1)
// setTimeout(() => {
//   val.value = 3
// }, 3000);

// export default {
//   data(){
//     return {
//       val:111
//     }
//   }
  
// }
</script>



<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <Demo /> -->
  <Main/>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  margin: 0;
}
</style>
