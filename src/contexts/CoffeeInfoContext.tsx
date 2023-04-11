import { createContext, ReactNode, useState } from "react";
import { dataCoffee, ItemCoffee } from "../dataCoffee";

interface CoffeeContextType {
  coffeeList: ItemCoffee[];
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProps {
  children: ReactNode;
}

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [coffeeList, setCoffeeList] = useState<ItemCoffee[]>(dataCoffee);

  return (
    <CoffeeContext.Provider value={{ coffeeList }}>
      {children}
    </CoffeeContext.Provider>
  );
}
