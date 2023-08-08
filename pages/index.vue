<template id="js-scroll">
  <div class="body">
    <transition name="fade" appear>
      <div v-show="!loaded" class="w-full h-screen bg-black preloader center">
        <video
          class="w-60"
          src="videos/preloader.mp4"
          autoplay
          loop
          muted
          playsinline
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div v-show="loaded">
        <section
          class="relative w-full h-screen bg-center bg-no-repeat bg-cover bg-small-hero md:bg-big-hero hero opacity-0"
        >
          <div
            class="container relative mx-auto px-7 sm:px-10 md:px-12 lg:px-10 2xl:px-40 z-[3]"
          >
            <nav class="z-[4]">
              <div
                class="nav-container py-10 flex justify-between items-center z-[999] opacity-0"
                ref="navContainer"
              >
                <div class="left-container">
                  <div class="">
                    <Logo class="logo" ref="logo" />
                  </div>
                </div>

                <div class="right-container">
                  <div class="hidden navlist md:block">
                    <ul
                      class="flex overflow-hidden text-sm text-white font-montserrat xl:text-base 2xl:text-xl space-x-7 lg:space-x-10 xl:space-x-14 2xl:space-x-20"
                    >
                      <ListItem title="about" @click="lenis.scrollTo('#about')"/>
                      <ListItem title="work" @click="lenis.scrollTo('#work')"/>
                      <ListItem title="articles" @click="lenis.scrollTo('#articles')"/>
                      <ListItem title="contact" @click="lenis.scrollTo('#contact')"/>
                    </ul>
                  </div>

                  <button
                    class="menu-btn md:hidden space-y-1.5"
                    ref="menu"
                    @click="open"
                  >
                    <div class="relative middle"></div>
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
                class="space-y-10 text-3xl text-center text-white font-montserrat sm:text-4xl sm:space-y-12 font-light"
              >
                <ListItem title="about" @click="close('#about')" />
                <ListItem title="work" @click="close('#work')" />
                <ListItem title="articles" @click="close('#articles')" />
                <ListItem title="contact" @click="close('#contact')" />
              </ul>
            </div>
          </div>

          <div
            class="container relative h-full sub-hero mx-auto px-7 sm:px-10 md:px-12 lg:px-10 2xl:px-40 z-[1]"
          >
            <div
              class="hero-container w-full h-[80%] flex justify-center items-center text-center"
            >
              <div class="hero-text">
                <div
                  class="nue-bold text-[32px] lg:text-[2.5rem] xl:text-5xl 2xl:text-[52px] 3xl:text-[64px] px-3 leading-[57px] lg:leading-relaxed xl:leading-[180%] 2xl:leading-[200%]"
                >
                  <!-- For Large screens from 768px -->
                  <div class="big hidden md:block">
                    <h1
                      class="text-[#FDEA02] overflow-y-hidden flex flex-col md:flex-row md:inline-flex space-x-3 lg:space-x-4"
                    >
                      <span class="transform translate-y-28 md:translate-y-28"
                        >Humanizing
                      </span>
                      <span class="text-white transform translate-y-28">
                        technology</span
                      >
                    </h1>
                    <h1
                      class="flex flex-col space-x-3 overflow-y-hidden lg:space-x-4 md:flex-row md:inline-flex"
                    >
                      <span class="text-white translate-y-28 md:translate-y-28">
                        through</span
                      >
                      <span class="text-white transform translate-y-28">
                        great</span
                      >
                      <span class="transform translate-y-28 text-[#FDEA02]"
                        >design.</span
                      >
                    </h1>
                  </div>

                  <!-- For smaller screens  -->
                  <div class="small md:hidden">
                    <h1
                      class="text-[#FDEA02] overflow-y-hidden flex flex-col md:flex-row md:inline-flex space-x-3 lg:space-x-4"
                    >
                      <span class="transform translate-y-28 md:translate-y-20"
                        >Humanizing
                      </span>
                      <span class="text-white transform translate-y-20">
                        technology</span
                      >
                    </h1>
                    <h1
                      class="flex flex-col space-x-3 overflow-y-hidden lg:space-x-4 md:flex-row md:inline-flex"
                    >
                      <span class="text-white translate-y-28 md:translate-y-20">
                        through</span
                      >
                    </h1>
                    <h1
                      class="space-x-3 overflow-y-hidden lg:space-x-4 inline-flex"
                    >
                      <span class="text-white transform translate-y-20">
                        great</span
                      >
                      <span class="transform translate-y-20 text-[#FDEA02]"
                        >design.</span
                      >
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mouse-scroll absolute bottom-[64px] lg:bottom-[32px] left-1/2 transform -translate-x-1/2"
            >
              <img
                class="w-16 opacity-0"
                src="Images/mouse-scroll.gif"
                alt=""
              />
            </div>
          </div>
        </section>

        <div
          class="overflow-hidden noise bg-white"
          style="background-image: url('Images/noise.png')"
        >
          <div class="container h-full mx-auto px-6 sm:px-10 md:px-12 lg:px-10 2xl:px-40">
            <section class="about py-28 lg:py-32 xl:py-44 2xl:py-56" id="about">
              <div class="w-full space-y-5 md:space-y-7 lg:space-y-0 lg:space-x-10 xl:space-x-14 2xl:space-x-24 about-container lg:flex justify-between items-center">
                <div class="image center w-full lg:max-w-[50%] xl:h-[512px] 2xl:h-[600px] overflow-hidden">
                  <img
                    class="lg:object-center lg:object-cover lg:w-full lg:h-full"
                    src="Images/big-person.png"
                    alt="An image of Emishio"
                  />
                </div>

                <div class="text w-full max-w-[500px] lg:max-w-[50%] mx-auto space-y-3">
                  <h4 class="text-[28px] lg:text-4xl xl:text-5xl trans-text nue-bold">
                    About me
                  </h4>
                  
                  <p
                    class="font-montserrat text-sm lg:text-base xl:text-xl 2xl:text-2xl text-[#333333] !leading-[180%]"
                  >
                    Hi, I'm Emisho Victor, a UI/Ux, Product & Creative Designer with four years of professional experience. I currently work as the Founding Product Designer at <a class="underline font-bold" href="https://plumter.com/" target="blank"> Plumter Inc.</a> where I've single-handedly been helping build products & infrastructure that power international payments for thousands of businesses. 
                    <br>
                    I also regularly dabble into Creative Web Design & Animation, 3D Design, etc, and share my explorations on <a class="underline font-bold" href="https://layers.to/emisho" target="blank">Layers.to</a> & on <a class="underline font-bold" href="https://www.youtube.com/@EmishoVictor/videos" target="blank">Youtube.</a>
                    <br>
                    Away from design, I'm a huge nerd, music lover, wannabe video game critic, and that one guy who knows wayyy too much random stuff.
                  </p>
                </div>
              </div>
            </section>

            <section
              class="pb-32 featured-work lg:py-10 xl:py-16 2xl:py-20"
              id="work"
            >
              <div
                class="relative space-y-10 sm:space-y-14 featured-work-container"
              >
                <div class="top-text">
                  <p
                    class="text-[28px] lg:text-4xl xl:text-5xl trans-text nue-bold"
                  >
                    Featured Work
                  </p>
                </div>

                <div class="relative bottom-projects">
                  <HoverLink
                    src="waybill"
                    href="https://www.behance.net/gallery/142497875/Waybill-Logistics-App-Dashboard-Design"
                    alt="A cover image for Waybill"
                    class="waybill"
                  >
                    <span class="nue-bold">Waybill:</span> Building a secure &
                    unified platform for Nigerian logistics.
                  </HoverLink>

                  <HoverLink
                      src="pagechap"
                      href="https://www.behance.net/gallery/144175339/Pagechap-A-One-Link-Creation-Platform"
                      alt="A cover image for Pagechap"
                      class=""
                    >
                      <span class="nue-bold">Pagechap:</span> A one-link portfolio platform designed & built for creatives
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
                      <span class="text-[#bbbbbb]">(Coming Soon...)</span>
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
                      inclusivity.<span class="text-[#bbbbbb]"
                        >(Coming Soon...)</span
                      >
                    </HoverLink>
                  </div>

                  <div class="flex justify-center w-full lg:hidden">
                    <button
                      class="expand text-sm font-montserrat text-[#333333] py-4 px-8 border-black border mt-4"
                      @click="expand"
                    >
                      {{ stats }} Projects
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section
              class="pb-32 overflow-x-hidden articles lg:py-32 xl:py-60 2xl:py-60"
              id="articles"
            >
              <div class="articles-container">
                <div
                  class="flex items-center justify-between top-text-and-navigator"
                >
                  <p
                    class="text-[28px] lg:text-4xl xl:text-5xl trans-text-article nue-bold"
                  >
                    Articles
                  </p>

                  <div class="flex mb-2 space-x-5 navigators lg:hidden">
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

                <div class="mt-10 bottom lg:mt-16">
                  <div class="bottom-container" ref="move">
                    <client-only>
                      <swiper
                        class="flex pb-20 space-x-4 lg:space-x-8"
                        ref="mySwiperRef"
                        :options="swiperOptions"
                      >
                        <swiper-slide
                          v-for="article in articles"
                          :key="article.id"
                          class="article"
                        >
                          <a
                            :href="article.link"
                            target="blank"
                            class="space-y-4"
                          >
                            <div class="top">
                              <img
                                class="w-full"
                                :src="article.src"
                                :alt="article.alt"
                              />
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

                    <div
                      class="mt-5 space-x-4 swiper-pagination lg:hidden"
                      slot="pagination"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer class="overflow-hidden bg-black" id="contact">
          <div class="container mx-auto px-7 sm:px-10 md:px-12 lg:px-10 2xl:px-40">
            <div
              class="relative items-center justify-between py-10 2xl:justify-start xl:py-14 md:flex footer-container"
            >
              <div class="left-container md:w-1/2">
                <div class="py-20 xl:py-28 main-footer">
                  <div class="texts">
                    <h2
                      class="text-[28px] lg:text-4xl xl:text-5xl trans-text-connect nue-bold"
                    >
                      Let's Connect
                    </h2>

                    <p
                      class="text-white small-talk xl:text-xl font-montserrat leading-[28.8px] xl:leading-[180%] 2xl:leading-[200%] mt-5"
                    >
                      For work inquires, send me an email @ <br class="lg:hidden" />
                      <span class="text-[#FDEA02]"
                        ><a href="mailto: emishovictor@gmail.com"
                          >emishovictor@gmail.com</a
                        ></span
                      >, or connect with me on any of my other social accounts to see more of my regular design explorations.
                    </p>

                    <div
                      class="ul mt-8 xl:mt-16 text-base text-white xl:text-xl 2xl:text-2xl links nue-bold xl:w-[410px] 2xl:w-[500px]"
                    >
                      <div class="toplinks space-x-8">
                        <a
                          href="https://www.linkedin.com/in/emisho-victor-126601175/"
                          class="hover:text-[#FDEA02] transition duration-500"
                          >LinkedIn</a
                        >
                      
                        <a
                          href="https://twitter.com/Emishonowayi"
                          class="hover:text-[#FDEA02] transition duration-500"
                          >Twitter</a
                        >
                      
                        <a
                            href="https://www.youtube.com/@EmishoVictor/videos"
                            class="hover:text-[#FDEA02] transition duration-500"
                            >Youtube</a
                          >
                      </div>
                      
                      <div class="bottom space-x-8">
                        <a
                          href="https://www.instagram.com/designbyemisho/"
                          class="hover:text-[#FDEA02] transition duration-500"
                          >Instagram</a
                        >
                      
                        <a
                          href="https://layers.to/emisho"
                          class="hover:text-[#FDEA02] transition duration-500"
                          >Layers.to</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="credits">
                  <h4
                    class="text-xs text-white xl:text-base 2xl:text-lg credits-texts font-montserrat"
                  >
                    Site designed by
                    <span class="text-[#FDEA02]"><a href="">me</a></span
                    >, developed by
                    <span class="text-[#FDEA02]"
                      ><a href="https://www.linkedin.com/in/ganiyu-idris/"
                        >Ganiyu Idris</a
                      ></span
                    >
                  </h4>
                </div>
              </div>

              <div class="hidden right-container md:block">
                <img
                  class="absolute bottom-0 right-0 w-[250px] lg:w-[250px] xl:w-[300px] 2xl:w-[340px] xl:mr-20 2xl:mr-32"
                  src="Images/hand.png"
                  alt="A fisted hand with 2 pointed fingers"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor } from "~/animations/Cursor";
import Lenis from '@studio-freight/lenis'

import aosMixin from "~/mixins/aos";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "IndexPage",
  opened: "false",
  mixins: [aosMixin],

  data() {
    return {
      expanded: false,
      stats: "Show All",
      lmS: null,
      loaded: false,

      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },

      articles: [
        {
          link: "https://bootcamp.uxdesign.cc/its-about-time-we-kill-these-ux-practices-a7f9904ed42e",
          src: "https://res.cloudinary.com/eazzie/image/upload/q_10/v1645811005/emishio/No_No_Hand_duut2i.gif",
          alt: "A gif of topic image",
          topic: "It’s about time we kill these Ux practices",
        },

        {
          link: "https://uxplanet.org/whats-so-bad-about-behance-s-ux-91622bbaca8d",
          src: "https://res.cloudinary.com/eazzie/image/upload/c_scale,q_10,w_378/v1645811007/emishio/Behance_epptkf.gif",
          alt: "A gif of topic image",
          topic: "What so bad about the UX of Behance?",
        },

        {
          link: "",
          src: "https://res.cloudinary.com/eazzie/image/upload/q_10/v1645811004/emishio/Typewriter_p6gf9s.gif",
          alt: "A gif of topic image",
          topic: "The Death of User-friendly You-X",
          span: " (Coming soon)",
        },
      ],

      lenis: null,
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

    close(des) {
      this.$refs.menu.classList.remove("open");
      this.$refs.dropdown.classList.remove("open");
      this.opened = !this.opened;

      this.lenis.scrollTo(des);
    },

    moveLeft() {
      this.$refs.mySwiperRef.$swiper.slidePrev();
    },

    moveRight() {
      this.$refs.mySwiperRef.$swiper.slideNext();
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

    expand() {
      if (!this.expanded) {
        this.expanded = !this.expanded;
        this.stats = "Collapse";
      } else {
        this.expanded = !this.expanded;
        this.stats = "Show All";
      }
    },

    toggleLoader() {
      setTimeout(() => {
        this.animateHero();
        this.loaded = true;
      }, 4100);
    },

    animateHero() {
      gsap.to(".hero", {
        duration: 1,
        opacity: 1,
        delay: 0.5,
      });
      gsap.to(".nav-container", {
        duration: 1,
        opacity: 1,
        delay: 1.3,
      });

      gsap.to(".mouse-scroll img", {
        duration: 1,
        opacity: 1,
        delay: 2.3,
      });

      gsap.to(".hero-text div h1 span", {
        duration: 1,
        y: 0,
        // stagger: 0.125,
        delay: 1.3,
      });
    },
  },

  mounted() {
    this.toggleLoader();

    this.lenis = new Lenis({
      // infinite: true
    })

    this.lenis.on('scroll', (e) => {
      // console.log(e)
    })

    const raf = (time) => {
      this.lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // this.lmS = new this.locomotiveScroll({
    //   el: document.querySelector("#js-scroll"),
    //   smooth: true
    // });
    // console.log("lmS", this.lmS);

    // new JellyEffect({
    //   // set function to get current scrollTop position
    //   scrollPos: () => this.locomotiveScroll.offset.y
    // });
  },
};
</script>

<style lang="postcss">
body {
  background-color: black;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.swiper-conatiner {
  padding-bottom: 4rem;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 47px;
  height: 4px;
  background-color: #333333;
  border-radius: 0px;
}

.sub-hero {
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

.trans-text, .About-header {
  position: relative;
  color: transparent;
  display: unset;
  -webkit-text-stroke: 1px #333333;
  z-index: 2;
}

.trans-text::before{
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
  /* mix-blend-mode: exclusion; */
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
  /* z-index: ; */
}

.work:last-child::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  bottom: 0;
  left: 0;
  @apply hidden lg:block;
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

.ul {
  @apply space-y-4
}

.ul > div {
  @apply flex items-center justify-start;
}

.ul > div > a {
  @apply block;
}
</style>
