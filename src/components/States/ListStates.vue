<template>

<section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">

  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Estados
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Selecione o estado para ver os casos por cidades
      </p>

      <form class="relative">
        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>

        <input
        class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
        type="text"
        aria-label="Filter projects"
        placeholder="Filtre pelo estado"
        v-model="searchState"
        />
      </form>
    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-4">
      <slot></slot>
    </ul>

  </div>

</section>

</template>

<script>
import { reactive } from '@vue/runtime-core'
export default {
  setup () {
    const state = reactive({
      searchState: ''
    })

    // watch(state.searchState, () => {
    //   console.log('foi', state.searchState)
    // })

    return {
      state
    }
  }
}
</script>
