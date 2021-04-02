<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://www.un.org/sites/un2.un.org/files/covid-19.svg" alt="Convid 19">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                @click="handleHome"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                title="Ir para home"
                >Home</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
          @click="handleHome"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          title="Ir para home"
          >Home</a>
        </div>
      </div>
    </nav>

  </div>
  <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
