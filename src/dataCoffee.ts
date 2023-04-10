import coffee01 from "./assets/coffeeItemCards/coffee01.png";
import coffee02 from "./assets/coffeeItemCards/coffee02.png";
import coffee03 from "./assets/coffeeItemCards/coffee03.png";
import coffee04 from "./assets/coffeeItemCards/coffee04.png";
import coffee05 from "./assets/coffeeItemCards/coffee05.png";
import coffee06 from "./assets/coffeeItemCards/coffee06.png";
import coffee07 from "./assets/coffeeItemCards/coffee07.png";
import coffee08 from "./assets/coffeeItemCards/coffee08.png";
import coffee09 from "./assets/coffeeItemCards/coffee09.png";
import coffee10 from "./assets/coffeeItemCards/coffee10.png";
import coffee11 from "./assets/coffeeItemCards/coffee11.png";
import coffee12 from "./assets/coffeeItemCards/coffee12.png";
import coffee13 from "./assets/coffeeItemCards/coffee13.png";
import coffee14 from "./assets/coffeeItemCards/coffee14.png";
import { v4 as uuidv4 } from "uuid";

export type ItemCoffee = {
  id: string;
  image: string;
  categories: string[];
  title: string;
  description: string;
  valueRental: number;
  quantity: number;
};

export const dataCoffee: ItemCoffee[] = [
  {
    image: `${coffee01}`,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee02}`,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee03}`,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee04}`,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    valueRental: 9.9,
    categories: ["tradicional", "gelado"],
    quantity: 0,
  },
  {
    image: `${coffee05}`,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    valueRental: 9.9,
    categories: ["tradicional", "com leite"],
    quantity: 0,
  },
  {
    image: `${coffee06}`,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    valueRental: 9.9,
    categories: ["tradicional", "com leite"],
    quantity: 0,
  },
  {
    image: `${coffee07}`,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    valueRental: 9.9,
    categories: ["tradicional", "com leite"],
    quantity: 0,
  },
  {
    image: `${coffee08}`,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    valueRental: 9.9,
    categories: ["tradicional", "com leite"],
    quantity: 0,
  },
  {
    image: `${coffee09}`,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee10}`,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee11}`,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee12}`,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee13}`,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
  {
    image: `${coffee14}`,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    valueRental: 9.9,
    categories: ["tradicional"],
    quantity: 0,
  },
].map((item) => ({ ...item, id: uuidv4() }));
