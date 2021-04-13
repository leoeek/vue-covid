<template>
  <form v-on:submit.prevent="">
    <div class="col-1">
      <select>
        <option>Estados</option>
        <option
        v-for="item in states"
        :key="item.key"
        >{{ item.value }}</option>
      </select>
    </div>

    <div class="col-2">
      <input
      class=""
      type="text"
      id="inputSearch"
      :aria-label="title"
      :placeholder="title"
      :value="search"
      />
    </div>

    <div class="col-3">
      <button
        type="button"
        @click="handleSearch"
      >
        <svg width="20" height="20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    states: Array,
    search: String,
    title: String
  },
  emits: ['update:search'],
  setup (props, context) {
    function handleSearch () {
      const input = document.getElementById('inputSearch')
      context.emit('update:search', input.value)
    }

    return {
      handleSearch
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 766px) {
  form {
    flex-wrap: wrap !important;
    box-sizing: border-box;
    width: 90% !important;
    min-width: 360px;
    margin: auto;

    div {
      width: 100% !important;
      border-right: 0 !important;
      margin: 10px !important;
    }

    .col-1, .col-2 {
      border-bottom: 1px solid rgba(0,0,0,.1);
    }

    :nth-child(2) {
      padding-left: 10px !important;
    }
  }
}

form {
  background: #FFF;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 15%);
  border-radius: 3px;

  div {
    box-sizing: border-box;
    height: 50px;
    display: flex;
  }

  .col-1 {
    width: 200px;
    padding: 10px;
    border-right: 1px solid rgba(0,0,0,.1);

    select {
      width: 100%;
      border: none;
      font-size: 16px;
      color: #555;
    }
  }
  :nth-child(2) {
    flex-grow: 1;
    padding: 10px 10px 10px 30px;

    input {
      width: 90%;
      font-size: 16px;
      color: #555;
    }
  }
  .col-3 {
    width: 74px;
    background-color: red;

    button {
      height: 100%;
      width: 100%;
      color: #fff;
      background: #d39309;
      transition: all .2s ease-out,color .2s ease-out;
    }
  }
}

</style>
