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
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
};

export function CoffeeItemCard({
  item,
  addItem,
  removeItem,
}: CoffeeItemCardProps) {
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
          <Minus onClick={() => removeItem(item.id)} size={14} weight="bold" />
          <span>{item.quantity}</span>
          <Plus onClick={() => addItem(item.id)} size={14} weight="bold" />
        </div>
        <span>
          <ShoppingCartSimple size={20} weight="fill" />
        </span>
      </CoffeeItemBuy>
    </CoffeeItemContent>
  );
}
