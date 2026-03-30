<template>
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-plume-dark mb-16">
        {{ title }}
      </h2>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-plume-gold/20"></div>
        
        <!-- Timeline Items -->
        <div class="space-y-12">
          <div 
            v-for="(item, index) in events" 
            :key="item.id"
            class="relative flex items-center"
            :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
          >
            <!-- Timeline Point -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-plume-gold rounded-full border-4 border-white shadow-lg"></div>
            
            <!-- Content Card -->
            <div class="w-5/12 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center mb-4">
                <div 
                  class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  :class="getBadgeClass(item.year)"
                >
                  {{ item.year }}
                </div>
                <h3 class="ml-4 text-xl font-semibold text-plume-dark">{{ item.title }}</h3>
              </div>
              <p class="text-plume-secondary leading-relaxed">{{ item.description }}</p>
              <button 
                v-if="item.link"
                @click="$router.push(item.link)"
                class="mt-4 text-plume-gold hover:text-plume-gold-dark font-medium transition-colors"
              >
                {{ item.linkText || 'En savoir plus' }} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  props: {
    title: {
      type: String,
      default: 'Le Voyage de la Mémoire'
    },
    events: {
      type: Array,
      required: true
    }
  },
  methods: {
    getBadgeClass(year) {
      if (year >= 1900 && year < 1950) {
        return 'bg-plume-gold'
      } else if (year >= 1950 && year < 2000) {
        return 'bg-plume-burgundy'
      } else {
        return 'bg-plume-blue-primary'
      }
    }
  }
}
</script>

<style scoped>
/* Timeline styles */
.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
  margin-right: 0;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 0;
  margin-right: auto;
}
</style>
