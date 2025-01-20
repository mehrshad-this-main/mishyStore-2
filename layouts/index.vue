<script setup>
import AppBar from "../components/AppBar.vue";
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <v-app>
    <div class="primary main-container rounded-bl-circle">
      <AppBar />
      <NavBar />
      <v-container>
        <div class="d-flex align-center justify-space-around mt-16">
          <div class="pa-4" style="width: max-content;">
            <div style="color: #3c286b; font-size: xx-large;" class="pr-4">
              از هویت واقعی خود زنده بمانید!
            </div>
            <div style="width: 30rem;" class="pr-12">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </div>
          </div>
          <v-responsive class="d-flex flex-row" style="gap: 20px; max-width: 100%;">
            <img v-for="i in 3" :key="i" class="rounded-xl pa-2" width="30%" style="max-width: 345px;"
              :src="`https://picsum.photos/seed/10${i}/300`" alt="lorem img" />
          </v-responsive>
        </div>
      </v-container>
    </div>
    <div>
      <Nuxt />
    </div>
  </v-app>
</template>
<style></style>
