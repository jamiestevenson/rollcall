import { createStore } from "vuex";
import { Person } from "../types/Person";

const samplePeople: Person[] = [
  {
    id: 1,
    name: "Bob",
    team: "Integrations",
    emoji: "🧱",
    rating: 228
  },
  {
    id: 2,
    name: "Sue",
    team: "Mobile",
    emoji: "📱",
    rating: 394
  },
  {
    id: 3,
    name: "Pete",
    team: "Sales",
    emoji: "💸",
    rating: 103
  },
  {
    id: 4,
    name: "Dawn",
    team: "Production",
    emoji: "🧭",
    rating: 903
  },
  {
    id: 5,
    name: "Alex",
    team: "Design",
    emoji: "🎨",
    rating: 620
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
