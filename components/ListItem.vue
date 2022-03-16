<template>
  <div>
      <li class="">
        <a
            :href="`#${title}`"
            class="hover:text-[#FDEA02] transition duration-500 capitalize"
            >{{ title }}</a
        >
        </li>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>

</style>