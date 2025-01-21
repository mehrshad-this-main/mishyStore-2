<script setup>
const navMenu = [
  { name: "صفحه اصلی", link: "/", id: 0 },
  { name: "فروشگاه", link: "/", id: 1 },
  { name: "وبلاگ", link: "/", id: 2 },
  { name: "درباره ما", link: "/", id: 3 },
  { name: "تماس باما", link: "/", id: 4 },
];
</script>
<template>
  <div class="mx-auto nav-container align-center" style="z-index: 1">
    <div class="d-flex flex-row white pa-3 rounded-r-pill rounded-l-pill">
      <div class="primary categoryB pa-3 align-center justify-center">
        <img
          style="margin-bottom: -4px"
          src="../assets/icon/down-arrow-5-svgrepo-com.svg"
          width="19px"
          alt="d"
        />
        <span class="myF"> دسته بندی محصولات </span>
        <img
          style="margin-bottom: -4px"
          src="../assets/icon/category-svgrepo-com.svg"
          width="19px"
          alt="cat"
        />
      </div>
      <div class="pa-3" v-for="item in navMenu">
        <NuxtLink class="nav" :to="item.link">{{ item.name }}</NuxtLink>
      </div>
      <div style="width: 22rem"></div>
      <div class="left d-flex justify-center align-center rounded-pill">
        <span class="py-1 px-2" style="font-size: small; color: #bea9c5">
          دارای مجوز رسمی از سازمان بهداشت
        </span>
      </div>
      <div
        class="colet d-flex flex-column justify-space-around align-center accent"
      >
        <div>
          <img
            width="25"
            style="stop-color: white"
            class="mt-3"
            src="../assets/icon/support-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div class="myF">پشتیبانی فوری</div>
        <div class="myF">#329375123</div>
      </div>
    </div>
  </div>
</template>
