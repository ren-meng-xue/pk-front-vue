<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <div>This is an about page</div>
</template>

<script setup lang='ts'>
</script>

<style scoped></style>
<route lang="yaml">
  meta:
    layout: home
  </route>