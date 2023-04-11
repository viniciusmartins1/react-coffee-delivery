import { MapPin, ShoppingCart } from "phosphor-react";
import logoImage from "../../assets/logo.png";
import { DefaultContainer } from "../../pages/Home/styles";

import {
  HeaderContainer,
  ActionsConteiner,
  LocationContainer,
  ShoppingCartContainer,
} from "./styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeInfoContext";

export function Header() {
  const { quantityShopping } = useContext(CoffeeContext);
  return (
    <DefaultContainer>
      <HeaderContainer>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
        <ActionsConteiner>
          <LocationContainer>
            <MapPin size={32} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocationContainer>
          <ShoppingCartContainer>
            <Link to="/checkout">
              <ShoppingCart size={32} weight="fill" />
            </Link>
            {quantityShopping !== 0 && <span>{quantityShopping}</span>}
          </ShoppingCartContainer>
        </ActionsConteiner>
      </HeaderContainer>
    </DefaultContainer>
  );
}
