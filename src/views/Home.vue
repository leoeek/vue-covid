<template>

  <Header title="Estados Brasileiros" />

  <main>
    <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0 ">
          <div class="divide-y divide-gray-100 ">
            <list-states />
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import ListStates from '@/components/States/ListStates'
import Header from '@/components/Header/Header'

export default {
  name: 'Home',
  components: {
    ListStates,
    Header
  }
}
</script>
