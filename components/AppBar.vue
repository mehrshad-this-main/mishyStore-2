<template>
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
        <div style="border: 1px solid #000;" class="categoryB d-flex flex-row px-5 py-1">
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
</template>