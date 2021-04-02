<template>

 <article class="m-2 mb-4 p-2 divide-y divide-yellow-500 shadow">
    <div class="flex flex-col text-black">

      <div class="text-xs whitespace-pre">
        <div class="flex-none w-full mt-0.5 font-normal">
          <p class="text-lg font-semibold text-black mb-0.5">{{ detailState.city }}</p>
        </div>
      </div>

      <div class="flex flex-row ">

        <div class="w-full mt-0.5 font-normal">
          <div class="flex flex-row">
            <p class="inline font-semibold">População: </p>
            <p class="inline pl-3 ">{{ detailState.estimated_population }}</p>
          </div>
          <div class="flex flex-row">
            <p class="inline font-semibold">Confirmados: </p>
            <p class="inline pl-3 text-red-500">{{ detailState.last_available_confirmed }}</p>
          </div>
        </div>
        <div class="w-full mt-0.5 font-normal">
          <div class="flex flex-row">
            <p class="inline font-semibold">Óbitos: </p>
            <p class="inline pl-3  text-red-500">{{ detailState.last_available_deaths }}</p>
          </div>
        </div>

      </div>

      <div class="text-xs font-thin text-right mt-2">
        <div class="flex-none w-full">
          <p class="">Atualizado em {{ detailState.last_available_date }}</p>
        </div>
      </div>

    </div>
  </article>

</template>

<script>
// import { formatDate } from '@/utils/date'
export default {
  props: ['detailState']
}
</script>
