<template>
  <div>
    <div class="py-8 lg:py-10 xl:py-12 lg:opacity-[0.5] work lg:hover:opacity-[1] relative" ref="hoverLink">
      <a :href="href" class="space-y-3 relative">
        <!-- Hover Image container for large screens -->
        <div class="hover-reveal absolute hidden lg:block">
          <div class="hover-reveal__inner">
            <img
              class="hover-reveal__image"
              :src="`/images/large-${src}.png`"
              :alt="alt"
            />
          </div>
        </div>

        <!-- Image for small screens -->
        <div class="image flex justify-center items-center lg:hidden">
            <img
              class="hover-reveal__image"
              :src="src"
              :alt="alt"
            />
        </div>

        <div class="text">
          <p
            class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500 z-50"
          >
            <slot> </slot>
          </p>
        </div>
      </a>
    </div>
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
.work {
    mix-blend-mode: exclusion;
}

/* p:hover .hover-reveal{
    filter: invert(1);
} */
.hover-reveal__image {
  object-fit: cover;
  object-position: 50% 50%;

  @include media("<=tablet") {
    display: none;
  }

  &.mobile {
    @include media("<=tablet") {
      display: block;
    }
  }
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
