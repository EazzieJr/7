<template>
  <div>
    <a :href="href" target="blank" class="relative">
      <div
        class="space-y-3 py-8 lg:py-10 xl:py-12 lg:opacity-[0.5] work lg:hover:opacity-[1] relative"
        ref="hoverLink"
      >
        <!-- Hover Image container for large screens -->
        <div class="hover-reveal hidden lg:block">
          <div class="hover-reveal__inner">
            <img
              class="hover-reveal__image"
              :src="`/images/large-${src}.png`"
              :alt="alt"
            />-
          </div>
        </div>

        <!-- Image for small screens -->
        <div class="image flex justify-center items-center lg:hidden">
          <img class="" :src="`/images/large-${src}.png`" :alt="alt" />
        </div>

        <div class="text">
          <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500 z-50">
            <slot> </slot>
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import HoverImage from "~/animations/HoverImage";

export default {
  props: {
    src: String,
    href: String,
    alt: String,
  },

  data() {
    return {
      projects: [{}],
    };
  },

  mounted() {
    const hoverRef = this.$refs.hoverLink;
    new HoverImage(hoverRef);
  },
};
</script>

<style lang="postcss" scoped>
.text {
  mix-blend-mode: unset;
}

/* p:hover .hover-reveal{
    filter: invert(1);
} */
.hover-reveal__image {
  object-fit: cover;
  object-position: 50% 50%;
}

.hover-reveal {
  position: absolute;
  z-index: -1;
  width: 584px;
  height: 480px;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
}

.hover-reveal__inner {
  overflow: hidden;
}

.hover-reveal__inner,
.hover-reveal__image {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
