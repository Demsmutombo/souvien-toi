<template>
  <nav class="bg-white/95 backdrop-blur-lg shadow-lg py-4 px-6 lg:px-8 sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo spirituel -->
      <router-link to="/" class="flex items-center group">
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-gold to-primary-ocre rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white/50">
              <img src="/souv.png" alt="Souviens-Toi" class="w-6 h-6 lg:w-8 lg:h-8 object-contain">
            </div>
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-gold group-hover:to-primary-ocre transition-all duration-300">
              Souviens-Toi
            </h1>
            <p class="text-xs lg:text-sm text-gray-500 font-light">La mémoire éternelle</p>
          </div>
        </div>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <router-link 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.path"
          class="relative group"
        >
          <span class="text-gray-700 hover:text-primary-gold px-3 py-2 text-sm font-medium transition-colors duration-200">
            {{ item.name }}
          </span>
          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-gold to-primary-ocre transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
        </router-link>
        
        <!-- CTA Desktop -->
        <router-link to="/histoire" class="bg-gradient-to-r from-primary-gold to-primary-ocre text-white px-4 py-2 rounded-full text-sm font-medium hover:from-primary-bordeaux hover:to-primary-gold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Explorer
        </router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="relative text-gray-700 hover:text-primary-gold focus:outline-none p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
        >
          <div class="w-6 h-5 flex flex-col justify-center space-y-1.5">
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></div>
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            ></div>
            <div 
              class="h-0.5 w-6 bg-current transition-all duration-300"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></div>
          </div>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="flex flex-col space-y-1 px-6 py-6">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="flex items-center space-x-4 text-gray-700 hover:text-primary-gold hover:bg-gradient-to-r hover:from-primary-gold/10 hover:to-primary-ocre/10 transition-all duration-200 font-medium py-4 px-5 rounded-xl text-lg"
          >
            <div class="w-8 h-8 bg-gradient-to-br from-primary-gold to-primary-ocre rounded-lg flex items-center justify-center text-white text-sm">
              <i :class="item.icon"></i>
            </div>
            <span>{{ item.name }}</span>
          </router-link>
          
          <!-- CTA Mobile -->
          <div class="pt-4 border-t border-gray-100">
            <router-link 
              to="/histoire" 
              @click="closeMobileMenu"
              class="w-full bg-gradient-to-r from-primary-gold to-primary-ocre text-white px-6 py-3 rounded-full text-base font-medium hover:from-primary-bordeaux hover:to-primary-gold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Commencer l'exploration
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: 'Accueil', path: '/', icon: 'fas fa-home' },
        { name: 'Histoire', path: '/histoire', icon: 'fas fa-book-open' },
        { name: 'Voix', path: '/voix', icon: 'fas fa-microphone-alt' },
        { name: 'Message', path: '/message', icon: 'fas fa-scroll' },
        { name: 'Mémoire', path: '/memoire', icon: 'fas fa-images' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* Animations Plume d'Histoire */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Effets de survol */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:text-transparent {
  color: transparent;
}

.group:hover .group-hover\:bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.group:hover .group-hover\:from-blue-600 {
  --tw-gradient-from: #2563eb;
}

.group:hover .group-hover\:to-purple-600 {
  --tw-gradient-to: #9333ea;
}

/* Gradients */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-600 {
  --tw-gradient-from: #2563eb;
}

.to-purple-600 {
  --tw-gradient-to: #9333ea;
}

.from-blue-700 {
  --tw-gradient-from: #1d4ed8;
}

.to-purple-700 {
  --tw-gradient-to: #7c3aed;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
}

.from-blue-50 {
  --tw-gradient-from: #eff6ff;
}

.to-purple-50 {
  --tw-gradient-to: #faf5ff;
}

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Transformations */
.transform {
  transform: translateX(var(--tw-translate-x, 0)) translateY(var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
}

.scale-x-0 {
  --tw-scale-x: 0;
}

.scale-x-100 {
  --tw-scale-x: 1;
}

.scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
}

.rotate-45 {
  --tw-rotate: 45deg;
}

.-rotate-45 {
  --tw-rotate: -45deg;
}

.translate-y-2 {
  --tw-translate-y: 0.5rem;
}

.-translate-y-2 {
  --tw-translate-y: -0.5rem;
}

.-translate-y-100\% {
  --tw-translate-y: -100%;
}

/* Espacement */
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.25rem;
}

.space-y-1\.5 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.375rem;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 0.75rem;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  margin-left: 1rem;
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.25rem;
}

/* Tailles */
.w-6 {
  width: 1.5rem;
}

.h-5 {
  height: 1.25rem;
}

.h-0\.5 {
  height: 0.125rem;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

.w-10 {
  width: 2.5rem;
}

.h-10 {
  height: 2.5rem;
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}

.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

/* Bordures et arrondis */
.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-md {
  border-radius: 0.375rem;
}

.border-b {
  border-bottom-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-2 {
  border-width: 2px;
}

/* Ombres */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.blur-md {
  filter: blur(12px);
}

/* Positionnement */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  inset: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.w-full {
  width: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .lg\:hidden {
    display: none;
  }
  
  .lg\:flex {
    display: flex;
  }
  
  .lg\:w-12 {
    width: 3rem;
  }
  
  .lg\:h-12 {
    height: 3rem;
  }
  
  .lg\:w-8 {
    width: 2rem;
  }
  
  .lg\:h-8 {
    height: 2rem;
  }
  
  .lg\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (max-width: 640px) {
  .sm\:block {
    display: block;
  }
}
</style>
