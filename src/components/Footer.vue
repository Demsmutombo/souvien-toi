<template>
  <footer class="bg-primary-bordeaux text-white">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Logo centré au-dessus -->
        <div class="text-center mb-8">
          <img src="/souv.png" alt="Souviens-Toi Logo" class="w-16 h-16 mx-auto rounded-full shadow-lg border-3 border-white/30">
        </div>
        
        <!-- Tout sur une seule ligne -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center items-start">
          
          <!-- Brand -->
          <div class="text-center">
            <h4 class="text-lg md:text-xl font-serif font-bold mb-2 text-yellow-200 leading-tight">
              Souviens-Toi
            </h4>
            <p class="text-xs md:text-sm text-gray-200 mb-3 leading-relaxed">
              La mémoire qui élève l'âme
            </p>
            
            <!-- Copyright -->
            <div class="text-xs text-gray-300 leading-relaxed mt-4">
              <p>© 2026 Souviens-Toi</p>
              <p>Tous droits réservés</p>
              <p>Plateforme de Mémoire Spirituelle</p>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="text-center">
            <h5 class="font-semibold mb-2 md:mb-3 text-yellow-200 text-sm md:text-base">Navigation</h5>
            <ul class="space-y-1 text-xs md:text-sm">
              <li>
                <router-link to="/histoire" class="hover:text-yellow-200 transition-colors">
                  Histoire
                </router-link>
              </li>
              <li>
                <router-link to="/voix" class="hover:text-yellow-200 transition-colors">
                  Voix
                </router-link>
              </li>
              <li>
                <router-link to="/message" class="hover:text-yellow-200 transition-colors">
                  Message
                </router-link>
              </li>
              <li>
                <router-link to="/memoire" class="hover:text-yellow-200 transition-colors">
                  Mémoire
                </router-link>
              </li>
            </ul>
          </div>
          
          <!-- Thèmes spirituels -->
          <div class="text-center">
            <h5 class="font-semibold mb-2 md:mb-3 text-yellow-200 text-sm md:text-base">Thèmes spirituels</h5>
            <ul class="space-y-1 text-xs md:text-sm">
              <li>
                <router-link to="/histoire" class="hover:text-yellow-200 transition-colors">
                  Voyage temporel
                </router-link>
              </li>
              <li>
                <router-link to="/voix" class="hover:text-yellow-200 transition-colors">
                  Témoignages vivants
                </router-link>
              </li>
              <li>
                <router-link to="/message" class="hover:text-yellow-200 transition-colors">
                  Enseignements sacrés
                </router-link>
              </li>
              <li>
                <router-link to="/memoire" class="hover:text-yellow-200 transition-colors">
                  Archives spirituelles
                </router-link>
              </li>
            </ul>
          </div>
          
          <!-- Espace vide pour équilibre -->
          <div>
            <!-- Colonne vide pour équilibrer le design -->
          </div>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed for this static component
</script>
