<template>
  <base-section id="theme-features">
    <base-section-heading title="Associação Nacional de Treinadores de Futebol">
      Um resumo de quem somos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',
    data: () => ({
      features: [
        {
          title: 'ANT',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'PALMARÉS',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'FORUM ANTF JÚRICO',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'POLOS E NÚCLEOS',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'GALERIAS',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'CURSOS',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
