import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ItemCoffee } from "../../../dataCoffee";
import {
  CoffeeItemContent,
  CoffeeItemTags,
  CoffeeItemTitle,
  CoffeeItemDescription,
  CoffeeItemBuy,
} from "./styles";

type CoffeeItemCardProps = {
  item: ItemCoffee;
};

export function CoffeeItemCard({ item }: CoffeeItemCardProps) {
  return (
    <CoffeeItemContent>
      <img src={item.image} alt="" />
      <CoffeeItemTags>
        {item.categories.map((categorie, i) => (
          <span key={categorie + i}>{categorie}</span>
        ))}
      </CoffeeItemTags>
      <CoffeeItemTitle>{item.title}</CoffeeItemTitle>
      <CoffeeItemDescription>{item.description}</CoffeeItemDescription>
      <CoffeeItemBuy>
        <p>
          <span>R$</span> {item.valueRental.toFixed(2).replace(".", ",")}
        </p>

        <div>
          <Minus size={14} weight="bold" />
          <span>1</span>
          <Plus size={14} weight="bold" />
        </div>
        <span>
          <ShoppingCartSimple size={20} weight="fill" />
        </span>
      </CoffeeItemBuy>
    </CoffeeItemContent>
  );
}
