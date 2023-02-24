import logoImage from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  HeaderContainer,
  ActionsConteiner,
  LocationContainer,
  ShoppingCartContainer,
  HomeContainer,
} from "./styles";

export function Home() {
  return (
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
    </HomeContainer>
  );
}
