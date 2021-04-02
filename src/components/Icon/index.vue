<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import ChevronDown from './ChevronDown.vue'
export default {
  components: { ChevronDown },
  props: {
    name: { type: String, required: true }
  }
}
</script>
