import imgSuccess from "../../assets/Illustration.png";
import {
  SuccessContainer,
  SuccessTitle,
  SuccessMainContent,
  OrderInfo,
} from "./styles";
import { DefaultContainer } from "../Home/styles";
import { CurrencyDollar, Timer, MapPin } from "phosphor-react";

export function Success() {
  return (
    <DefaultContainer>
      <SuccessTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessTitle>
      <SuccessContainer>
        <SuccessMainContent>
          <OrderInfo backgroundColorIcon="purple">
            <MapPin size={18} weight="fill" />
            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderInfo>

          <OrderInfo backgroundColorIcon="yellow">
            <Timer size={18} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </OrderInfo>

          <OrderInfo backgroundColorIcon="yellowDark">
            <CurrencyDollar size={18} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </OrderInfo>
        </SuccessMainContent>
        <img src={imgSuccess} alt="" />
      </SuccessContainer>
    </DefaultContainer>
  );
}
