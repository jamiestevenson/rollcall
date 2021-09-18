import { createStore } from "vuex";
import { Person } from "../types/Person";

const samplePeople: Person[] = [
  {
    id: 1,
    name: "Bob",
    title: "Technical Architect",
    team: "Integrations",
    emoji: "🧱",
    rating: 228,
    cardImage: require("../assets/portrait/1.jpg")
  },
  {
    id: 2,
    name: "Sue",
    title: "Developer",
    team: "Mobile",
    emoji: "📱",
    rating: 394,
    cardImage: require("../assets/portrait/default.jpg")
  },
  {
    id: 3,
    name: "Pete",
    title: "Account Developer",
    team: "Sales",
    emoji: "💸",
    rating: 103,
    cardImage: require("../assets/portrait/default.jpg")
  },
  {
    id: 4,
    name: "Dawn",
    title: "Senior Developer",
    team: "Production",
    emoji: "🧭",
    rating: 903,
    cardImage: require("../assets/portrait/default.jpg")
  },
  {
    id: 5,
    name: "Alex",
    title: "Graduate UX Designer",
    team: "Design",
    emoji: "🎨",
    rating: 620,
    cardImage: require("../assets/portrait/default.jpg")
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
