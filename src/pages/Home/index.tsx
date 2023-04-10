import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import imgCoffee from "../../assets/img-coffee-home.png";
import { ItemCoffee, dataCoffee } from "../../dataCoffee";

import {
  DefaultContainer,
  MainContent,
  ItemsContainer,
  ItemStyle,
  ItemLeftStyle,
  HomeBody,
  ContentCoffee,
  CoffeeListContent,
  TitleList,
} from "./styles";
import { CoffeeItemCard } from "./CoffeeItemCard";
import { useState } from "react";

export function Home() {
  const [coffeeList, setCoffeeList] = useState<ItemCoffee[]>(dataCoffee);

  function handleClickAddItem(id: string) {
    const newArray = coffeeList.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setCoffeeList([...newArray]);
  }

  function handleClickRemoveItem(id: string) {
    const newArray = coffeeList.map((item) => {
      if (item.id === id && item.quantity > 0) {
        item.quantity--;
      }
      return item;
    });
    setCoffeeList([...newArray]);
  }

  return (
    <>
      <HomeBody>
        <DefaultContainer>
          <MainContent>
            <ContentCoffee>
              <article>
                <div>
                  <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                  <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                  </p>
                </div>
                <ItemsContainer>
                  <ItemStyle backgroundColor="yellowDark">
                    <ShoppingCart size={18} weight="fill" />
                    <p>Compra simples e segura</p>
                  </ItemStyle>
                  <ItemLeftStyle backgroundColor="gray">
                    <Package size={18} weight="fill" />
                    <p>Embalagem mantém o café intacto</p>
                  </ItemLeftStyle>
                  <ItemStyle backgroundColor="yellow">
                    <Timer size={18} weight="fill" />
                    <p>Entrega rápida e rastreada</p>
                  </ItemStyle>
                  <ItemLeftStyle backgroundColor="purple">
                    <Coffee size={18} weight="fill" />
                    <p>O café chega fresquinho até você</p>
                  </ItemLeftStyle>
                </ItemsContainer>
              </article>
              <img src={imgCoffee} alt="" />
            </ContentCoffee>
          </MainContent>
        </DefaultContainer>
      </HomeBody>
      <DefaultContainer>
        <TitleList>Nossos cafés</TitleList>

        <CoffeeListContent>
          {coffeeList.map((coffeeItem) => (
            <CoffeeItemCard
              addItem={handleClickAddItem}
              removeItem={handleClickRemoveItem}
              item={coffeeItem}
            />
          ))}
        </CoffeeListContent>
      </DefaultContainer>
    </>
  );
}
