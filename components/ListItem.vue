<template>
  <div>
      <li class="transform translate-y-5">
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