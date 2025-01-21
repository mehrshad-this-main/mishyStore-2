<script setup>
const chipList = [
  { title: "جدید ترین محصولات", img: "" },
  { title: "درباره شرکت", img: "" },
  { title: "همکاری با شرکت", img: "" },
  { title: "مجوز های فعالیت", img: "" },
  { title: "خدمات پس ازفروش", img: "" },
];
</script>
<template>
  <v-sheet width="100%" height="300" color="accent" class="d-flex c-footer">
    <v-row
      style="margin-bottom: 12px"
      class="btn-footer d-flex justify-space-around"
    >
      <v-sheet
        v-for="i in 5"
        elevation="2"
        width="260"
        height="80"
        class="rounded-pill d-flex align-center justify-center"
        :key="i"
        color="white"
      >
        <v-avatar color="primary" class="ml-2">
          <img
            src="../assets/icon/account-avatar-head-svgrepo-com(1).svg"
            alt="img"
            class="ma-2 pa-2"
            width="40"
          />
        </v-avatar>
        <span style="font-size: medium">لورم ایپسوم متن ساختگی</span>
      </v-sheet>
    </v-row>
    <v-container class="d-flex justify-center align-center">
      <img
        width="100"
        src="../assets/icon/right-arrow-svgrepo-com.svg"
        alt="min"
      />
    </v-container>
  </v-sheet>
</template>
<style>
.c-footer {
  position: relative;
}

.btn-footer {
  position: absolute;
  top: -5%;
  width: 100%;
}
</style>
