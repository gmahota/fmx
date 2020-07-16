<template>
  <div>
    <v-flex id="size80">
      <v-carousel :show-arrows="false" :cycle="true" style="height:100%">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex id="size20">
      <v-card color="error">
        <v-card-title primary-title>
          <div ma-4>
            <div class="headline">#COVID-19</div>
          </div>
        </v-card-title>

        <v-card-text
          class="headline font-weight-bold"
        >Todos juntos contra o Covid! Fique em casa e acompanhe as nossas ações!</v-card-text>

        <v-card-actions>
          <v-row align="center" justify="center">
            <v-btn color="danger" tile outlined dark @click="openFacebook">Segue-nos</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex id="size100">
      <v-layout>
        <v-container>
          <v-flex ma-4>
            <h1>FORMAÇÕES</h1>
          </v-flex>

          <v-flex>
            <!-- <Calendar></Calendar> -->
          </v-flex>
        </v-container>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Calendar from "~/components/base/Calendar.vue";

export default {
  head() {
    return {
      script: [
        //{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  layout:"home",
  components: {
    Logo,
    Calendar
  },
  data() {
    return {
      items: [
        {
          src: require("~/static/images/bg5.jpeg")
        },
        {
          src: require("~/static/images/bg1.jpeg")
        },
        {
          src: require("~/static/images/bg4.jpg")
        },
        {
          src: require("~/static/images/bg2.jpg")
        }
      ]
    };
  },
  methods: {
    openFacebook: function() {
      window.open(
        "https://www.facebook.com/Associa%C3%A7%C3%A3o-de-Treinadores-de-Futebol-de-Mo%C3%A7ambique-112882676926072",
        "_blank"
      );
    }
  }
};
</script>

<style>
#size80 {
  height: 80vh;
}
#size20 {
  height: 20vh;
}
#size100 {
  height: 100vh;
}
</style>