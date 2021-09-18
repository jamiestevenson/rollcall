<template>
  <div class="everyone">
    <h1>Welcome to our directory!</h1>
    <card-table v-bind="people" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardTable from "../components/CardTable.vue";

export default defineComponent({
  name: "everyone",
  props: {},
  components: {
    CardTable,
  },
  computed: {
    people() {
      return this.$store.state;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
