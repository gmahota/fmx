<template>
  <v-app>
    <home-system-bar />

    <home-app-bar />

    <v-content>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-content>

    <home-footer />

    <home-settings />
  </v-app>
</template>

<script>
export default {
  name: "HomeLayout",

  components: {
    HomeAppBar: () => import("@/layouts/home/AppBar"),
    HomeFooter: () => import("@/layouts/home/Footer"),
    HomeSettings: () => import("@/layouts/home/Settings"),
    HomeSystemBar: () => import("@/layouts/home/SystemBar"),
    HomeView: () => import("@/layouts/home/View")
  }
};
</script>
