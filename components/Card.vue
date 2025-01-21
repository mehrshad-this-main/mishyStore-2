<script>
export default {
  props: ["name", "id", "price"],
};
</script>
<template>
  <v-card class="my-4 pt-2" elevation="1" width="260" height="420" hover>
    <v-img
      height="230"
      alt="img"
      class="ma-4"
      :src="`https://picsum.photos/seed/10${id}/300`"
    ></v-img>
    <v-card-title centered>{{ name }}</v-card-title>
    <v-card-text> بلیط {{ price }} </v-card-text>
    <v-card-action class="mr-15">
      <v-btn icon>
        <img
          width="18"
          alt="btn"
          src="../assets/icon/reload-ui-2-svgrepo-com(1).svg"
          style="filter: brightness(30%)"
        />
      </v-btn>
      <v-btn icon>
        <img
          width="30"
          alt="btn"
          src="../assets/icon/cart-check-svgrepo-com(1).svg"
        />
      </v-btn>
      <v-btn icon>
        <img
          width="18"
          alt="btn"
          src="../assets/icon/hurt.svg"
          style="filter: brightness(30%)"
        />
      </v-btn>
    </v-card-action>
  </v-card>
</template>
