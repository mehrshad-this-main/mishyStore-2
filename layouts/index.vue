<script setup>
import AppBar from "../components/AppBar.vue";
import NavBar from "../components/NavBar.vue";
import CFooter from "../components/CFooter.vue";
import GrpAppBar from "../components/Grp/AppBar.vue";
const navMenu = [
  { name: "صفحه اصلی", link: "/", id: 0 },
  { name: "فروشگاه", link: "/", id: 1 },
  { name: "وبلاگ", link: "/", id: 2 },
  { name: "درباره ما", link: "/", id: 3 },
  { name: "تماس باما", link: "/", id: 4 },
];
</script>
<template>
  <v-app>
    <div class="primary main-container rounded-bl-circle">
      <GrpAppBar :navList="navMenu" class="d-block d-md-none" />
      <AppBar class="d-none d-md-block" />
      <NavBar class="d-none d-md-block" />
      <v-row no-gutters class="align-center justify-space-around mt-16 pt-3">
        <v-col cols="12" md="5">
          <div class="pa-4" style="width: max-content">
            <div style="color: #3c286b; font-size: xx-large" class="pr-4">
              از هویت واقعی خود زنده بمانید!
            </div>
            <div style="width: 30rem" class="pr-12">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <v-responsive
            class="d-flex flex-row"
            style="gap: 20px; max-width: 100%"
          >
            <img
              v-for="i in 3"
              :key="i"
              class="rounded-xl pa-2"
              width="33%"
              style="max-width: 345px"
              :src="`https://picsum.photos/seed/10${i}/300`"
              alt="lorem img"
            />
          </v-responsive>
        </v-col>
      </v-row>
    </div>
    <div>
      <Nuxt />
    </div>
    <v-footer class="ma-0 pa-0">
      <CFooter />
    </v-footer>
  </v-app>
</template>
<style></style>
