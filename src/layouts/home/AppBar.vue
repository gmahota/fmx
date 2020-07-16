<template>
  <div>
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <v-img :src="require('@/assets/logo1.png')" class="mr-3" contain max-width="45" width="100%" />

      <!-- <base-img
        :src="require('@/assets/logo1.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <base-img :src="require('@/assets/logo1.png')" contain max-width="128" width="100%" />-->

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(item, i) in items"
            :key="i.title"
            :to="item.link"
            :exact="item.title === 'FMX'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >{{ item.title }}</v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer v-model="drawer" :items="items" />
  </div>
</template>

<script>
export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer")
  },

  data: () => ({
    drawer: null,
    items: [
      { title: "FMX", link: "/" },
      { title: "Jogadores", link: "/players" },
      { title: "Eventos", link: "/tournament" },
      { title: "Contactos", link: "/Contact" },
      { title: "Perguntas Frequentes", link: "/FAQ" }
    ]
  })
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
