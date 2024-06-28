<template>
  <div class="pl-4">this is homePage</div>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>
    {{ msg }} - x:{{ x }} - y:{{ y }} -{{ isOutside }}
  </div>
  <HelloWorld></HelloWorld>
  <UserComponent></UserComponent>
  <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <Child @clickCount="handleClick"></Child>
    <ReloadPrompt/>
    我是测试PWA888
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { RouterLink } from 'vue-router'
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
const msg = ref('hello xuebao')
const handleClick = (id:number,name:string)=>{
console.log(id,'iiii',name);

}

onMounted(() => {
  registerSW({
    immediate:true,
    // onNeedRefresh(){
    //   console.log('需要更新');
    // },
    onRegisteredSW(swScriptUrl, registration) {
      console.log(registration,'registration');
      
      setInterval(()=>{
        registration&&registration.update()
      },5000)
        
    },
  })
})

</script>

<style scoped></style>

<route lang="yaml">
  meta:
    layout: default
  </route>
