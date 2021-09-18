<template>
  <div class="home">
    <img class="logo" alt="roll call logo" src="../assets/network.svg" />
    <HelloWorld msg="Welcome to your Roll Call" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "../components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.logo {
  height: 100px;
}
</style>
