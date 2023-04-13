import imgSuccess from "../../assets/Illustration.png";
import imgEmptyShoppingCar from "../../assets/empty_shopping_cart.svg";
import {
  SuccessContainer,
  SuccessTitle,
  SuccessMainContent,
  OrderInfo,
  EmptyContainer,
} from "./styles";
import { DefaultContainer } from "../Home/styles";
import { CurrencyDollar, Timer, MapPin } from "phosphor-react";
import { CoffeeContext } from "../../contexts/CoffeeInfoContext";
import { useContext, useEffect, useState } from "react";
import { MethodPayments } from "../Checkout";

function paymentMethod(value: MethodPayments) {
  switch (value) {
    case "cash":
      return "Dinheiro";
    case "creditCard":
      return "Cartão de Crédito";
    case "debtCard":
      return "Cartão de Débito";
    default:
      return "Dinheiro";
  }
}

export function Success() {
  const { checkoutInfos } = useContext(CoffeeContext);
  const [showDeliveryInfos, setShowDeliveryInfos] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(checkoutInfos).length === 0) {
      setShowDeliveryInfos(false);
    }
  }, [checkoutInfos]);

  return (
    <DefaultContainer>
      {showDeliveryInfos ? (
        <>
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
                    Entrega em{" "}
                    <span>
                      {checkoutInfos.street}, {checkoutInfos.numberHouse}{" "}
                      {checkoutInfos?.complement}
                    </span>
                  </p>
                  <p>
                    {checkoutInfos.district} - {checkoutInfos.city},{" "}
                    {checkoutInfos.uf}
                  </p>
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
                  <span>{paymentMethod(checkoutInfos.paymentMethod)}</span>
                </div>
              </OrderInfo>
            </SuccessMainContent>
            <img src={imgSuccess} alt="" />
          </SuccessContainer>
        </>
      ) : (
        <EmptyContainer>
          <SuccessTitle>
            <h1>Ops!! Faça um pedido</h1>
            <p>As informações do seu pedido ficarão nessa página</p>
          </SuccessTitle>
          <img src={imgEmptyShoppingCar} alt="" />
        </EmptyContainer>
      )}
    </DefaultContainer>
  );
}
