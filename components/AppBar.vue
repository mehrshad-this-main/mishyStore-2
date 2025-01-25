<script setup>
import { ref } from "vue";
const drawer = ref(false);
</script>
<template>
  <div>
    <v-app-bar elevation="0" color="transparent">
      <h1 class="site-title">MishyStore</h1>
      <v-responsive max-width="400" min-width="180" class="mx-auto">
        <v-text-field
          light
          style="color: black"
          class="white mx-2 myT"
          append-icon="mdi-magnify"
          placeholder="جستوجو کنید..."
          hide-details
          rounded
        />
      </v-responsive>
      <v-chip color="info" outlined class="mx-1 mx-md-2">
        <v-icon>mdi-account</v-icon>
        ورود و عضویت
        <v-icon>mdi-chevron-down</v-icon>
      </v-chip>
      <div class="d-flex flex-row ma-2" style="gap: 20px">
        <v-img
          contain
          width="20"
          src="/icon/reload-ui-2-svgrepo-com(1).svg"
        ></v-img>
        <v-img contain width="20" src="/icon/hurt.svg"></v-img>
        <v-icon @click="drawer = true" color="white">mdi-cart</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    ></v-navigation-drawer>
  </div>
</template>
<style></style>
