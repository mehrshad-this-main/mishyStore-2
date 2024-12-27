<script setup>
import { ref } from "vue";
const toggle = ref(null);
const navMenu = [
  { name: "صفحه اصلی", link: "/" ,id:0},
  { name: "فروشگاه", link: "/",id:1 },
  { name: "وبلاگ", link: "/",id:2 },
  { name: "درباره ما", link: "/",id:3 },
  { name: "تماس باما", link: "/",id:4 },
];
</script>
<template>
  <v-app>
    <div>
      <v-app-bar>
        <h1 class="font-weight-regular text-h5">mishyStore</h1>
        <v-responsive max-width="500" class="mx-auto">
          <v-text-field
            light
            class="white"
            append-icon="mdi-magnify"
            placeholder="جستوجو کنید..."
            hide-details
            rounded
          />
        </v-responsive>
        <div>
          <v-chip
            class="ma-2"
            color="indigo"
            text-color="white"
            variant="outlined"
          >
            <v-icon>mdi-account</v-icon>
            <h4 class="text-body-2 font-weight-light">ورود و عضویت</h4>
          </v-chip>
          <v-icon>mdi-cart</v-icon>
        </div>
      </v-app-bar>
      <v-container class="mt-2 white rounded-r-pill">
        <v-row class="ma-2 align-center">
          <div class="pa-2 text-body-1 font-weight-regular primary categoryM">
            <v-icon> mdi-arrow-down </v-icon>
            دسته بندی محصولات
          </div>
          <v-btn-toggle v-model="toggle" group class="transparent">
            <v-sheet
              v-for="item in navMenu"
              :key="item.id"
              class="transparent text-body-1 mx-4"
              ><NuxtLink class="nav" :to="item.link">{{ item.name }}</NuxtLink></v-sheet
            >
          </v-btn-toggle>
        </v-row>
      </v-container>
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
.categoryM {
  border: 2px solid #000;
  border-radius: 25px;
  padding: 20px;
  font-weight: 600;
}
.nav{
  text-decoration: none;
  font-weight: 600;
}
</style>
