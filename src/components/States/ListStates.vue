<template>

<section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-0 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">

  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-2 sm:px-6 bg-gray-300">

      <form-search
      title="Filtre pelo estado"
      v-model:search="state.searchState"
      />

    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-4">
      <list-state-item
          v-for="uf in filteredList"
          :key="uf.key"
          :uf="uf"
        />
    </ul>

  </div>

</section>

</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import ListStateItem from './ListStateItem.vue'
import FormSearch from '../FormSearch'

export default {
  components: {
    ListStateItem,
    FormSearch
  },
  setup () {
    const state = reactive({
      searchState: '',
      uf: [],
      cases: [],
      states: [],
      pagination: {
        limit: 20,
        offset: 0,
        total: 0
      }
    })

    const filteredList = computed(() => {
      return state.states.filter(uf => {
        return uf.value.toLowerCase().includes(state.searchState.toLowerCase())
      })
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

    return {
      state,
      filteredList
    }
  }
}
</script>
