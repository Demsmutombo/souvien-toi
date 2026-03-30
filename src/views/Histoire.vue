<template>
  <div class="min-h-screen bg-bg-cream">
    <Navbar />
    
    <!-- Hero Section - Design Souviens-Toi -->
    <section class="relative bg-gradient-to-br from-primary-ocre to-primary-gold text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative container mx-auto px-4 py-20 lg:py-32">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Histoire<br>
            <span class="text-yellow-200">Le Voyage Prophétique</span>
          </h1>
          <div class="text-2xl md:text-3xl font-serif mb-8 text-yellow-100">
            Quand Dieu écrit une histoire à travers les âges
          </div>
          <p class="text-lg md:text-xl mb-12 text-gray-100 leading-relaxed max-w-4xl mx-auto">
            Chaque date dans cette timeline n'est pas simplement un marqueur de temps, 
            mais une étape dans le plan divin de rédemption et de restauration.
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-12 text-bg-cream" viewBox="0 0 1440 48" fill="currentColor">
          <path d="M0,32 C120,42 240,18 360,24 C480,30 600,42 720,36 C840,30 960,18 1080,24 C1200,30 1320,42 1440,32 L1440,48 L0,48 Z"/>
        </svg>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-gold">
            Les Étapes Prophétiques
          </h2>
          <div class="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p class="text-lg text-text-secondary max-w-2xl mx-auto">
            Un voyage à travers le temps où chaque moment révèle la fidélité divine 
            et l'accomplissement de Ses promesses
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 bg-bg-cream">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- 1909 - Naissance -->
          <div class="flex flex-col md:flex-row items-center mb-16">
            <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1909
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">La Naissance Prophétique</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Le 6 avril 1909, dans une petite cabane au Kentucky, naît William Marrion Branham. 
                  Des signes surnaturels accompagnent sa naissance, annonçant une destinée divine 
                  qui marquerait l'histoire du christianisme.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <div class="bg-primary-gold/10 rounded-lg p-8 border-l-4 border-primary-gold">
                <p class="text-gray-700 italic">
                  "Avant que tu ne sois né, je t'ai consacré" - Jérémie 1:5
                </p>
              </div>
            </div>
          </div>

          <!-- 1933 - Appel Divin -->
          <div class="flex flex-col md:flex-row-reverse items-center mb-16">
            <div class="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1933
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">L'Appel Divin</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Une expérience mystique transforme sa vie. Une lumière surnaturelle, 
                  une voix qui parle du ciel, et un appel irrésistible au ministère. 
                  Le jeune homme devient le messager d'un temps nouveau.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pr-8">
              <div class="bg-primary-ocre/10 rounded-lg p-8 border-r-4 border-primary-ocre">
                <p class="text-gray-700 italic">
                  "Va vers ton peuple, et dis-lui tout ce que je te dirai" - Exode 7:2
                </p>
              </div>
            </div>
          </div>

          <!-- 1946-1947 - Le Début du Ministère -->
          <div class="flex flex-col md:flex-row items-center mb-16">
            <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1946
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">Les Premiers Miracles</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  La campagne de guérison commence. Des milliers de personnes affluent, 
                  attirées par les rapports de guérisons miraculeuses et de prophéties précises. 
                  Le ministère international prend son envol.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <div class="bg-primary-gold/10 rounded-lg p-8 border-l-4 border-primary-gold">
                <p class="text-gray-700 italic">
                  "Voici les miracles qui accompagneront ceux qui auront cru" - Marc 16:17
                </p>
              </div>
            </div>
          </div>

          <!-- 1963 - Les Sept Sceaux -->
          <div class="flex flex-col md:flex-row-reverse items-center mb-16">
            <div class="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1963
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">La Révélation des Sept Sceaux</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Le message prophétique atteint son apogée avec la révélation des Sept Sceaux. 
                  Une compréhension profonde du plan divin pour la fin des temps est révélée 
                  à une génération en attente.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pr-8">
              <div class="bg-primary-ocre/10 rounded-lg p-8 border-r-4 border-primary-ocre">
                <p class="text-gray-700 italic">
                  "Scelle ces choses, car le temps est proche" - Apocalypse 22:10
                </p>
              </div>
            </div>
          </div>

          <!-- 1965 - Le Départ -->
          <div class="flex flex-col md:flex-row items-center mb-16">
            <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1965
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">Le Départ du Prophète</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Le 24 décembre 1965, dans un accident tragique, le prophète termine sa course terrestre. 
                  Mais son message continue de vivre, transformant des vies à travers le monde entier.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <div class="bg-primary-gold/10 rounded-lg p-8 border-l-4 border-primary-gold">
                <p class="text-gray-700 italic">
                  "J'ai combattu le bon combat, j'ai achevé la course" - 2 Timothée 4:7
                </p>
              </div>
            </div>
          </div>

          <!-- Aujourd'hui - L'Héritage -->
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <div class="bg-white rounded-lg p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2026
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-primary-gold">L'Héritage Vivant</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Aujourd'hui, Shekinah Tabernacle continue cette histoire. Chaque culte, 
                  chaque témoignage, chaque vie transformée est un chapitre supplémentaire 
                  dans cette épopée spirituelle qui traverse les générations.
                </p>
              </div>
            </div>
            <div class="md:w-1/2 md:pr-8">
              <div class="bg-primary-ocre/10 rounded-lg p-8 border-r-4 border-primary-ocre">
                <p class="text-gray-700 italic">
                  "Que la mémoire de Jésus soit préservée d'âge en âge" - Malachie 3:16
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
</script>
                                                                                          

                
    
            
            
    
          
