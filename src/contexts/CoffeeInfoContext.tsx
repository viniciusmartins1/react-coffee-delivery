import { createContext, ReactNode, useEffect, useState } from "react";
import { dataCoffee, ItemCoffee } from "../dataCoffee";

interface CoffeeContextType {
  coffeeList: ItemCoffee[];
  quantityShopping: number;
  addCoffeeItem: (id: string) => void;
  removeCoffeeItem: (id: string) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProps {
  children: ReactNode;
}

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [coffeeList, setCoffeeList] = useState<ItemCoffee[]>(dataCoffee);
  const [quantityShopping, setQuantityShopping] = useState<number>(0);

  function addCoffeeItem(id: string) {
    const newArray = coffeeList.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setCoffeeList([...newArray]);
  }

  function removeCoffeeItem(id: string) {
    const newArray = coffeeList.map((item) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity--;
      }
      return item;
    });
    setCoffeeList([...newArray]);
  }

  useEffect(() => {
    const arrayToShopping = coffeeList.filter((item) => item.quantity > 0);
    setQuantityShopping(arrayToShopping.length);
  }, [coffeeList]);

  return (
    <CoffeeContext.Provider
      value={{ coffeeList, quantityShopping, addCoffeeItem, removeCoffeeItem }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
