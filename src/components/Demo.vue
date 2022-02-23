<template>
  <div>count={{ count }}</div>
  <button @click="increment">增加</button>
  <el-button>test</el-button>
</template>

<script setup lang="ts">
import { reactive, computed, ref, toRefs, watch } from 'vue';
type DState = {
  count: number;
  double: number;
};
const state: DState = reactive({
  count: 0,
  double: computed(() => {
    return state.count * 2;
  }),
});
const { count } = { ...toRefs(state) };
function increment() {
  state.count++;
}
const num = ref(0);

watch(num, (newVal, oldVal) => {
  console.log(oldVal, newVal);
});

// setInterval(() => {
//   num.value++;
// }, 200);
</script>
