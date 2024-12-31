<script>
import Card from '../components/Card.vue';

export default {
  layout:"index",
}
</script>
<template>
  <div>
    <v-sheet height="500" max-width="100%" class="mx-auto d-flex flex-row align-center my-4 mr-5">
      <Card/>
      <v-sheet max-width="80%" class="mx-auto m" color="transparent">

        <v-slide-group>
          <v-slid-item class="ma-2" v-for="i in 10" :key="i">
            <Card/>
          </v-slid-item>
        </v-slide-group>
      </v-sheet>
    </v-sheet>
  </div>
</template>
<style>
</style>
