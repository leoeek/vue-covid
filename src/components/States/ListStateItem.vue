<template>

  <li>
    <a
    @click="handleDetail(uf)"
    class="hover:bg-light-blue-700 cursor-pointer hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
    >

      <dl class="grid sm:grid lg:grid xl:grid grid-cols-2 grid-rows-1 items-center">
        <div class="">
          <dt class="sr-only">Estado</dt>
          <dd class="group-hover:text-black leading-6 font-medium text-black">
            {{ uf.value }}
          </dd>
        </div>
        <div class="">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-end sm:justify-end lg:justify-end xl:justify-end -space-x-2 font-semibold">
            <!-- <icon
            class="w-7 h-7 rounded-full bg-white border-2 border-white"
            name="chevron-down" size="24" :color="brandColors.blue" /> -->
            &gt;&gt;
          </dd>
        </div>
      </dl>

    </a>
  </li>

</template>

<script>
import { useRouter } from 'vue-router'
// import Icon from '@/components/Icon'
import palette from '@/../palette'

export default {
  props: ['uf'],
  setup () {
    const router = useRouter()

    async function getDetail (uf) {
      try {
        router.push(`/detail/${uf.key}`)
      } catch (error) {

      }
    }

    function handleDetail (uf) {
      getDetail(uf)
    }

    return {
      handleDetail,
      brandColors: palette.brand
    }
  }
}
</script>
