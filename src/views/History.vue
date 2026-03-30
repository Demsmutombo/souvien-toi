<template>
  <div class="history-page bg-plume-light min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/carousel-2.jpg" alt="History Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">Le Voyage de la Mémoire</h1>
        <p class="text-xl lg:text-2xl font-light">
          Un siècle de témoignages qui façonnent notre héritage spirituel
        </p>
      </div>
    </section>
    
    <!-- Introduction -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <SectionTitle 
          title="Une Odyssée Spirituelle" 
          subtitle="De 1909 à nos jours, le voyage prophétique qui a transformé des millions de vies"
        />
        <p class="text-lg text-plume-secondary leading-relaxed">
          Chaque époque porte en elle les empreintes d'une histoire sacrée. À travers les défis, 
          les triomphes et les moments de grâce, nous retraçons le chemin d'une mission 
          divine qui continue d'inspirer les générations.
        </p>
      </div>
    </section>
    
    <!-- Timeline Sections -->
    <TimelineSection 
      title="Les Origines Sacrées" 
      :events="originsEvents"
    />
    
    <TimelineSection 
      title="Les Épreuves Formatrices" 
      :events="strugglesEvents"
    />
    
    <TimelineSection 
      title="L'Expansion du Message" 
      :events="growthEvents"
    />
    
    <TimelineSection 
      title="Les Moments Clés" 
      :events="keyMomentsEvents"
    />
    
    <TimelineSection 
      title="Aujourd'hui" 
      :events="todayEvents"
    />
    
    <!-- Call to Action -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-plume-dark mb-8">
          Continuez le Voyage
        </h2>
        <p class="text-xl text-plume-secondary mb-12">
          L'histoire continue de s'écrire à travers chaque vie touchée, chaque témoignage partagé.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/voix" 
            class="bg-gradient-to-r from-plume-gold to-plume-gold-light text-white px-8 py-4 rounded-full text-lg font-medium hover:from-plume-gold-dark hover:to-plume-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Écouter les Témoignages
          </router-link>
          <router-link 
            to="/memoire" 
            class="border-2 border-plume-gold text-plume-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-plume-gold hover:text-white transition-all duration-300"
          >
            Explorer la Galerie
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import TimelineSection from '@/components/TimelineSection.vue'

export default {
  name: 'History',
  components: {
    SectionTitle,
    TimelineSection
  },
  data() {
    return {
      originsEvents: [
        {
          id: 1,
          year: 1909,
          title: 'Naissance du Messager',
          description: 'William Branham naît à Berksville, Kentucky, marquant le début d\'une mission prophétique pour préparer le second avènement du Seigneur.',
          link: '/histoire/1909',
          linkText: 'Découvrir ses origines'
        },
        {
          id: 2,
          year: 1933,
          title: 'Le Ministère Commence',
          description: 'L\'appel divin se manifeste puissamment, ouvrant la voie à un ministère qui touchera des millions de personnes à travers le monde.',
          link: '/histoire/1933',
          linkText: 'Les premiers signes'
        }
      ],
      strugglesEvents: [
        {
          id: 3,
          year: 1945,
          title: 'Les Défis de la Guerre',
          description: 'Pendant les années sombres de la guerre, la foi est mise à l\'épreuve mais la lumière du message continue de briller.',
          link: '/histoire/1945',
          linkText: 'La persévérance'
        },
        {
          id: 4,
          year: 1947,
          title: 'La Reconnaissance Divine',
          description: 'Les signes et les miracles confirment l\'authenticité du ministère, attirant l\'attention des chercheurs de vérité.',
          link: '/histoire/1947',
          linkText: 'Les confirmations'
        }
      ],
      growthEvents: [
        {
          id: 5,
          year: 1950,
          title: 'La Colonne de Feu',
          description: 'Photographiée à Houston, confirmant la présence divine dans le ministère. George J. Lacy, expert du FBI, confirme l\'authenticité du miracle.',
          link: '/histoire/1950',
          linkText: 'Voir la preuve'
        },
        {
          id: 6,
          year: 1955,
          title: 'L\'Expansion Mondiale',
          description: 'Le message traverse les frontières, touchant des cœurs sur tous les continents et établissant des églises dans de nombreuses nations.',
          link: '/histoire/1955',
          linkText: 'La propagation'
        }
      ],
      keyMomentsEvents: [
        {
          id: 7,
          year: 1963,
          title: 'La Révélation des Sept Âges',
          description: 'L\'ouverture des sceaux révèle les mystères de Dieu pour notre génération, apportant une compréhension profonde du plan divin.',
          link: '/histoire/1963',
          linkText: 'Les révélations'
        },
        {
          id: 8,
          year: 1965,
          title: 'Fin du Ministère Terrestre',
          description: 'Le messager prophétique termine son voyage terrestre, laissant un héritage éternel pour les générations futures.',
          link: '/histoire/1965',
          linkText: 'L\'héritage'
        }
      ],
      todayEvents: [
        {
          id: 9,
          year: 2020,
          title: 'L\'Héritage Vivant',
          description: 'Aujourd\'hui, des milliers d\'églises continuent de proclamer le même message, préservant la pureté de la Parole.',
          link: '/histoire/2020',
          linkText: 'La continuité'
        },
        {
          id: 10,
          year: 2026,
          title: 'La Mission Continue',
          description: 'La flamme de la vérité brille plus que jamais, préparant les cœurs pour l\'accomplissement final des promesses divines.',
          link: '/histoire/2026',
          linkText: 'L\'avenir'
        }
      ]
    }
  }
}
</script>

<style scoped>
.history-page {
  /* Additional page-specific styles */
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
