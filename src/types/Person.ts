import { Department } from "./Department";

export interface Person {
  id: number;
  name: string;
  title: string;
  team: Department;
  rating: number;
  cardImage: string;
}
