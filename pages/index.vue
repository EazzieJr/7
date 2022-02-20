<template>
  <div>
    <section class="relative w-full h-screen bg-center bg-no-repeat bg-cover hero" style="background-image: url('/svg/Hero.svg')">
      <div class="dropdown absolute hidden md:hidden w-full h-full bg-black z-[10]">
        <div class="flex flex-col items-center justify-center dropdown-container">
          <ul class="space-y-5 text-3xl text-center text-white font-montserrat sm:text-4xl sm:space-y-7">
            <li><a href="#about" class="hover:text-[#FDEA02] transition duration-500">About</a></li>
            <li><a href="#work" class="hover:text-[#FDEA02] transition duration-500">Work</a></li>
            <li><a href="#articles" class="hover:text-[#FDEA02] transition duration-500">Articles</a></li>
            <li><a href="#contact" class="hover:text-[#FDEA02] transition duration-500">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div class="container relative h-full mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
        <nav class="z-[999]">
          <div class="nav-container py-10 flex justify-between items-center z-[999]">
            <div class="left-container">
              <div class="logo">
                <Logo />
              </div>
            </div>

            <div class="right-container">
              <div class="hidden navlist md:block">
                <ul class="flex text-sm text-white font-montserrat xl:text-base 2xl:text-xl space-x-7 lg:space-x-10 xl:space-x-14 2xl:space-x-20">
                  <li><a href="#about" class="hover:text-[#FDEA02] transition duration-500">About</a></li>
                  <li><a href="#work" class="hover:text-[#FDEA02] transition duration-500">Work</a></li>
                  <li><a href="#articles" class="hover:text-[#FDEA02] transition duration-500">Articles</a></li>
                  <li><a href="#contact" class="hover:text-[#FDEA02] transition duration-500">Contact</a></li>
                </ul>
              </div>
              
              <div class="menu-burger md:hidden space-y-1.5">
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
              </div>
            </div>
          </div>
        </nav>
        
        <div class="hero-container w-full h-[80%] flex justify-center items-center text-center">
          <div class="hero-text">
            <h1 class="nue-bold text-[32px] lg:text-[2.5rem] xl:text-5xl 2xl:text-7xl text-white px-3 leading-[57px] lg:leading-relaxed xl:leading-[180%] 2xl:leading-[200%]">
              <span class="text-[#FDEA02]">Humanizing</span> technology<br class="hidden lg:block"> through great <br class="hidden sm:block lg:hidden"> <span class="text-[#FDEA02]">design.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    <div class="noise" style="background-image: url('/images/noise.png');">
      <div class="container h-full mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
        <section class="about py-28 lg:py-32 xl:py-44 2xl:py-56">
          <div class="w-full space-y-5 md:space-y-7 about-container">
            <div class="image center">
              <img class="lg:hidden" src="/images/small-person.png" alt="An image of Emishio">

              <!-- A bigger image for screen 1024 -->
              <img class="hidden lg:block" src="/images/big-person.png" alt="An image of Emishio">
            </div>

            <div class="text sm:px-14 lg:px-32 2xl:px-48">
              <p class="font-montserrat text-center text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#333333] leading-[35px] lg:leading-[35px] xl:leading-[44px] 2xl:leading-[44px]">
                Hi, I’m Emisho, UI/UX Designer skilled in crafting clean & elegant design solutions <br class="hidden xl:block">
                for digital products & technologies. My goal is to constantly deliver unique, enjoyable & intuitive digital experiences to users through great design backed by greater <br class="hidden xl:block">storytelling.<br class="hidden xl:block"> 
                Feel free to go through some of <span class="italic font-bold underline"><a href="">My Work</a></span> below or read more <span class="italic font-bold underline"><a href="">About me.</a></span>
              </p>
            </div>
          </div>
        </section>

        <section class="featured-work lg:py-10 xl:py-16 2xl:py-20">
          <div class="space-y-10 sm:space-y-14 featured-work-container">
            <div class="top-text">
              <p class="text-3xl lg:text-4xl xl:text-5xl trans-text nue-bold">
                Featured Work
              </p>
            </div>

            <div class="bottom-projects">
              <div class="py-7 paymagic work">
                <div class="space-y-3 paymagic-container">
                  <div class="image center">
                    <img class="lg:hidden" src="/images/paymagic.png" alt="A cover image for Paymagic">
                    </div>
                  
                  <div class="text">
                    <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:opacity-[0.5] lg:hover:opacity-[1] lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500">
                      <span class="nue-bold">Paymagic:</span> Crafting a lightweight credit/payment product.
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-7 made-in-nigeria work">
                <div class="space-y-3 made-in-nigeria-container">
                  <div class="image center">
                    <img class="lg:hidden" src="/images/made-in-nigeria.png" alt="A cover image for Made In Nigeria">
                    </div>
                  
                  <div class="text">
                    <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:opacity-[0.5] lg:hover:opacity-[1] lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500">
                      <span class="nue-bold">Made in Nigeria:</span> Redesigning Nigeria’s first open-source curation website for better storytelling.
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-7 waybill work">
                <div class="space-y-3 waybill-container">
                  <div class="image center">
                    <img class="lg:hidden" src="/images/waybill.png" alt="A cover image for Waybill">
                    </div>
                  
                  <div class="text">
                    <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:opacity-[0.5] lg:hover:opacity-[1] lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500">
                      <span class="nue-bold">Waybill:</span> Building a unified platform for Nigerian logistics.
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-7 reality-os work">
                <div class="space-y-3 reality-os-container">
                  <div class="image center">
                    <img class="lg:hidden" src="/images/reality-os.png" alt="A cover image for Reality OS">
                  </div>
                  
                  <div class="text">
                    <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:opacity-[0.5] lg:hover:opacity-[1] lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500">
                      <span class="nue-bold">Reality OS:</span> Exploring Design Concepts for an Apple inspired VR/AR interface.
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-7 user-profile work">
                <div class="space-y-3 user-profile-container">
                  <div class="image center">
                    <img class="lg:hidden" src="/images/user-profile.png" alt="A cover image for User Profile Plugin">
                  </div>
                  
                  <div class="text">
                    <p class="nue-regular text-[#333333] leading-[200%] sm:text-center lg:text-left lg:opacity-[0.5] lg:hover:opacity-[1] lg:text-lg xl:text-xl 2xl:text-2xl transition duration-500">
                      <span class="nue-bold">User Profile Plugin:</span> Collaborating to Redesign & Improve an already great plugin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <footer class="relative overflow-hidden bg-black">
      <div class="container mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
        <div class="items-center justify-between py-10 2xl:justify-start xl:py-14 md:flex footer-container">
          <div class="left-container md:w-1/2">
            <div class="py-20 xl:py-28 main-footer">
              <div class="texts">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl trans-text-connect nue-bold">
                  Let's Connect
                </h2>

                <p class="text-white small-talk xl:text-xl 2xl:text-2xl font-montserrat leading-[28.8px] xl:leading-[180%] 2xl:leading-[200%] mt-5">
                  If you’d like to talk about your new and exciting project, or maybe wanna just discuss nerd stuff, shoot me a mail at <span class="text-[#FDEA02]">emishovictor@gmail.com</span>, or connect with me through any of my social accounts.
                </p>

                <ul class="flex items-center justify-between mt-8 xl:mt-16 text-lg text-white xl:text-xl 2xl:text-2xl links nue-bold xl:w-[386px] 2xl:w-[430px]">
                  <li><a href="">LinkedIn</a></li>
                  <li><a href="">Twitter</a></li>
                  <li><a href="">Dribbble</a></li>
                </ul>
              </div>            
            </div>

            <div class="credits">
              <h4 class="text-xs text-white xl:text-base 2xl:text-lg credits-texts font-montserrat">
                Site designed by <span class="text-[#FDEA02]"><a href="">me</a></span>, developed by <span class="text-[#FDEA02]"><a href="">Ganiyu Idris</a></span>
              </h4>
            </div>
          </div>

          <div class="hidden right-container md:block">
            <img class="absolute bottom-0 w-3/5 lg:w-2/5 2xl:w-auto -right-[75px] lg:-right-[25px] xl:right-60" src="/images/hand.png" alt="A fisted hand with 2 pointed fingers">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.nue-regular {
  font-family: 'Neue Metana Regular';
  font-weight: 400;
}

.nue-bold {
  font-family: 'Neue Metana Bold';
  font-weight: 700;
}

@font-face {
  font-family: 'Neue Metana Regular';
  src: url('/font/NeueMetana-Regular.otf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Neue Metana Bold';
  src: url('/font/NeueMetana-Bold.otf');
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
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  @apply lg:h-[28px] lg:w-[28px];
  @apply xl:h-[32px] xl:w-[32px];
  background-color: #FDEA02;
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
}

.trans-text-connect::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  @apply lg:h-[28px] lg:w-[28px];
  @apply xl:h-[32px] xl:w-[32px];
  /* background-color: #FDEA02; */
  top: -8px;
  @apply lg:-top-[9px];
  @apply lg:-top-[10px];
  right: 0;
  z-index: -1;
  /* transform: translate(0%, 0%); */
}


.work {
  position: relative;
}

.work::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #E4E4E4;
  top: 0;
  left: 0;
}

.work:last-child::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #E4E4E4;
  bottom: 0;
  left: 0;
}
</style>