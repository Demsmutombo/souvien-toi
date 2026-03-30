<template>
  <div class="voices-page bg-plume-light min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/carousel-3.jpg" alt="Voices Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">Les Voix de la Mémoire</h1>
        <p class="text-xl lg:text-2xl font-light">
          Témoignages vivants d'un héritage spirituel
        </p>
      </div>
    </section>
    
    <!-- Introduction -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <SectionTitle 
          title="Les Témoins du Message" 
          subtitle="Chaque voix porte en elle une parcelle de l'histoire sacrée, un témoignage vivant de la grâce divine"
        />
        <p class="text-lg text-plume-secondary leading-relaxed mb-8">
          À travers les âges, des hommes et des femmes ont consacré leur vie à la préservation 
          et à la proclamation du Message divin. Leurs témoignages résonnent encore aujourd'hui, 
          inspirant les nouvelles générations à marcher dans la vérité.
        </p>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="selectedFilter = filter.id"
            class="px-6 py-2 rounded-full font-medium transition-all duration-300"
            :class="selectedFilter === filter.id 
              ? 'bg-plume-gold text-white' 
              : 'bg-plume-light text-plume-dark hover:bg-plume-gold/20'"
          >
            {{ filter.name }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Voices Grid -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VoiceCard 
            v-for="voice in filteredVoices" 
            :key="voice.id"
            :voice="voice"
          />
        </div>
        
        <!-- Load More -->
        <div class="text-center mt-12">
          <button 
            @click="loadMore"
            class="bg-gradient-to-r from-plume-gold to-plume-gold-light text-white px-8 py-3 rounded-full font-medium hover:from-plume-gold-dark hover:to-plume-gold transition-all duration-300 transform hover:scale-105"
          >
            Charger plus de témoignages
          </button>
        </div>
      </div>
    </section>
    
    <!-- Featured Testimony -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <SectionTitle 
          title="Témoignage en Vedette" 
          subtitle="Une histoire qui touche les cœurs et transforme les vies"
        />
        
        <div class="bg-plume-light rounded-lg p-8 lg:p-12">
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="lg:w-1/3">
              <img 
                :src="featuredTestimony.image" 
                :alt="featuredTestimony.name"
                class="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div class="lg:w-2/3">
              <h3 class="text-2xl font-bold text-plume-dark mb-4">
                {{ featuredTestimony.name }}
              </h3>
              <p class="text-plume-gold font-medium mb-4">{{ featuredTestimony.role }}</p>
              <div class="prose prose-lg text-plume-secondary leading-relaxed mb-6">
                <p>{{ featuredTestimony.fullTestimony }}</p>
              </div>
              <div class="flex items-center space-x-6 text-sm text-plume-secondary">
                <span><i class="fas fa-calendar mr-2"></i>{{ featuredTestimony.date }}</span>
                <span><i class="fas fa-map-marker-alt mr-2"></i>{{ featuredTestimony.location }}</span>
                <span><i class="fas fa-clock mr-2"></i>{{ featuredTestimony.duration }}</span>
              </div>
              <button class="mt-6 bg-plume-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-plume-gold-dark transition-colors">
                <i class="fas fa-play mr-2"></i>Écouter le témoignage complet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-20 px-4 bg-plume-gold text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-8">
          Votre Voix Compte
        </h2>
        <p class="text-xl mb-12 opacity-90">
          Chaque témoignage est une pierre précieuse dans l'édifice de la mémoire collective. 
          Partagez votre expérience et inspirez les autres.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-plume-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-plume-light transition-all duration-300">
            Partager mon témoignage
          </button>
          <router-link 
            to="/message" 
            class="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-plume-gold transition-all duration-300"
          >
            Découvrir le Message
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import VoiceCard from '@/components/VoiceCard.vue'

export default {
  name: 'Voices',
  components: {
    SectionTitle,
    VoiceCard
  },
  data() {
    return {
      selectedFilter: 'all',
      filters: [
        { id: 'all', name: 'Tous les témoignages' },
        { id: 'pioneers', name: 'Pionniers' },
        { id: 'pastors', name: 'Pasteurs' },
        { id: 'witnesses', name: 'Témoins' }
      ],
      voices: [
        {
          id: 1,
          name: 'Frère Joseph',
          role: 'Pasteur - Kinshasa',
          excerpt: 'Le jour où j\'ai entendu le Message pour la première fois, ma vie a changé à jamais. C\'était comme si une lumière divine illuminait mon âme...',
          duration: 245,
          date: '15 Mars 2025',
          location: 'Kinshasa, RDC',
          category: 'pastors',
          audioSrc: '/audio/joseph-testimony.mp3'
        },
        {
          id: 2,
          name: 'Sœur Marie',
          role: 'Témoin - Lubumbashi',
          excerpt: 'J\'ai vu des guérisons miraculeuses et des vies transformées par la puissance de la prière. Ces moments restent gravés dans ma mémoire...',
          duration: 180,
          date: '22 Avril 2025',
          location: 'Lubumbashi, RDC',
          category: 'witnesses',
          audioSrc: '/audio/marie-testimony.mp3'
        },
        {
          id: 3,
          name: 'Frère Antoine',
          role: 'Pionnier - Matadi',
          excerpt: 'Depuis plus de 50 ans, je sers le Seigneur dans cette région. Chaque jour, je vois l\'accomplissement des promesses divines...',
          duration: 320,
          date: '8 Janvier 2025',
          location: 'Matadi, RDC',
          category: 'pioneers',
          audioSrc: '/audio/antoine-testimony.mp3'
        },
        {
          id: 4,
          name: 'Sœur Esther',
          role: 'Témoin - Goma',
          excerpt: 'La fidélité de Dieu ne m\'a jamais abandonnée, même dans les moments les plus difficiles. Son amour me soutient chaque jour...',
          duration: 195,
          date: '30 Juin 2025',
          location: 'Goma, RDC',
          category: 'witnesses',
          audioSrc: '/audio/esther-testimony.mp3'
        },
        {
          id: 5,
          name: 'Frère David',
          role: 'Pasteur - Bukavu',
          excerpt: 'Le Message nous a donné une nouvelle vision de l\'Évangile. Je comprends maintenant le plan de Dieu pour notre génération...',
          duration: 280,
          date: '12 Septembre 2025',
          location: 'Bukavu, RDC',
          category: 'pastors',
          audioSrc: '/audio/david-testimony.mp3'
        },
        {
          id: 6,
          name: 'Sœur Rachel',
          role: 'Témoin - Kisangani',
          excerpt: 'Ma guérison miraculeuse reste le témoignage le plus puissant de ma vie. Les médecins n\'avaient plus d\'espoir, mais Dieu...',
          duration: 165,
          date: '5 Novembre 2025',
          location: 'Kisangani, RDC',
          category: 'witnesses',
          audioSrc: '/audio/rachel-testimony.mp3'
        }
      ],
      featuredTestimony: {
        name: 'Frère Joseph',
        role: 'Pasteur - Église du Tabernacle de Shekinah',
        image: '/temoignage/Pastor.png',
        fullTestimony: 'Le jour où j\'ai entendu le Message pour la première fois, ma vie a changé à jamais. C\'était en 1985, lors d\'une campagne d\'évangélisation dans ma ville natale. Les paroles du pasteur ont résonné profondément dans mon cœur, comme si chaque phrase était spécialement adressée à moi. Ce soir-là, je me suis consacré entièrement au service de Dieu, et depuis, chaque jour de ma vie a été une aventure spirituelle extraordinaire. J\'ai vu des choses incroyables, des vies transformées, des familles restaurées, et des communautés entièrement changées par la puissance du Message divin.',
        date: '15 Mars 2025',
        location: 'Kinshasa, RDC',
        duration: '15:45'
      }
    }
  },
  computed: {
    filteredVoices() {
      if (this.selectedFilter === 'all') {
        return this.voices
      }
      return this.voices.filter(voice => voice.category === this.selectedFilter)
    }
  },
  methods: {
    loadMore() {
      // Logic to load more voices
      console.log('Loading more voices...')
    }
  }
}
</script>

<style scoped>
.voices-page {
  /* Page-specific styles */
}

/* Additional styling for testimonies */
.prose {
  color: inherit;
}
</style>
