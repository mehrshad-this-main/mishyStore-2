<script setup></script>
<template>
  <v-app>
    <div>
      <v-app-bar>
        <h1 class="font-weight-regular text-h5">mishyStore</h1>
        <div class="d-flex align-center mx-4">
        <v-text-field
          hide-details
          rounded
          variant="outline"
          density="compact"
          :width="300"
          label="Search"
        ></v-text-field>
      </div>
      </v-app-bar>
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
