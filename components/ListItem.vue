<template>
  <li class="">
    <button @click="click"
      class="hover:text-[#FDEA02] transition duration-500 capitalize"
      >{{ title }}
    </button>
  </li>
</template>

<script>
export default {
  props: ['title'],

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>