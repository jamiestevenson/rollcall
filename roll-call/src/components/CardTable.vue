<template>
  <div class="card-table">
    <h3>Card Table</h3>
    <profile-card
      class="card" v-for="p in people" v-bind:key="p.id" :person="p">
    </profile-card>
  </div>
</template>

<script lang="ts">
import ProfileCard from "./ProfileCard.vue";
export default {
  components: { ProfileCard },
  name: "card-table",
  props: {
    people: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
