<template>
  <div>
    <svg
      class="cursor black"
      width="32"
      ref="cursor"
      height="32"
      viewBox="0 0 20 20"
    >
      <circle class="cursor__inner" cx="10" cy="10" r="5" />
    </svg>

    <section
      class="relative w-full h-screen bg-center bg-no-repeat bg-cover hero"
      style="background-image: url('/svg/Hero.svg')"
    >
      <div
        class="container relative mx-auto px-7 sm:px-10 md:px-12 lg:px-16 z-[3]"
      >
        <nav class="z-[4]">
          <div
            class="nav-container py-10 flex justify-between items-center z-[999]"
          >
            <div class="left-container">
              <div class="logo">
                <Logo />
              </div>
            </div>

            <div class="right-container">
              <div class="hidden navlist md:block">
                <ul
                  class="flex text-sm text-white font-montserrat xl:text-base 2xl:text-xl space-x-7 lg:space-x-10 xl:space-x-14 2xl:space-x-20"
                >
                  <li>
                    <a
                      href="#about"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      href="#work"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >Work</a
                    >
                  </li>
                  <li>
                    <a
                      href="#articles"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >Articles</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>

              <button
                class="menu-btn md:hidden space-y-1.5"
                ref="menu"
                @click="open"
              >
                <div class="middle relative"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        class="dropdown absolute md:hidden w-full h-[0] bg-black z-[2] flex justify-center items-center top-0 left-0 right-0 overflow-y-hidden"
        ref="dropdown"
      >
        <div
          class="flex flex-col items-center justify-center dropdown-container"
        >
          <ul
            class="space-y-10 text-3xl text-center text-white font-light font-montserrat sm:text-4xl sm:space-y-12"
          >
            <li>
              <a
                href="#about"
                class="hover:text-[#FDEA02] transition duration-500"
                @click="close"
                >About</a
              >
            </li>
            <li>
              <a
                href="#work"
                class="hover:text-[#FDEA02] transition duration-500"
                @click="close"
                >Work</a
              >
            </li>
            <li>
              <a
                href="#articles"
                class="hover:text-[#FDEA02] transition duration-500"
                @click="close"
                >Articles</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-[#FDEA02] transition duration-500"
                @click="close"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="container relative h-full sub-hero mx-auto px-7 sm:px-10 md:px-12 lg:px-16 z-[1]"
      >
        <div
          class="hero-container w-full h-[80%] flex justify-center items-center text-center"
        >
          <div class="hero-text">
            <h1
              class="nue-bold text-[32px] lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl text-white px-3 leading-[57px] lg:leading-relaxed xl:leading-[180%] 2xl:leading-[200%]"
            >
              <span class="text-[#FDEA02]">Humanizing</span> technology<br
                class="hidden lg:block"
              />
              through great <br class="hidden sm:block lg:hidden" />
              <span class="text-[#FDEA02]">design.</span>
            </h1>
          </div>
        </div>

        <div class="mouse-scroll absolute bottom-[40px] left-1/2 transform -translate-x-1/2">
          <img class="w-10" src="/images/mouse-scroll.gif" alt="">
        </div>
      </div>
    </section>

    <div
      class="noise overflow-hidden"
      style="background-image: url('/images/noise.png')"
    >
      <div class="container h-full mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
        <section class="about py-28 lg:py-32 xl:py-44 2xl:py-56" id="about">
          <div class="w-full space-y-5 md:space-y-7 about-container">
            <div class="image center">
              <img
                class="lg:hidden"
                src="/images/small-person.png"
                alt="An image of Emishio"
              />

              <!-- A bigger image for screen 1024 -->
              <img
                class="hidden lg:block"
                src="/images/big-person.png"
                alt="An image of Emishio"
              />
            </div>

            <div class="text sm:px-14 lg:px-32 2xl:px-48">
              <p
                class="font-montserrat text-center text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#333333] leading-[35px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[44px]"
              >
                Hi, I'm Emisho Ui/Ux Designer skilled in delivering unique
                digital experiences through <br class="hidden xl:block" />
                design that is fueled by user empathy & driven by creative
                storytelling. <br class="hidden xl:block" />
                I'm also your typical nerd, wannabe image game critic, and that
                one guy who knows way <br class="hidden xl:block" />
                too much stuff no one really cares about. Here's some of my
                design work.
              </p>
            </div>
          </div>
        </section>

        <section
          class="featured-work pb-32 lg:py-10 xl:py-16 2xl:py-20"
          id="work"
        >
          <div
            class="space-y-10 sm:space-y-14 featured-work-container relative"
          >
            <div class="top-text">
              <p class="text-3xl lg:text-4xl xl:text-5xl trans-text nue-bold">
                Featured Work
              </p>
            </div>

            <div class="bottom-projects relative">
              <HoverLink
                src="made-in-nigeria"
                href="https://www.behance.net/gallery/138142449/Website-Redesign-for-Open-Source-Project"
                alt="A cover image for Made In Nigeria"
                class=""
              >
                <span class="nue-bold">Made in Nigeria:</span> Redesigning
                Nigeria’s first open-source curation website for better
                storytelling.
              </HoverLink>

              <HoverLink
                src="waybill"
                href="https://www.behance.net/gallery/138142449/Website-Redesign-for-Open-Source-Project"
                alt="A cover image for Waybill"
                class="waybill"
              >
                <span class="nue-bold">Waybill:</span> Building a secure &
                unified platform for Nigerian logistics.
              </HoverLink>

              <HoverLink
                src="paymagic"
                href="https://www.behance.net/gallery/138620915/Paymagic-UIUX-Design-for-Payment-App"
                alt="A cover image for Paymagic"
                class="paymagic"
              >
                <span class="nue-bold">Paymagic:</span> Crafting a
                lightweight credit/payment product.
              </HoverLink>

              <div v-if="expanded" class="extendend-projects lg:hidden">
                <HoverLink
                  src="reality-os"
                  href="https://twitter.com/Emishonowayi/status/1381674985459159040?s=20&t=7GoK3yXh-fzjZyJbwP-fow"
                  alt="A cover image for Reality OS"
                  class="reality-os"
                >
                  <span class="nue-bold">Reality OS:</span> Exploring Design
                  Concepts for an Apple inspired VR/AR interface.
                </HoverLink>

              <HoverLink
                src="user-profile"
                href=""
                alt="A cover image for User Profile Plugin"
                class="user-profile"
              >
                <span class="nue-bold">User Profile Plugin:</span>
                  Redesigning a globally used design plugin for greater
                  inclusivity.
              </HoverLink>
              </div>

              <div class="hidden lg:block">
                <HoverLink
                  src="reality-os"
                  href="https://twitter.com/Emishonowayi/status/1381674985459159040?s=20&t=7GoK3yXh-fzjZyJbwP-fow"
                  alt="A cover image for Reality OS"
                  class="reality-os"
                >
                  <span class="nue-bold">Reality OS:</span> Exploring Design
                  Concepts for an Apple inspired VR/AR interface.
                </HoverLink>

                <HoverLink
                  src="user-profile"
                  href=""
                  alt="A cover image for User Profile Plugin"
                  class="user-profile"
                >
                  <span class="nue-bold">User Profile Plugin:</span>
                    Redesigning a globally used design plugin for greater
                    inclusivity.
                </HoverLink>
              </div>

              <button class="expand font-montserrat text-[#333333] py-4 px-8 border">
                Show All Projects
              </button>
            </div>
          </div>
        </section>

        <section
          class="articles pb-32 lg:py-32 xl:py-60 2xl:py-60 overflow-x-hidden"
          id="articles"
        >
          <div class="articles-container">
            <div class="top-text-and-navigator flex justify-between items-center">
              <p
                class="text-3xl lg:text-4xl xl:text-5xl trans-text-article nue-bold"
              >
                Articles
              </p>

              <div class="navigators flex space-x-5 mb-2 lg:hidden">
                <button class="left p-3.5" @click="moveLeft" ref="prev">
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 13L2 7L8 1"
                      stroke="#333333"
                      stroke-width="1.5"
                    />
                  </svg>
                </button>

                <button class="right p-3.5" @click="moveRight" ref="next">
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#333333"
                      stroke-width="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="bottom mt-10 lg:mt-16">
              <div class="bottom-container" ref="move">
                <client-only>
                    <swiper
                      class="flex space-x-4 lg:space-x-8"
                      ref="mySwiperRef"
                      :options="swiperOptions"
                    >
                      <swiper-slide
                        v-for="article in articles"
                        :key="article.id"
                        class="article"
                      >
                        <a :href="article.link" class="space-y-4">
                          <div class="top">
                            <img class="w-full" :src="article.src" :alt="article.alt" />
                          </div>

                          <div class="bottom">
                            <p
                              class="nue-bold text-[#333333] xl:text-xl xl:text-[#999999]"
                            >
                              {{ article.topic }}
                              <span class="text-[#bbbbbb]">
                                {{ article.span }}
                              </span>
                            </p>
                          </div>
                        </a>
                      </swiper-slide>
                    </swiper>
                </client-only>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <footer class="overflow-hidden bg-black" id="contact">
      <div class="container mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
        <div
          class="items-center relative justify-between py-10 2xl:justify-start xl:py-14 md:flex footer-container"
        >
          <div class="left-container md:w-1/2">
            <div class="py-20 xl:py-28 main-footer">
              <div class="texts">
                <h2
                  class="text-3xl lg:text-4xl xl:text-5xl trans-text-connect nue-bold"
                >
                  Let's Connect
                </h2>

                <p
                  class="text-white small-talk xl:text-xl 2xl:text-2xl font-montserrat leading-[28.8px] xl:leading-[180%] 2xl:leading-[200%] mt-5"
                >
                  For work, send me an email @ <br class="lg:hidden" />
                  <span class="text-[#FDEA02]"
                    ><a href="mailto: emishovictor@gmail.com"
                      >emishovictor@gmail.com</a
                    ></span
                  >, or follow any of my other social accounts if you'd love to
                  connect with me and see more of my Design explorations for
                  Web, App, VR/AR, Gaming etc.
                </p>

                <ul
                  class="flex items-center justify-between mt-8 xl:mt-16 text-base text-white xl:text-xl 2xl:text-2xl links nue-bold xl:w-[386px] 2xl:w-[430px]"
                >
                  <li>
                    <a
                      href="https://www.linkedin.com/in/emisho-victor-126601175/"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >LinkedIn</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Emishonowayi"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/designbyemisho/"
                      class="hover:text-[#FDEA02] transition duration-500"
                      >Instagram</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="credits">
              <h4
                class="text-xs text-white xl:text-base 2xl:text-lg credits-texts font-montserrat"
              >
                Site designed by
                <span class="text-[#FDEA02]"><a href="">me</a></span
                >, developed by
                <span class="text-[#FDEA02]"><a href="">Ganiyu Idris</a></span>
              </h4>
            </div>
          </div>

          <div class="hidden right-container md:block">
            <img
              class="absolute bottom-0 right-0 w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[340px] xl:mr-20 2xl:mr-32"
              src="/images/hand.png"
              alt="A fisted hand with 2 pointed fingers"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor } from "~/animations/Cursor";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
  name: "IndexPage",
  opened: "false",

  // components: {
  //   Carousel,
  //   Slide
  // },

  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev
        },
        breakpoints: {
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      },

      articles: [
        {
          link: "https://bootcamp.uxdesign.cc/its-about-time-we-kill-these-ux-practices-a7f9904ed42e",
          src: "https://res.cloudinary.com/eazzie/image/upload/v1645811005/emishio/No_No_Hand_duut2i.gif",
          alt: "A gif of topic image",
          topic: "It’s about time we kill these Ux practices",
        },

        {
          link: "https://uxplanet.org/whats-so-bad-about-behance-s-ux-91622bbaca8d",
          src: "https://res.cloudinary.com/eazzie/image/upload/v1645811007/emishio/Behance_epptkf.gif",
          alt: "A gif of topic image",
          topic: "What so bad about the UX of Behance?",
        },

        {
          link: "",
          src: "https://res.cloudinary.com/eazzie/image/upload/v1645811004/emishio/Typewriter_p6gf9s.gif",
          alt: "A gif of topic image",
          topic: "The Death of User-friendly You-X",
          span: " (Comi...)",
        },
      ],
    };
  },

  methods: {
    open() {
      if (!this.opened) {
        this.$refs.menu.classList.add("open");
        this.$refs.dropdown.classList.add("open");
        this.opened = !this.opened;
      } else {
        this.$refs.menu.classList.remove("open");
        this.$refs.dropdown.classList.remove("open");
        this.opened = !this.opened;
      }
    },

    close() {
      this.$refs.menu.classList.remove("open");
      this.$refs.dropdown.classList.remove("open");
      this.opened = !this.opened;
    },

    moveLeft() {
      this.$refs.mySwiperRef.$swiper.slidePrev()
    },

    moveRight() {
      this.$refs.mySwiperRef.$swiper.slideNext()
    },

    beginCursor() {
      const cursorRef = this.$refs.cursor;
      const cursor = new Cursor(cursorRef);
      [...document.querySelectorAll("a")].forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
      [...document.querySelectorAll("button")].forEach((link) => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
    },
  },
};
</script>

<style lang="postcss">
.sub-hero{
  height: calc(100% - 104px);
}

.black {
  border: 3px solid black;
  position: absolute;
  top: 0;
  left: 0;
}

.inactive {
  opacity: 0.5;
}

.active {
  opacity: 1;
}

.article p {
  transition: 500ms;
}

.article:hover p {
  color: black;
  text-decoration: underline;
  transition: 500ms;
}

.nue-regular {
  font-family: "Neue Metana Regular";
  font-weight: 400;
}

.nue-bold {
  font-family: "Neue Metana Bold";
  font-weight: 700;
}

@font-face {
  font-family: "Neue Metana Regular";
  src: url("/font/NeueMetana-Regular.otf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Neue Metana Bold";
  src: url("/font/NeueMetana-Bold.otf");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.trans-text {
  position: relative;
  color: transparent;
  display: unset;
  -webkit-text-stroke: 1px #333333;
}

.trans-text::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  @apply lg:h-[28px] lg:w-[28px];
  @apply xl:h-[32px] xl:w-[32px];
  background-color: #fdea02;
  top: -8px;
  @apply lg:-top-[9px];
  @apply lg:-top-[10px];
  right: 0;
  z-index: -1;
  /* transform: translate(0%, 0%); */
}

.trans-text-connect {
  position: relative;
  color: transparent;
  display: unset;
  -webkit-text-stroke: 1px white;
  z-index: 2;
  mix-blend-mode: exclusion;
}

.trans-text-connect::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  @apply lg:h-[28px] lg:w-[28px];
  @apply xl:h-[32px] xl:w-[32px];
  background-color: #fdea02;
  top: -8px;
  @apply lg:-top-[9px];
  @apply lg:-top-[10px];
  right: 0;
  z-index: -1;
  /* transform: translate(0%, 0%); */
}

.trans-text-article {
  position: relative;
  color: transparent;
  display: unset;
  -webkit-text-stroke: 1px black;
  z-index: 2;
  mix-blend-mode: exclusion;
}

.trans-text-article::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  @apply lg:h-[28px] lg:w-[28px];
  @apply xl:h-[32px] xl:w-[32px];
  background-color: #fdea02;
  top: -8px;
  @apply lg:-top-[9px];
  @apply lg:-top-[10px];
  left: 0;
  z-index: -1;
  /* transform: translate(0%, 0%); */
}

.work {
  position: relative;
}

.work::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  top: 0;
  left: 0;
}

.work:last-child::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  bottom: 0;
  left: 0;
}

/* All */
* {
  scroll-behavior: smooth;
}

/* Scrollbar */
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background-color: black;
}

body::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: white;
}

/* Dropdown */
.dropdown {
  transition: 500ms ease;
  transition-delay: 500ms;
}

.dropdown.open {
  height: 100vh;
  transition: 500ms ease;
}

.dropdown .dropdown-container {
  opacity: 0;
  transition: opacity 500ms ease;
  /* transition-delay: 500ms; */
}

.dropdown.open .dropdown-container {
  opacity: 1;
  transition: opacity 500ms ease;
  transition-delay: 500ms;
}

/* Hamburger */
.menu-btn .middle {
  width: 25px;
  height: 1.5px;
  background-color: white;
  transition: all 0.5s ease-in-out;
}

.middle::before {
  content: "";
  width: 25px;
  height: 1.5px;
  left: 0;
  background-color: white;
  position: absolute;
  transform: translateY(-8px);
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  -ms-transform: translateY(-8px);
  -o-transform: translateY(-8px);
  transition: all 0.5s ease-in-out;
}

.middle::after {
  content: "";
  width: 25px;
  height: 1.5px;
  left: 0;
  background-color: white;
  position: absolute;
  transform: translateY(8px);
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  -ms-transform: translateY(8px);
  -o-transform: translateY(8px);
  transition: all 0.5s ease-in-out;
}

.menu-btn.open .middle {
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .middle::before {
  transform: rotate(45deg) translateX(0px);
  -webkit-transform: rotate(45deg) translateX(0px);
  -moz-transform: rotate(45deg) translateX(0px);
  -ms-transform: rotate(45deg) translateX(0px);
  -o-transform: rotate(45deg) translateX(0px);
  width: 25px;
}

.menu-btn.open .middle::after {
  transform: rotate(-45deg) translateX(0px);
  -webkit-transform: rotate(-45deg) translateX(0px);
  -moz-transform: rotate(-45deg) translateX(0px);
  -ms-transform: rotate(-45deg) translateX(0px);
  -o-transform: rotate(-45deg) translateX(0px);
  width: 25px;
}
</style>
