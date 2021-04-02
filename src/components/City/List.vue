<template>
  <div>

    <div class="flex flex-col">
      <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            <p
            class="text-center"
            v-if="state.isLoading">Carregando....</p>
            <template v-else>
              <form-search
              title="Filtre pela cidade"
              v-model:search="state.searchCity"
              />
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                  <list-item
                    v-for="(item, index) in filteredList"
                    :key="index"
                    :detailState="item"
                    />

                </tbody>
              </table>
            </template>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from '@vue/runtime-core'
import FormSearch from '../FormSearch'
import ListItem from '@/components/City/ListItem'
import services from '@/services'

export default {
  props: {
    id: String,
    dt: String
  },
  components: {
    FormSearch,
    ListItem
  },
  setup (props) {
    const state = reactive({
      isLoading: false,
      id: null,
      dt: null,
      detailState: [],
      searchCity: '',
      pagination: {
        limit: 0,
        offset: 0,
        total: 0
      }
    })

    const { id, dt } = toRefs(props)
    state.id = id
    state.dt = dt

    const filteredList = computed(() => {
      return state.detailState.filter(item => {
        return item.city?.toLowerCase().includes(state.searchCity.toLowerCase())
      })
    })

    async function getDetail ({ id, dt }) {
      try {
        state.isLoading = true

        const { data } = await services.cases.getDetail({
          ...state.pagination,
          date: dt,
          state: id
        })

        state.detailState = data.results
        state.isLoading = false
      } catch (error) {

      }
    }

    onMounted(() => {
      getDetail(state)
    })

    return {
      state,
      filteredList
    }
  }
}
</script>
