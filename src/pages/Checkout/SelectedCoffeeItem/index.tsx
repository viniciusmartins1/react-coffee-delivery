import { Plus, Minus, Trash } from "phosphor-react";
import {
  CoffeesInfos,
  SelectedCoffeItem,
  AddAndRemoveItems,
  RemoveItems,
  DetailsItems,
  PriceItem,
  Divider,
} from "./style";
import { ItemCoffee } from "../../../dataCoffee";
import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeInfoContext";

interface SelectedCoffeeItemProps {
  item: ItemCoffee;
}

export function SelectedCoffeeItem({ item }: SelectedCoffeeItemProps) {
  const { addCoffeeItem, removeCoffeeItem, removeSelectedItem } =
    useContext(CoffeeContext);

  return (
    <>
      <SelectedCoffeItem>
        <img src={item.image} alt="" />
        <CoffeesInfos>
          <p>{item.title}</p>
          <DetailsItems>
            <AddAndRemoveItems>
              <Minus
                onClick={() => removeCoffeeItem(item.id)}
                size={16}
                weight="bold"
              />
              <span>{item.quantity}</span>
              <Plus
                onClick={() => addCoffeeItem(item.id)}
                size={16}
                weight="bold"
              />
            </AddAndRemoveItems>
            <RemoveItems onClick={() => removeSelectedItem(item.id)}>
              <Trash size={16} weight="regular" />
              <span>Remover</span>
            </RemoveItems>
          </DetailsItems>
        </CoffeesInfos>
        <PriceItem>R$ 9,90</PriceItem>
      </SelectedCoffeItem>
      <Divider />
    </>
  );
}
