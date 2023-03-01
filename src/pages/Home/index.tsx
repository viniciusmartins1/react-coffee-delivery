import {
  MapPin,
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  ShoppingCartSimple,
  Plus,
  Minus,
} from "phosphor-react";
import logoImage from "../../assets/logo.png";
import imgCoffee from "../../assets/img-coffee-home.png";
import coffeeItemImg from "../../assets/coffee.png";

import {
  HeaderContainer,
  ActionsConteiner,
  LocationContainer,
  ShoppingCartContainer,
  HomeContainer,
  MainContent,
  ItemsContainer,
  ItemStyle,
  ItemLeftStyle,
  HomeBody,
  ContentCoffee,
  CoffeeListContent,
  CoffeeItemContent,
  CoffeeItemTags,
  CoffeeItemTitle,
  CoffeeItemDescription,
  CoffeeItemBuy,
  TitleList,
} from "./styles";

export function Home() {
  return (
    <HomeBody>
      <HomeContainer>
        <HeaderContainer>
          <img src={logoImage} alt="" />
          <ActionsConteiner>
            <LocationContainer>
              <MapPin size={32} weight="fill" />
              <p>Porto Alegre, RS</p>
            </LocationContainer>
            <ShoppingCartContainer>
              <ShoppingCart size={32} weight="fill" />
              <span>3</span>
            </ShoppingCartContainer>
          </ActionsConteiner>
        </HeaderContainer>
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

          <TitleList>Nossos cafés</TitleList>

          <CoffeeListContent>
            <CoffeeItemContent>
              <img src={coffeeItemImg} alt="" />
              <CoffeeItemTags>
                <span>tradicional</span>
                <span>com leite</span>
              </CoffeeItemTags>
              <CoffeeItemTitle>Expresso Tradicional</CoffeeItemTitle>
              <CoffeeItemDescription>
                O tradicional café feito com água quente e grãos moídos
              </CoffeeItemDescription>
              <CoffeeItemBuy>
                <p>
                  <span>R$</span> 9,90
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
          </CoffeeListContent>
        </MainContent>
      </HomeContainer>
    </HomeBody>
  );
}
