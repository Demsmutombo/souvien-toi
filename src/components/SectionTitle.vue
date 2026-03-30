<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl lg:text-4xl font-bold text-plume-dark mb-4 relative inline-block">
      {{ title }}
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-plume-gold to-plume-gold-light rounded-full"></div>
    </h2>
    <p v-if="subtitle" class="text-xl text-plume-secondary max-w-2xl mx-auto mt-6">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
