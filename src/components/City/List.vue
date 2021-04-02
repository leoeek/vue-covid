<template>
  <div>

    <div class="flex flex-col">

      <p class="text-right p-4 font-bold cursor-pointer hover:text-blue-500" title="Voltar para escolha de estados"><a @click="handleHome">Voltar</a></p>

      <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            <p
            class="text-center"
            v-if="state.isLoading">Carregando....</p>

            <template v-else>

              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-0 py-0 sm:px-0">

                  <div class="px-2 py-2 sm:px-2 bg-gray-300">
                    <form-search
                    title="Filtre pela cidade"
                    v-model:search="state.searchCity"
                    />
                  </div>

                  <div>
                    <list-item
                      v-for="(item, index) in filteredList"
                      :key="index"
                      :detailState="item"
                      />
                  </div>

                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import FormSearch from '../FormSearch'
import ListItem from '@/components/City/ListItem'
import services from '@/services'
import { removeSpecial } from '@/utils/string'

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
    const router = useRouter()
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
        const val = removeSpecial(item.city?.toLowerCase())
        const find = removeSpecial(state.searchCity)

        return val?.includes(find.toLowerCase())
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

    function handleHome () {
      router.push({ name: 'Home' })
    }

    onMounted(() => {
      getDetail(state)
    })

    return {
      state,
      filteredList,
      handleHome
    }
  }
}
</script>
