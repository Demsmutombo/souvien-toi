<template>
  <div class="space-y-8">
    <!-- Gallery Section -->
    <div v-for="section in sections" :key="section.title" class="space-y-4">
      <h3 class="text-2xl font-bold text-plume-dark">{{ section.title }}</h3>
      <p class="text-plume-secondary">{{ section.description }}</p>
      
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="item in section.items" 
          :key="item.id"
          class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          @click="openItem(item)"
        >
          <!-- Media Container -->
          <div class="aspect-w-16 aspect-h-12 bg-plume-light">
            <img 
              v-if="item.type === 'image'"
              :src="item.src" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div 
              v-else-if="item.type === 'video'"
              class="relative w-full h-full flex items-center justify-center bg-plume-dark"
            >
              <img 
                :src="item.thumbnail" 
                :alt="item.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <i class="fas fa-play text-plume-gold text-xl ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Overlay Info -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h4 class="font-semibold mb-1">{{ item.title }}</h4>
              <p class="text-sm text-white/80">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal for Full View -->
    <div 
      v-if="selectedItem"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div class="relative max-w-6xl max-h-full" @click.stop>
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        >
          <i class="fas fa-times"></i>
        </button>
        
        <img 
          v-if="selectedItem.type === 'image'"
          :src="selectedItem.src" 
          :alt="selectedItem.title"
          class="max-w-full max-h-full object-contain"
        />
        
        <div v-else-if="selectedItem.type === 'video'" class="aspect-w-16 aspect-h-9">
          <!-- Video player would go here -->
          <div class="bg-black rounded-lg flex items-center justify-center h-96">
            <p class="text-white">Video player for: {{ selectedItem.title }}</p>
          </div>
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white">
          <h4 class="font-semibold">{{ selectedItem.title }}</h4>
          <p class="text-sm text-white/80">{{ selectedItem.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryGrid',
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    openItem(item) {
      this.selectedItem = item
    },
    closeModal() {
      this.selectedItem = null
    }
  }
}
</script>

<style scoped>
/* Aspect ratio utilities */
.aspect-w-16 {
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);
}

.aspect-w-16 > *,
.aspect-h-12 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.aspect-h-9 {
  padding-bottom: calc(9 / 16 * 100%);
}
</style>
