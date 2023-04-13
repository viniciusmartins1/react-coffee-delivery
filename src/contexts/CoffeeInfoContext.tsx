import { createContext, ReactNode, useEffect, useState } from "react";
import { dataCoffee, ItemCoffee } from "../dataCoffee";
import { AddressDeliveryFormData, MethodPayments } from "../pages/Checkout";

interface CheckoutInfo extends AddressDeliveryFormData {
  paymentMethod: MethodPayments;
}
interface CoffeeContextType {
  coffeeList: ItemCoffee[];
  selectedCoffees: ItemCoffee[];
  quantityShopping: number;
  checkoutInfos: CheckoutInfo;
  addCoffeeItem: (id: string) => void;
  removeCoffeeItem: (id: string) => void;
  removeSelectedItem: (id: string) => void;
  createCheckoutInfo: (data: CheckoutInfo) => void;
}
interface CoffeeContextProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [coffeeList, setCoffeeList] = useState<ItemCoffee[]>(dataCoffee);
  const [selectedCoffees, setSelectedCoffees] = useState<ItemCoffee[]>([]);
  const [quantityShopping, setQuantityShopping] = useState<number>(0);
  const [checkoutInfos, setCheckoutInfos] = useState<CheckoutInfo>(
    {} as CheckoutInfo
  );

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

  function removeSelectedItem(id: string) {
    const newArray = coffeeList.map((item) => {
      if (item.id === id) {
        item.quantity = 0;
      }
      return item;
    });
    setCoffeeList([...newArray]);
  }

  function createCheckoutInfo(data: CheckoutInfo) {
    setCheckoutInfos(data);
  }

  useEffect(() => {
    const arrayToShopping = coffeeList.filter((item) => item.quantity > 0);
    setSelectedCoffees(arrayToShopping);
    setQuantityShopping(arrayToShopping.length);
  }, [coffeeList]);

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        selectedCoffees,
        quantityShopping,
        checkoutInfos,
        addCoffeeItem,
        removeCoffeeItem,
        removeSelectedItem,
        createCheckoutInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
