<template>
  <Header title="Covid-19" />

  <list-states />
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
