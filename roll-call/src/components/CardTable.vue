<template>
  <div class="card-table">
    <h3>Card Table</h3>
    <div class="card-container">
    <profile-card
      class="card" v-for="p in people" v-bind:key="p.id" :person="p">
    </profile-card>
    </div>
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
<style scoped>
.card-container{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    align-items: center;
    padding: 40px 0px;
}
</style>
