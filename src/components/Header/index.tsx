import { MapPin, ShoppingCart } from "phosphor-react";
import logoImage from "../../assets/logo.png";

import { DefaultContainer } from "../../pages/Home/styles";

import {
  HeaderContainer,
  ActionsConteiner,
  LocationContainer,
  ShoppingCartContainer,
} from "./styles";

export function Header() {
  return (
    <DefaultContainer>
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
    </DefaultContainer>
  );
}
