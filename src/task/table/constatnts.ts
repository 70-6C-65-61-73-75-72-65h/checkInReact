export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  group: string;
  age: number;
  city: string;
  id: number;
}

export const usersList: IUser[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@fuck.com",
    group: "admin",
    age: 13,
    city: "Rea",
    id: 1,
  },
  {
    firstName: "Lia",
    lastName: "Rage",
    email: "Lia@fuck.com",
    group: "user",
    age: 52,
    city: "Rot",
    id: 2,
  },
  {
    firstName: "Roa",
    lastName: "Sage",
    email: "Roa@fuck.com",
    group: "user",
    age: 24,
    city: "Corpse",
    id: 3,
  },
  {
    firstName: "Por",
    lastName: "Qua",
    email: "Por@fuck.com",
    group: "user",
    age: 36,
    city: "Feta",
    id: 4,
  },
  {
    firstName: "Sea",
    lastName: "Lage",
    email: "Sea@fuck.com",
    group: "manager",
    age: 28,
    city: "Fea",
    id: 5,
  },
  {
    firstName: "Per",
    lastName: "Gunt",
    email: "Per@fuck.com",
    group: "manager",
    age: 25,
    city: "Boa",
    id: 6,
  },
  {
    firstName: "Come",
    lastName: "Pett",
    email: "Come@fuck.com",
    group: "manager",
    age: 24,
    city: "Loe",
    id: 7,
  },
];

export const actionField = Symbol.for("ACTION_FIELD");
