<script setup>

</script>
<template>
  <v-app light>
    <div style="z-index: 1">
      <v-app-bar elevation="0" color="transparent">
        <h1 class="font-weight-regular myF text-h5">MishyStore</h1>
        <v-responsive max-width="500" class="mx-auto">
          <v-text-field
            light
            style="color: black"
            class="white pa-2"
            append-icon="mdi-magnify"
            placeholder="جستوجو کنید..."
            hide-details
            rounded
          />
        </v-responsive>
        <div class="flex-row d-flex">
        <div style="border: 1px solid #000;" class="categoryM d-flex flex-row px-5 py-1">
          <img width="21px" src="../assets/icon/account-avatar-head-svgrepo-com(1).svg" alt="account"/>
          <h4 style="font-size: small;" class="nav pa-1 myF">ورود و عضویت</h4>
          <img width="18px" src="../assets/icon/down-arrow-5-svgrepo-com.svg" alt="account"/>  
        </div>
        <div class="d-flex flex-row pa-2 justify-space-around">
          <img class="mx-3" src="../assets/icon/reload-ui-2-svgrepo-com(1).svg" width="19" alt="">
          <img class="mx-3" src="../assets/icon/hurt.svg" width="19" alt="">
          <v-icon dark class="pr-3">mdi-cart</v-icon>
        </div>
        </div>
      </v-app-bar>
    </div>
    <div class="mx-auto nav-container  align-center" style="z-index: 1;">
      <div class="d-flex flex-row white pa-3 rounded-r-pill rounded-l-pill">
        <div class="primary categoryM pa-3 align-center justify-center">
          <img style="margin-bottom: -4px;"  src="../assets/icon/down-arrow-5-svgrepo-com.svg" width="19px" alt="d">
          <span class="myF">
            دسته بندی محصولات
          </span>
          <img style="margin-bottom: -4px;" src="../assets/icon/category-svgrepo-com.svg" width="19px" alt="cat">
        </div>
        <div class="pa-3" v-for="item in navMenu">
          <NuxtLink class="nav" :to="item.link">{{ item.name }}</NuxtLink>
        </div>
        <div style="width: 22rem"></div>
        <div class="left d-flex justify-center align-center rounded-pill">
          <span class="py-1 px-2" style="font-size: small; color: #bea9c5;">
            دارای مجوز رسمی از سازمان بهداشت
          </span>
        </div>
        <div class="colet d-flex flex-column justify-space-around align-center accent">
          <div>
            <img width="25" style="stop-color: white;" class="mt-3" src="../assets/icon/support-svgrepo-com.svg" alt="">
          </div>
          <div class="myF">پشتیبانی فوری</div>
          <div class="myF">#329375123</div>
        </div>
      </div>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<style>
.nav-container {
  width: 1300px;
  height: 70px;
  z-index: 1;
  position: relative;
}
.categoryB {
  max-width: 400px;
  border-radius: 60px;
  font-weight: 300;
}
.nav {
  text-decoration: none;
  font-weight: 400;
}
.colet {
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 20px 0 20px 20px;
  z-index: 2;
  position: absolute;
  left: 0px;
  top:0;
}
.left {
  border: 1.3px solid #bea9c5;
  color: #bea9c5;
}
.myF{
  font-size: small; 
  color: white
}
</style>
