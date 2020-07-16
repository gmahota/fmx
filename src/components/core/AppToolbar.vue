<template>
  <v-app-bar color="danger" hide-on-scroll light app>
    <v-toolbar-title class="ml-0 pl-3">
      <img :src="logo" height="40" :alt="'logo'" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-container class="mt-8">
      <v-flex class="pa-1">
        <v-row>        
          
          
        </v-row>
      </v-flex>
    </v-container>

  
  </v-app-bar>
</template>

<script>
import Util from "@/util";
//import NotificationList from "@/components/widgets/list/NotificationList";

export default {
  name: "app-toolbar",
  components: {
    //NotificationList
  },
  data: function() {
    return {
      logo:require("~/static/logo1.png"),
      Branch: [],
      branch: null,
      Warehouse: [],
      warehouse: null,
      Localization: [],
      localization: null,
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: "Profile",
          click: e => {
            console.log(e);
          }
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: e => {
            console.log(e);
          }
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: "Logout",
          click: this.handleLogout
        }
      ]
    };
  },
  beforeMount: async function() {
    
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    }
  },
  created() {},
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    selectBranch(item) {
      if (!item) return;

      localStorage.branch = this.branch.code;

      this.Warehouse = item.Warehouses;
    },
    selectWarehouse(item) {
      if (!item) return;

      localStorage.warehouse = this.warehouse.code;
      this.Localization = this.warehouse.localizations;
    },
    selectLocalization(item) {
      if (!item) return;

      localStorage.localization = this.localization.code;
    }
  }
};
</script>
