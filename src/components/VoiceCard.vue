<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <!-- Audio Player Header -->
    <div class="bg-plume-gold p-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <button 
          @click="togglePlay"
          class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <i class="fas text-white" :class="isPlaying ? 'fa-pause' : 'fa-play'"></i>
        </button>
        <div>
          <h3 class="text-white font-semibold">{{ voice.name }}</h3>
          <p class="text-white/80 text-sm">{{ voice.role }}</p>
        </div>
      </div>
      <div class="text-white/80 text-sm">
        {{ formatDuration(voice.duration) }}
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <!-- Testimony Excerpt -->
      <p class="text-plume-secondary leading-relaxed mb-4 line-clamp-3">
        {{ voice.excerpt }}
      </p>
      
      <!-- Audio Waveform Visual -->
      <div class="h-16 bg-plume-light rounded-lg flex items-center justify-center mb-4">
        <div class="flex space-x-1">
          <div 
            v-for="i in 20" 
            :key="i"
            class="w-1 bg-plume-gold/40 rounded-full"
            :style="{ height: `${Math.random() * 100}%` }"
          ></div>
        </div>
      </div>
      
      <!-- Metadata -->
      <div class="flex items-center justify-between text-sm text-plume-secondary">
        <div class="flex items-center space-x-4">
          <span><i class="fas fa-calendar mr-1"></i> {{ voice.date }}</span>
          <span><i class="fas fa-map-marker-alt mr-1"></i> {{ voice.location }}</span>
        </div>
        <button 
          @click="showFullTestimony"
          class="text-plume-gold hover:text-plume-gold-dark font-medium transition-colors"
        >
          Écouter le témoignage complet →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoiceCard',
  props: {
    voice: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying
      // Audio playback logic would go here
    },
    formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    },
    showFullTestimony() {
      // Navigate to full testimony or open modal
      this.$router.push(`/voix/${this.voice.id}`)
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover {
  transform: translateY(-4px);
}
</style>
