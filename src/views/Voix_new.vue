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
    <section class="py-20 bg-bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Notre Pasteur
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-3xl mx-auto">
            Richard Diyoka N'sanguluja<br>
            Shekinah Tabernacle
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex flex-col lg:flex-row items-center gap-8">
              <div class="lg:w-1/3">
                <img 
                  src="/temoignage/Pastor.png" 
                  alt="Pasteur Richard Diyoka N'sanguluja"
                  class="w-full rounded-lg shadow-lg"
                />
              </div>
              <div class="lg:w-2/3">
                <h3 class="text-2xl font-bold text-primary-gold mb-4">
                  Message aux Frères et Sœurs
                </h3>
                <p class="text-text-secondary mb-4">
                  Chers frères et sœurs, que la grâce et la paix vous soient accordées 
                  avec abondance de la part de Dieu notre Père.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  Il y a de cela deux ans, alors que je marchais déjà dans l'œuvre du Seigneur, 
                  j'ai senti dans mon cœur un poids sacré : celui de transmettre aux générations futures 
                  les merveilles que Dieu accomplit en notre temps.
                </p>
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
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Pasteur Bitwa -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
              <div class="text-center mb-4">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary-gold/20">
                  <img src="/temoignage/bitwa.jpg" alt="Pasteur Bitwa" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Pasteur Bitwa</h3>
                <p class="text-text-secondary mb-4">Serviteur de Dieu</p>
              </div>
              
              <div class="bg-gradient-to-r from-primary-gold/10 to-primary-ocre/10 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <i class="fas fa-headphones text-primary-gold mr-2"></i>
                  <span class="text-sm font-semibold text-primary-gold">Témoignage Audio</span>
                </div>
                <audio controls class="w-full h-10">
                  <source src="/audios/Bitwa.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
                <div class="text-xs text-gray-500 mt-2">
                  Durée: 4:05 | Thème: La foi et la vision
                </div>
              </div>
            </div>
          </div>
          
          <!-- Pasteur Balanganayi -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
              <div class="text-center mb-4">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary-gold/20">
                  <img src="/temoignage/bala.jpg" alt="Pasteur Balanganayi" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Pasteur Balanganayi</h3>
                <p class="text-text-secondary mb-4">Serviteur de Dieu</p>
              </div>
              
              <div class="bg-gradient-to-r from-primary-gold/10 to-primary-ocre/10 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <i class="fas fa-headphones text-primary-gold mr-2"></i>
                  <span class="text-sm font-semibold text-primary-gold">Témoignage Audio</span>
                </div>
                <audio controls class="w-full h-10">
                  <source src="/audios/bala.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
                <div class="text-xs text-gray-500 mt-2">
                  Durée: 3:20 | Thème: La pureté de la Parole
                </div>
              </div>
            </div>
          </div>
          
          <!-- Pasteur Kayumbi -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
              <div class="text-center mb-4">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary-gold/20">
                  <img src="/temoignage/kayumbi.gif" alt="Pasteur Kayumbi" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Révérend Kayumbu Be Ya Leonard</h3>
                <p class="text-text-secondary mb-4">Guide spirituel - ZOE Tabernacle</p>
              </div>
              
              <div class="bg-gradient-to-r from-primary-gold/10 to-primary-ocre/10 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <i class="fas fa-headphones text-primary-gold mr-2"></i>
                  <span class="text-sm font-semibold text-primary-gold">Témoignage Audio</span>
                </div>
                <audio controls class="w-full h-10">
                  <source src="/audios/past_kayumbi.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
                <div class="text-xs text-gray-500 mt-2">
                  Durée: 6:20 | Thème: Sagesse spirituelle
                </div>
              </div>
            </div>
          </div>
          
          <!-- Frère Yves -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
              <div class="text-center mb-4">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary-gold/20">
                  <img src="/temoignage/yves.jpg" alt="Frère Yves" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-serif font-bold text-primary-gold mb-2">Yves Kalombo</h3>
                <p class="text-text-secondary mb-4">Guide spirituel de l'église Logos Tabernacle de Kinshasa</p>
              </div>
              
              <div class="bg-gradient-to-r from-primary-gold/10 to-primary-ocre/10 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <i class="fas fa-headphones text-primary-gold mr-2"></i>
                  <span class="text-sm font-semibold text-primary-gold">Témoignage Audio</span>
                </div>
                <audio controls class="w-full h-10">
                  <source src="/audios/yves.mp3" type="audio/mpeg">
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
                <div class="text-xs text-gray-500 mt-2">
                  Durée: 5:30 | Thème: Foi et persévérance
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-primary-gold to-primary-ocre rounded-lg p-8 max-w-3xl mx-auto">
            <h3 class="text-2xl font-serif font-bold text-white mb-4">
              Partagez Votre Témoignage
            </h3>
            <p class="text-white/90 mb-6">
              Votre histoire peut inspirer et encourager d'autres. Si le ministère du Pasteur Diyoka 
              a eu un impact sur votre vie, nous aimerions entendre votre témoignage.
            </p>
            <button class="bg-white text-primary-gold px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <i class="fas fa-microphone mr-2"></i>
              Enregistrer votre témoignage
            </button>
          </div>
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
