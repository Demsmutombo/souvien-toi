# Design System Plume d'Histoire - Couleurs et Styles

## 🎨 Palette de Couleurs Principales

### Couleurs Primaires
- **Bleu profond** : #1e3a8a (bleu nuit, spiritualité)
- **Bleu moyen** : #3b82f6 (bleu vif, énergie)
- **Bleu clair** : #60a5fa (bleu ciel, clarté)
- **Bleu très clair** : #dbeafe (bleu pastel, douceur)

### Couleurs Secondaires
- **Gris foncé** : #1f2937 (texte principal)
- **Gris moyen** : #6b7280 (texte secondaire)
- **Gris clair** : #f3f4f6 (fond)
- **Blanc** : #ffffff (pureté)

### Couleurs d'Accent
- **Or/Doré** : #d4af37 (spiritualité, lumière)
- **Orange doux** : #f97316 (chaleur, mémoire)
- **Rose pâle** : #fce7f3 (tendresse)

## 🎯 Typographie

### Polices
- **Titres** : Jost, serif (élégant, classique)
- **Texte** : Inter, sans-serif (moderne, lisible)
- **Citations** : Georgia, serif (traditionnel)

### Hiérarchie
- **H1** : 48-64px, font-weight: 700, line-height: 1.2
- **H2** : 36-48px, font-weight: 600, line-height: 1.3
- **H3** : 24-32px, font-weight: 600, line-height: 1.4
- **Texte** : 16-18px, font-weight: 400, line-height: 1.6

## 🎭 Design Patterns

### Header Pattern
```vue
<template>
  <header class="bg-white border-b border-gray-100">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo avec effet -->
        <div class="flex items-center space-x-4">
          <div class="relative group">
            <div class="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <img src="/logo.png" class="relative w-10 h-10" alt="Logo">
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Titre</h1>
            <p class="text-sm text-gray-500">Sous-titre</p>
          </div>
        </div>
        
        <!-- Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">Lien</a>
        </div>
      </div>
    </nav>
  </header>
</template>
```

### Hero Section Pattern
```vue
<template>
  <section class="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
    <!-- Pattern de fond -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('pattern.svg')]"></div>
    </div>
    
    <!-- Contenu -->
    <div class="relative max-w-6xl mx-auto px-6 py-24">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Titre Principal
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Description élégante et spirituelle
        </p>
      </div>
    </div>
  </section>
</template>
```

### Card Pattern
```vue
<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <i class="fas fa-icon text-blue-600"></i>
      </div>
      <h3 class="ml-4 text-lg font-semibold text-gray-900">Titre</h3>
    </div>
    <p class="text-gray-600">Description</p>
  </div>
</template>
```

## 🎨 Composants Réutilisables

### Boutons
```vue
<!-- Primaire -->
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
  Action Principale
</button>

<!-- Secondaire -->
<button class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
  Action Secondaire
</button>

<!-- Texte -->
<button class="text-blue-600 hover:text-blue-700 font-medium">
  Lien texte
</button>
```

### Badges
```vue
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Badge
</span>
```

## 🎯 Animations

### Transitions Standards
```css
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-colors {
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
}

.transition-transform {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Hover Effects
```css
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

## 🎭 Layout Patterns

### Container
```vue
<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
  <!-- Contenu -->
</div>
```

### Grid System
```vue
<!-- 2 colonnes -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Contenu -->
</div>

<!-- 3 colonnes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Contenu -->
</div>

<!-- 4 colonnes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Contenu -->
</div>
```

## 🎨 Espacement

### Marges et Padding
- **Section padding** : py-16 sm:py-20 lg:py-24
- **Container padding** : px-6 sm:px-8 lg:px-12
- **Card padding** : p-6 sm:p-8
- **Text spacing** : mb-4, mb-6, mb-8

## 🎯 Responsive Design

### Breakpoints
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

### Patterns Responsive
```vue
<!-- Mobile-first -->
<div class="text-center md:text-left">
  <!-- Contenu -->
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Contenu -->
</div>

<!-- Responsive typography -->
<h1 class="text-3xl md:text-4xl lg:text-5xl">
  Titre
</h1>
```

## 🎭 Patterns Spécifiques

### Timeline
```vue
<div class="relative">
  <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
  <div class="space-y-12">
    <!-- Timeline items -->
  </div>
</div>
```

### Testimonial Card
```vue
<div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
  <blockquote class="text-gray-700 italic mb-4">
    "Citation..."
  </blockquote>
  <div class="flex items-center">
    <img src="/avatar.jpg" class="w-10 h-10 rounded-full mr-3">
    <div>
      <p class="font-semibold text-gray-900">Nom</p>
      <p class="text-sm text-gray-500">Rôle</p>
    </div>
  </div>
</div>
```

## 🎯 Utilisation

Ce design system sera appliqué à toutes les pages :
- Home.vue
- Histoire.vue
- Voix.vue
- Message.vue
- Memoire.vue
- Navbar.vue
- Footer.vue

Chaque page suivra les mêmes patterns pour assurer cohérence et élégance.
