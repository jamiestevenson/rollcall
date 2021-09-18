<template>
  <div class="wrapper">
    <div class="overviewInfo">
      <img class="card-image" :src="person.cardImage" />
      <div class="actions">
        <div class="cartbutton neurobutton">
          {{person.emoji}}
        </div>
      </div>
      <div class="personinfo">
        <div class="grouptext">
          <p>{{person.title}} - {{person.team}}</p>
        </div>
        <div class="grouptext">
          <h3>{{person.name}}</h3>
        </div>
      </div>
    </div>
    <!-- overview info -->
    <div class="productSpecifications">
      <h1>Strengths</h1>
      <div class="productFeatures">
        <div class="feature">
          <div class="featureIcon"></div>
          <div class="featureText">
            <p><strong>Futuristic</strong></p>
            <p>Design</p>
          </div>
        </div>
        <div class="feature">
          <div class="featureIcon"></div>
          <div class="featureText">
            <p><strong>Built-in</strong></p>
            <p>Microphone</p>
          </div>
        </div>
        <div class="feature">
          <div class="featureIcon"></div>
          <div class="featureText">
            <p><strong>Haptic</strong></p>
            <p>Feedback</p>
          </div>
        </div>
        <div class="feature">
          <div class="featureIcon"></div>
          <div class="featureText">
            <p><strong>Fast charge</strong></p>
            <p>USB-C port</p>
          </div>
        </div>
      </div>
      <div class="checkoutButton">
        <div class="priceTag"><span>🎉 </span>{{person.rating}}</div>
        <button class="preorder">
          <p>Profile</p>
          <div class="buttonaction">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
    <!-- product specificaiton -->
  </div>
  <!-- wrapper-->
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'profile-card',
    props: {
        person: {
          type: Object,
          required: true
        }
    },
    computed: {
      portrait() { 
        // https://github.com/vuejs-templates/webpack/issues/566
        // console.log('card path');
        // let id = this.person?.id ? this.person.id :'default';
        // const path: string = '../assets/portrait/' + id + '.jpg';
        // console.log('card path: ' + path);
        return require("@/assets/portrait/" + this.person.id + ".jpg");
      },
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*, button, input {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --bg-shape-color:linear-gradient(120deg, #343A4F, #0F1620);
  --lightblue: #3D9DEA;
  --darkblue: #4A4EEE;
  --text-color: #D5E1EF;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
}

.wrapper {
  width: 350px;
  border-radius:30px;
  background-image: linear-gradient(120deg, #343A4F, #0F1620);
  overflow: hidden;
  margin: 20px;
}

.overviewInfo, .productSpecifications {
  padding: 24px;
}

.overviewInfo {
  background-image: linear-gradient(176deg, #3D9DEA, #4A4EEE);
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 32px;
}
.actions .cartbutton {
  position: relative;
  font-size: 16pt;
}

.actions .backbutton, .actions .cartbutton {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.neurobutton {
  background-image: linear-gradient(120deg, #343A4F, #0F1620);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    inset 3px 4px 5px 0px rgba(197, 197, 197, 0.1),
    inset 3px 6px 6px 5px rgba(78, 77, 77, 0.1),
    -2px -2px 8px 2px rgba(255, 255, 255, 0.1),
    2px 2px 6px 3px rgba(0, 0, 0, 0.4);
}

.personinfo {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  min-height: 100px;
  margin-bottom: 10px;
  align-content: flex-start;
  flex-wrap: wrap;
}

h1 {
  font-family: "Michroma", sans-serif;
}

.grouptext h3 {
  letter-spacing: 3.2px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  float: left;
}
.grouptext p {
  font-size: 12px;
  opacity: 0.8;
  float: left;
}

/* product specifications */
.featureIcon {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(120deg, #343A4F, #0F1620);
  border-radius: 8px;
  margin-right: 16px;
}

.productSpecifications h1 {
  margin-top: 10px;
  margin-bottom: 16px;
  font-size: 32px;
}
.productSpecifications p {
  opacity: 0.8;
  font-size: 15px;
  line-height: 1.5;
}
.productSpecifications .productFeatures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  grid-row-gap: 16px;
}
.productSpecifications .productFeatures .feature {
  display: flex;
}

.checkoutButton {
  display: flex;
  width: 100%;
  background-image: linear-gradient(120deg, #343A4F, #0F1620);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -2px -2px 2px 0px rgba(80, 80, 80, 0.1),
    2px 2px 3px 0px rgba(12, 12, 12, 0.3),
    inset 0px 0px 0px 2px rgba(80, 80, 80, 0.2);
  margin-top: 30px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
}

.priceTag {
  display: flex;
  align-items: center;
  font-size: 32px;
}

.priceTag span {
  font-size: 20px;
}

/* checkout button*/
button.preorder {
  outline: 0;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: linear-gradient(85deg, #61c7ef, #4833fb);
  color: white;
}

.preorder p {
  padding: 8px 17px;
  border-right: 1px solid rgba(0, 0, 0, 0.4);
}

.buttonaction {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
