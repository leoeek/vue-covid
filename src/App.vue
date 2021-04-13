<template>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()

    function handleHome () {
      router.push({ name: 'Home' })
    }

    return {
      router,
      handleHome
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background-color: #6785C0;
}
select, input, button {
  border: none;
  background-color: #FFF;
  cursor: pointer;
}
input:focus, button:focus, select:focus{
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
