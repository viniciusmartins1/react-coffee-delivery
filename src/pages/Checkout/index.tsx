import {
  MapPinLine,
  Money,
  CreditCard,
  Bank,
  CurrencyDollar,
  Plus,
  Minus,
  Trash,
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
  CoffeesInfos,
  SelectedCoffeItem,
  AddAndRemoveItems,
  RemoveItems,
  DetailsItems,
  PriceItem,
  PricesContent,
  TotalPrice,
  TotalPriceItems,
  Divider,
  ButtonConfirm,
  PaymentsMethodsItem,
} from "./styles";

import coffeeItemImage from "../../assets/coffeeItemCards/coffee01.png";

export function Checkout() {
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
              <InputForm type="number" placeholder="Numero" />
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
            <PaymentsMethodsItem>
              <button type="button">
                <CreditCard size={25} weight="regular" />
                <p>Cartão de crédito</p>
              </button>
            </PaymentsMethodsItem>
            <PaymentsMethodsItem>
              <button type="button">
                <Bank size={25} weight="regular" />
                <p>Cartão de débito</p>
              </button>
            </PaymentsMethodsItem>
            <PaymentsMethodsItem>
              <button type="button">
                <Money size={25} weight="regular" />
                <p>Dinheiro</p>
              </button>
            </PaymentsMethodsItem>
          </PaymentsMethods>
        </FormContent>
      </SectionForm>
      <section>
        <TitleSection>Cafés selecionados</TitleSection>
        <SelectedCoffees>
          <SelectedCoffeItem>
            <img src={coffeeItemImage} alt="" />
            <CoffeesInfos>
              <p>Expresso Tradicional</p>
              <DetailsItems>
                <AddAndRemoveItems>
                  <Minus size={16} weight="bold" />
                  <span>1</span>
                  <Plus size={16} weight="bold" />
                </AddAndRemoveItems>
                <RemoveItems>
                  <Trash size={16} weight="regular" />
                  <span>Remover</span>
                </RemoveItems>
              </DetailsItems>
            </CoffeesInfos>
            <PriceItem>R$ 9,90</PriceItem>
          </SelectedCoffeItem>
          <Divider />
          <SelectedCoffeItem>
            <img src={coffeeItemImage} alt="" />
            <CoffeesInfos>
              <p>Expresso Tradicional</p>
              <DetailsItems>
                <AddAndRemoveItems>
                  <Minus size={16} weight="bold" />
                  <span>1</span>
                  <Plus size={16} weight="bold" />
                </AddAndRemoveItems>
                <RemoveItems>
                  <Trash size={16} weight="regular" />
                  <span>Remover</span>
                </RemoveItems>
              </DetailsItems>
            </CoffeesInfos>
            <PriceItem>R$ 9,90</PriceItem>
          </SelectedCoffeItem>
          <Divider />
          <PricesContent>
            <TotalPriceItems>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </TotalPriceItems>
            <TotalPriceItems>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </TotalPriceItems>
            <TotalPrice>
              <p>Total</p>
              <span>R$ 33,20</span>
            </TotalPrice>
          </PricesContent>
          <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
        </SelectedCoffees>
      </section>
    </CheckoutContainer>
  );
}
