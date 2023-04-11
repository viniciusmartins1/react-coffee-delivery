import {
  MapPinLine,
  Money,
  CreditCard,
  Bank,
  CurrencyDollar,
} from "phosphor-react";
import {
  CheckoutContainer,
  SectionForm,
  TitleSection,
  DeliveryInfo,
  FormContent,
  PaymentsMethods,
  FormGridStyle,
  InputForm,
  SelectedCoffees,
  PricesContent,
  TotalPrice,
  TotalPriceItems,
  ButtonConfirm,
  PaymentsMethodsItem,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeInfoContext";
import { SelectedCoffeeItem } from "./SelectedCoffeeItem";
import { useAsyncError, useNavigate } from "react-router-dom";

type MethodPayments = "creditCard" | "debtCard" | "cash";

const DELIVERY_PRICE = 3.5;

function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

export function Checkout() {
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [paymentMethodActive, setPaymentMethodActive] =
    useState<MethodPayments>("debtCard");

  const { selectedCoffees } = useContext(CoffeeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCoffees.length > 0) {
      const totalPrice = selectedCoffees.reduce<number>(
        (sum: number, itemCoffee) =>
          sum + itemCoffee.valueRental * itemCoffee.quantity,
        0
      );

      setTotalItemsPrice(totalPrice);
    }
  }, [selectedCoffees]);

  return (
    <CheckoutContainer>
      <SectionForm>
        <TitleSection>Complete seu pedido</TitleSection>
        <FormContent>
          <DeliveryInfo iconColor="yellowDark">
            <MapPinLine size={22} weight="regular" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </DeliveryInfo>
          <FormGridStyle action="">
            <InputForm widthInput={195} type="text" placeholder="CEP" />
            <InputForm type="text" placeholder="Rua" />
            <div>
              <InputForm type="text" placeholder="Numero" />
              <InputForm flex1 type="text" placeholder="Complemento" />
            </div>
            <div>
              <InputForm type="text" placeholder="Bairro" />
              <InputForm flex1 type="text" placeholder="Cidade" />
              <InputForm widthInput={60} type="text" placeholder="UF" />
            </div>
          </FormGridStyle>
        </FormContent>
        <FormContent>
          <DeliveryInfo iconColor="purple">
            <CurrencyDollar size={25} weight="regular" />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </DeliveryInfo>
          <PaymentsMethods>
            <PaymentsMethodsItem
              activeItem={paymentMethodActive === "creditCard"}
            >
              <button
                type="button"
                onClick={() => setPaymentMethodActive("creditCard")}
              >
                <CreditCard size={25} weight="regular" />
                <p>Cartão de crédito</p>
              </button>
            </PaymentsMethodsItem>
            <PaymentsMethodsItem
              activeItem={paymentMethodActive === "debtCard"}
            >
              <button
                type="button"
                onClick={() => setPaymentMethodActive("debtCard")}
              >
                <Bank size={25} weight="regular" />
                <p>Cartão de débito</p>
              </button>
            </PaymentsMethodsItem>
            <PaymentsMethodsItem activeItem={paymentMethodActive === "cash"}>
              <button
                type="button"
                onClick={() => setPaymentMethodActive("cash")}
              >
                <Money size={25} weight="regular" />
                <p>Dinheiro</p>
              </button>
            </PaymentsMethodsItem>
          </PaymentsMethods>
        </FormContent>
      </SectionForm>
      {selectedCoffees.length > 0 && (
        <section>
          <TitleSection>Cafés selecionados</TitleSection>
          <SelectedCoffees>
            {selectedCoffees.map((item) => (
              <SelectedCoffeeItem key={item.id} item={item} />
            ))}
            <PricesContent>
              <TotalPriceItems>
                <p>Total de itens</p>
                <span>R$ {formatPrice(totalItemsPrice)}</span>
              </TotalPriceItems>
              <TotalPriceItems>
                <p>Entrega</p>
                <span>R$ {formatPrice(DELIVERY_PRICE)}</span>
              </TotalPriceItems>
              <TotalPrice>
                <p>Total</p>
                <span>R$ {formatPrice(totalItemsPrice + DELIVERY_PRICE)}</span>
              </TotalPrice>
            </PricesContent>
            <ButtonConfirm disabled onClick={() => navigate("/success")}>
              Confirmar Pedido
            </ButtonConfirm>
          </SelectedCoffees>
        </section>
      )}
    </CheckoutContainer>
  );
}
