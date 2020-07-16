<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-card>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>Dados do Treinador</v-toolbar-title>
        </v-toolbar>
        <v-tabs horizontal>
          <v-tab>
            <v-icon right>mdi-details</v-icon>Dados Gerais
          </v-tab>
          <v-tab>
            <v-icon right>mdi-cash-100</v-icon>Cursos
          </v-tab>
          <v-tab>
            <v-icon right>mdi-calendar-check-outline</v-icon>Historico
          </v-tab>
          <v-tab>
            <v-icon right>mdi-calendar-check-outline</v-icon>Outros
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-container>
                  <v-layout row>
                    <v-flex md3>
                      <v-avatar class="profile"
            color="grey"
            size="164"
            tile>
                        <img :src="model.avatar" />
                      </v-avatar>
                    </v-flex>

                    <v-flex md8>
                      <v-container>
                        <v-layout row>
                          <v-flex xs6>
                            <v-text-field label="Nome" v-model="model.name"></v-text-field>
                          </v-flex>

                          <v-flex xs6>
                            <v-text-field
                              label="Email"
                              prepend-icon="mdi-account-box"
                              v-model="model.email"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                            <v-text-field
                              label="Profissão"
                              prepend-icon="mdi-account-box"
                              v-model="model.jobTitle"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                            <v-text-field
                              label="Equipa"
                              prepend-icon="mdi-account-supervisor"
                              v-model="model.team"
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs6>
                            <v-text-field
                              label="Nível"
                              prepend-icon="mdi-account-supervisor"
                              v-model="model.nivel"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat></v-card>
          </v-tab-item>

          <v-tab-item></v-tab-item>

          <v-tab-item></v-tab-item>
        </v-tabs>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import { getCoachById } from "@/api/crm/coach";
import {
  getProjectByCode,
  getProjectInvoices,
  getProjectTasks
} from "@/api/crm/project";

export default {
  layout: "home",
  data: () => ({
    model: null,
    project: null,
    invoices: [{}],
    tasks: [{}],
    headers: [
      { text: "Document", value: "id" },
      { text: "Summary", value: "summary" },
      { text: "Date", value: "date" },
      { text: "Price", value: "price" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "action", sortable: false }
    ],
    headersTask: [
      {
        text: "",
        align: "center",
        sortable: false,
        value: "avatar"
      },
      {
        text: "Name",
        align: "left",
        value: "name"
      },
      { text: "Date", value: "date" },
      { text: "Duo", value: "duo" },
      { text: "Deadline", value: "deadline" },
      { text: "Type", value: "type" },
      { text: "status", value: "status" },
      { text: "Progress", value: "progress" },
      { text: "Action", value: "action", align: "center" }
    ],
    colors: {
      pedding: "blue",
      advance: "red",
      paid: "green"
    }
  }),
  created() {
    this.model = getCoachById(this.$route.params.treinador);
  }
};
</script>