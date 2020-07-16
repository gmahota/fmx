<template>
  <section id="hero">
    <v-img
      
      :src="require('@/assets/images/slide03.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <div class="row align-items-center">
          <div class="col-12 text-center text-sm-left">
            <div class="intro_layers_wrapper">
              <div class="intro_layers d-flex flex-column flex-md-row align-items-md-center">
                <div
                  class="intro_layer animated fadeIn"
                  data-animation="fadeIn"
                  style="visibility: hidden;"
                >
                  <img :src="require('@/assets/images/chess.png')" alt draggable="false" />
                </div>
                <div
                  class="intro_layer animated fadeInLeft"
                  data-animation="fadeInLeft"
                  data-delay="150"
                  style="visibility: hidden;"
                >
                  <h3 class="text-uppercase thin">
                    Federação Moçambicana
                    <span class="color-main text-capitalize bold">De Xadrez</span>
                  </h3>
                  <p>Seja Benvido ao Nossa Pagina</p>
                </div>
              </div>

              <div
                :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
                class="d-flex flex-wrap"
              >
                <base-btn class="btn-maincolor">Inicie Agora</base-btn>

                <span class="font-weight-bold ml-6 mr-4 my-4">ou</span>

                <base-btn  :ripple="false" class="pa-1" height="auto" text>Acompanhem-nos no facebook</base-btn>
              </div>
              
            </div>
            <!-- eof .intro_layers_wrapper -->
          </div>
          <!-- eof .col-* -->
        </div>
        <!-- eof .row -->
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: true }
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  }
};
</script>
