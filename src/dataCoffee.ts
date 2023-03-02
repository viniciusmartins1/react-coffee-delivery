import coffeeImg from "./assets/coffee.png";

export type ItemCoffee = {
  image: string;
  categories: string[];
  title: string;
  description: string;
  valueRental: number;
};

export const dataCoffee: ItemCoffee[] = [
  {
    image: `${coffeeImg}`,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    valueRental: 9.9,
    categories: ["tradicional"],
  },
];
