<template>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Estados Brasileiros
      </h1>
    </div>
  </header>

  <main>
    <div class="max-w-2xl mx-auto py-0 sm:px-6 lg:px-8">
      <div class="px-4 py-0 sm:px-0">

          <div class="divide-y divide-gray-100">

            <List
            :id="state.id"
            :dt="state.dt" />

          </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import List from '@/components/City/List'
// import { currentDate } from '@/utils/date'
export default {
  components: {
    List
  },
  setup () {
    const router = useRoute()
    const state = reactive({
      id: null,
      dt: '',
      isLoading: false,
      detailState: [],
      pagination: {
        limit: 0,
        offset: 0,
        total: 0
      }
    })

    state.id = router.params.id
    state.dt = '2021-04-01'// currentDate()

    return {
      state
    }
  }
}
</script>
