<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/carousel-1.jpg" 
        alt="Souviens-Toi Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
        Souviens-Toi
      </h1>
      <p class="text-xl sm:text-2xl lg:text-3xl mb-8 font-light animate-fade-in-up animation-delay-200">
        De génération en génération
      </p>
      <p class="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
        Un voyage dans la mémoire éternelle, où chaque témoignage devient lumière 
        et chaque histoire résonne dans les cœurs d'aujourd'hui.
      </p>
      <router-link 
        to="/histoire" 
        class="inline-block bg-gradient-to-r from-plume-gold to-plume-gold-light text-white px-8 py-4 rounded-full text-lg font-medium hover:from-plume-gold-dark hover:to-plume-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-600"
      >
        Entrer dans l'histoire
      </router-link>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}
</style>
