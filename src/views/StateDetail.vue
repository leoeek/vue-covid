<template>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Estados Brasileiro
      </h1>
    </div>
  </header>

  <main>
    <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">

          <div class="divide-y divide-gray-100">

            <p
            class="text-center"
            v-if="isLoading"
            >Carregando...</p>
            <List v-else>
              <list-item
              v-for="(item, index) in state.detailState"
              :key="index"
              :detailState="item"
              />
            </List>

          </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import services from '@/services'
import List from '@/components/City/List'
import ListItem from '@/components/City/ListItem'
import { formatDate } from '@/utils/date'
export default {
  components: {
    List, ListItem
  },
  setup () {
    const router = useRoute()
    const state = reactive({
      id: null,
      isLoading: false,
      detailState: [],
      pagination: {
        limit: 0,
        offset: 0,
        total: 0
      }
    })

    state.id = router.params.id
    state.dt = formatDate()

    async function getDetail ({ id, dt }) {
      try {
        state.isLoading = true

        const { data } = await services.cases.getDetail({
          ...state.pagination,
          date: dt,
          state: id
        })

        console.log('data', data.results)
        state.detailState = data.results

        state.isLoading = false
      } catch (error) {

      }
    }

    onMounted(() => {
      getDetail(state)
    })

    return {
      state
    }
  }
}
</script>
