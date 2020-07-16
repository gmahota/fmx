<template>
  <base-info-card title="Cursos">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',

    data: () => ({
      features: [
        'Nivel 1',
        'Nivel 2',
        'Nivel 3',
        'Nivel 4',
        'Avançado',
      ],
    }),
  }
</script>
