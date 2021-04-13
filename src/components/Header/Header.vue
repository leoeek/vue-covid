<template>
  <header class="bg-white shadow">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ title }}
      </h1>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: #FFF;
}
</style>
