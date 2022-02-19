<template>
  <div>
    <section class="hero relative w-full h-screen bg-center bg-cover bg-no-repeat" style="background-image: url('/svg/Hero.svg')">
      <div class="dropdown abolute w-full h-full flex justify-center items-center bg-black">
        <div class="dropdown-container flex flex-col justify-center items-center">
          <ul class="font-montserrat text-3xl text-white text-center space-y-4">
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div class="container mx-auto px-7">
        <nav>
          <div class="nav-container py-10 flex justify-between items-center z-50">
            <div class="left-container">
              <div class="logo">
                <Logo />
              </div>
            </div>

            <div class="right-container">
              <div class="menu-burger space-y-1.5">
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
                <div class="w-7 min-h-[1.5px] rounded bg-white"></div>
              </div>
            </div>
          </div>
        </nav>
        
        <div class="hero-container">

        </div>
      </div>
    </section>
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
</style>