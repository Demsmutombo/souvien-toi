<template>
  <div class="min-h-screen bg-bg-cream">
    <Navbar />
    
    <!-- Hero Section - Design Souviens-Toi -->
    <section class="relative bg-gradient-to-br from-primary-ocre to-primary-gold text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative container mx-auto px-4 py-20 lg:py-32">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Voix<br>
            <span class="text-yellow-200">Les Témoins de la Grâce</span>
          </h1>
          <div class="text-2xl md:text-3xl font-serif mb-8 text-yellow-100">
            Des vies transformées par la puissance divine
          </div>
          <p class="text-lg md:text-xl mb-12 text-gray-100 leading-relaxed max-w-4xl mx-auto">
            Chaque témoignage est une preuve vivante que Dieu transforme les cœurs brisés, 
            restaure les espoirs perdus, et écrit des histoires de grâce.
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-12 text-bg-cream" viewBox="0 0 1440 48" fill="currentColor">
          <path d="M0,32 C120,42 240,18 360,24 C480,30 600,42 720,36 C840,30 960,18 1080,24 C1200,30 1320,42 1440,32 L1440,48 L0,48 Z"/>
        </svg>
      </div>
    </section>

    <!-- Featured Testimony -->
    <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-primary-gold/8">
      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <h1 class="text-5xl lg:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-primary-gold via-primary-ocre to-primary-gold bg-clip-text text-transparent">
            Notre Pasteur
          </h1>
          <p class="text-xl lg:text-2xl text-gray-700 font-light tracking-wide">
            Richard Diyoka N'sanguluja
            <span class="block text-lg text-primary-gold font-medium mt-2">Shekinah Tabernacle</span>
          </p>
        </div>
        
        <!-- Main Content -->
        <div class="max-w-6xl mx-auto">
          <!-- Photo Section -->
          <div class="text-center mb-12">
            <div class="inline-block relative">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-transparent rounded-full scale-110"></div>
              <img src="/temoignage/Pastor.png" 
                   alt="Pasteur Richard Diyoka N'sanguluja" 
                   class="relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-8 border-white/90 transform hover:scale-105 transition-all duration-300">
            </div>
          </div>
          
          <!-- Message Section -->
          <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-12 lg:p-16">
            <div class="mb-12">
              <div class="flex items-center justify-center space-x-3 mb-6">
                <i class="fas fa-book-open text-primary-gold text-xl"></i>
                <h2 class="text-3xl lg:text-4xl font-serif font-bold text-primary-gold">
                  Message aux Frères et Sœurs
                </h2>
                <i class="fas fa-dove text-primary-ocre text-xl"></i>
              </div>
              <div class="inline-block bg-gradient-to-r from-primary-gold to-primary-ocre text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg mb-8">
                Psaume 78:1-8
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Minister Testimonies -->
    <section class="py-20 bg-bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Les Voix du Ministère
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-3xl mx-auto">
            Les serviteurs de Dieu qui témoignent de l'impact du ministère du Pasteur Diyoka<br>
            et continuent de proclamer le Message à travers le monde
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Voix',
  data() {
    return {
      currentPlayingAudio: null
    }
  },
  methods: {
    handleAudioPlay(event, audioId) {
      if (this.currentPlayingAudio && this.currentPlayingAudio !== audioId) {
        this.currentPlayingAudio.pause()
      }
      this.currentPlayingAudio = event.target
    },
    handleAudioEnded(audioId) {
      if (this.currentPlayingAudio && this.currentPlayingAudio.id === audioId) {
        this.currentPlayingAudio = null
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const audioElements = this.$el.querySelectorAll('audio')
      audioElements.forEach((audio, index) => {
        audio.id = `audio-${index}`
        audio.addEventListener('play', (event) => this.handleAudioPlay(event, audio.id))
        audio.addEventListener('ended', () => this.handleAudioEnded(audio.id))
      })
    })
  },
  beforeUnmount() {
    const audioElements = this.$el.querySelectorAll('audio')
    audioElements.forEach(audio => {
      audio.removeEventListener('play', this.handleAudioPlay)
      audio.removeEventListener('ended', this.handleAudioEnded)
    })
  }
}
</script>

<style scoped>
.voice-card {
  transition: all 0.3s ease;
}

.voice-card:hover {
  transform: translateY(-5px);
}

.audio-player {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}

.filter-btn {
  transition: all 0.3s ease;
}

.filter-btn:hover {
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
</style>
