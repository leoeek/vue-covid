<template>

<section>

    <form-search
    title="Qual cidade deseja pesquisar?"
    :states="state.states"
    v-model:search="state.searchState"
    />

    <div
    v-if="state.isLoading"
    class="loading">Pesquisando...</div>

    <div
    v-if="state.noResult"
    class="no-result">Nenhum resultado encrado :(</div>

    <div
    v-show="!state.isLoading && state.listCity.length > 0"
    class="results"
    >

      <div
        v-for="(item, index) in state.listCity"
        :key="item.city_ibge_code"
        :data-key="index"
        class="accordionItem"
        :class="{ open: index === 0, close: index > 0 }"
        @click="handleAccordion(index)"
      >
        <h2 class="accordionItemHeading">  {{ item.city }} - {{ item.state }}</h2>
        <div class="accordionItemContent">
          <p><b>População:</b> {{ item.estimated_population }}</p>

          <p><b>Confirmados:</b> {{ item.last_available_confirmed }}</p>

          <p><b>Óbitos:</b> {{ item.last_available_deaths }}</p>

          <p><i>Atualizado em {{ item.last_available_date }}</i></p>
        </div>
      </div>

    </div>

</section>

</template>

<script>
import { reactive, watchEffect } from '@vue/runtime-core'
import FormSearch from '../FormSearch'
import services from '@/services'

export default {
  components: {
    FormSearch
  },
  setup () {
    const state = reactive({
      searchState: '',
      isLoading: false,
      noResult: false,
      uf: [],
      cases: [],
      states: [],
      listCity: [],
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

    watchEffect(() => {
      if (state.searchState) {
        const city = state.searchState
        findCity(city)
      }
    })

    async function findCity (city) {
      try {
        state.isLoading = true
        state.noResult = false

        const { data } = await services.cases.findCity({
          ...state.pagination,
          city: city
        })
        state.listCity = data.results
        state.noResult = data.results.length === 0
        state.isLoading = false
      } catch (error) {
        console.log('erro', error)
      }
    }

    function handleAccordion (index) {
      const item = document.querySelectorAll(`div[data-key='${index}']`)
      if (item[0].className === 'accordionItem open') {
        item[0].className = 'accordionItem close'
      } else {
        item[0].className = 'accordionItem open'
      }
    }

    return {
      state,
      handleAccordion
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 766px) {
  .results {
    box-sizing: border-box;
    width: 90% !important;
    min-width: 360px;
    margin: auto;
  }
}

.loading, .no-result {
  text-align: center;
  color: #FFF;
  margin-top: 20px;
}
.no-result {
  font-size: 18px;
}
section {
  max-width: 750px;
  width: 100%;
}
.results {
  overflow: auto;
  padding: 20px;
  margin-top: 20px;
  background-color: #FFF;
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 15%);
  border-radius: 3px;

  .accordionItem {
    float: left;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .accordionItemHeading {
    cursor: pointer;
    margin: 0px 0px 10px 0px;
    padding: 10px;
    background: #bdc3c7;
    color: #fff;
    width: 100%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
  }
  .close .accordionItemContent {
    height: 0px;
    transition: height 1s ease-out;
    -webkit-transform: scaleY(0);
    -o-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    float: left;
    display: block;
  }
  .open .accordionItemContent {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100%;
    margin: 0px 0px 10px 0px;
    display: block;
    -webkit-transform: scaleY(1);
    -o-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: top;
    -o-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;

    -webkit-transition: -webkit-transform 0.4s ease-out;
    -o-transition: -o-transform 0.4s ease;
    -ms-transition: -ms-transform 0.4s ease;
    transition: transform 0.4s ease;
    box-sizing: border-box;
  }

  .open .accordionItemHeading {
    margin: 0px;
    -webkit-border-top-left-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    -moz-border-radius-topleft: 3px;
    -moz-border-radius-topright: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-border-bottom-right-radius: 0px;
    -webkit-border-bottom-left-radius: 0px;
    -moz-border-radius-bottomright: 0px;
    -moz-border-radius-bottomleft: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #2980b9;
    color: #FFF;
  }
}
</style>
