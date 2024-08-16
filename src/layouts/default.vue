<template>
  <div>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  
  </div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
<route lang="yaml">
  meta:
    layout: default
  </route>
