import { createStore } from "vuex";
import { Person } from "../types/Person";

const samplePeople: Person[] = [
  {
    id: 1,
    name: "Bob",
    title: "Technical Architect",
    team: "Integrations",
    rating: 228,
    cardImage: require("../assets/portrait/1.jpg"),
  },
  {
    id: 2,
    name: "Sue",
    title: "Developer",
    team: "Mobile",
    rating: 394,
    cardImage: require("../assets/portrait/woman-3170568_1920.jpg"),
  },
  {
    id: 3,
    name: "Pete",
    title: "Account Developer",
    team: "Sales",
    rating: 103,
    cardImage: require("../assets/portrait/men-1276384_1920.jpg"),
  },
  {
    id: 4,
    name: "Dawn",
    title: "Senior Project Manager",
    team: "Production",
    rating: 903,
    cardImage: require("../assets/portrait/person-1245959_1920.jpg"),
  },
  {
    id: 5,
    name: "Alex",
    title: "Graduate UX Designer",
    team: "Design",
    rating: 620,
    cardImage: require("../assets/portrait/continental-bulldog-2437110_1920.jpg"),
  },
];

export default createStore({
  state: {
    people: samplePeople,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    people(state) {
      return state.people;
    },
  },
});
