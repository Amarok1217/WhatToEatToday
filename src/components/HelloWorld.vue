

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="count++"
  >count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const num = ref(100)
const color = ref("#000")

onMounted: {
  // num = 200
  console.log(111)
  setTimeout(() => {
    color.value = "#fff"
  }, 3000);
}

</script>

<style scoped>
a {
  color: v-bind(color);
  /* color: #42b983; */
}
</style>
