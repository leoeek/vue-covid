<template>

  <Header title="Estados Brasileiro" />

  <main>
    <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">

          <div class="divide-y divide-gray-100">

            <p class="text-center"
            v-if="state.isLoading"
            >Carregando, por favor aguarde...</p>

            <list-states v-else>
              <list-state-item
                v-for="uf in state.states"
                :key="uf.key"
                :uf="uf"
              />
            </list-states>

          </div>
      </div>
    </div>
  </main>
</template>

<script>
// import services from '@/services'
import ListStates from '@/components/States/ListStates'
import ListStateItem from '../components/States/ListStateItem.vue'
import { reactive } from '@vue/runtime-core'
import Header from '@/components/Header/Header'

export default {
  name: 'Home',
  components: {
    ListStates,
    ListStateItem,
    Header
  },
  setup () {
    const state = reactive({
      isLoading: false,
      cases: [],
      states: [],
      pagination: {
        limit: 20,
        offset: 0,
        total: 0
      }
    })

    state.states = [
      { key: 'AC', value: 'Acre' },
      { key: 'AL', value: 'Alagoas' },
      { key: 'AP', value: 'Amapá' },
      { key: 'AM', value: 'Amazonas' },
      { key: 'BA', value: 'Bahia' },
      { key: 'CE', value: 'Ceará' },
      { key: 'DF', value: 'Distrito Federal' },
      { key: 'ES', value: 'Espírito Santo' },
      { key: 'GO', value: 'Goiás' },
      { key: 'MA', value: 'Maranhão' },
      { key: 'MT', value: 'Mato Grosso' },
      { key: 'MS', value: 'Mato Grosso do Sul' },
      { key: 'MG', value: 'Minas Gerais' },
      { key: 'PA', value: 'Pará' },
      { key: 'PB', value: 'Paraíba' },
      { key: 'PR', value: 'Paraná' },
      { key: 'PE', value: 'Pernambuco' },
      { key: 'PI', value: 'Piauí' },
      { key: 'RJ', value: 'Rio de Janeiro' },
      { key: 'RN', value: 'Rio Grande do Norte' },
      { key: 'RS', value: 'Rio Grande do Sul' },
      { key: 'RO', value: 'Rondônia' },
      { key: 'RR', value: 'Roraima' },
      { key: 'SC', value: 'Santa Catarina' },
      { key: 'SP', value: 'São Paulo' },
      { key: 'SE', value: 'Sergipe' },
      { key: 'TO', value: 'Tocantins' }
    ]

    // onMounted(() => {
    //   // fetchCases()
    // })

    // async function fetchCases () {
    //   try {
    //     state.isLoading = true

    //     const { data } = await services.cases.getAll({
    //       ...state.pagination
    //     })

    //     state.cases = data.results
    //     state.isLoading = false
    //   } catch (erro) {
    //     console.log('ceu erro')
    //   }
    // }

    return {
      state
    }
  }
}
</script>
