<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                <v-card>
                  <v-img
                    :src="card.src"
                    height="200px"
                    @click="card.showDetails = !card.showDetails"
                  ></v-img>

                  <v-card-title>{{card.title}}</v-card-title>

                  <v-card-subtitle>{{card.subtitle}}</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text>Share</v-btn>

                    <v-btn color="purple" text>Explore</v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "home",
  data: () => ({
    show: false,
    cards: [
      {
        title: "Curso de Treinadores",
        subtitle: "Treinador - Nivel 1",
        src: require('@/assets/curso1.jpg'),
        flex: 4,
        description: "Random Image",
        showDetails: false
      },
      {
        title: "Exercicos em Casa",
        subtitle: "Aberto a Todos",
        src: require('@/assets/curso2.jpg'),
        flex: 4,
        description: "House Image",
        showDetails: false
      },
      {
        title: "Live Facebook",
        subtitle: "Aberto a Todos",
        src: require('@/assets/curso3.jpg'),
        flex: 4,
        description: "Road Image",
        showDetails: false
      },
      {
        title: "Formação Arbitros",
        subtitle: "Arbitros - Iniciados",
        src: require('@/assets/curso4.jpg'),
        flex: 4,
        description: "Plane Image",
        showDetails: false
      }
    ]
  })
};
</script>