<template>
  <div>
    <p>ChildComponent</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
const num = ref(0)
//定义事件，父组件去使用
const emits = defineEmits<{
  clickCount:[id:number,name:string]
}>()


// const emits = defineEmits(['clickCount'])
const handleClick = () => {
  console.log('add me...');
  emits('clickCount',++num.value,'xuebao')
}
</script>

<style scoped></style>
