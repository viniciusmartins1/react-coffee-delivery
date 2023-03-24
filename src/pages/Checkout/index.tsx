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
            <li>
              <CreditCard size={25} weight="regular" />
              <p>Cartão de crédito</p>
            </li>
            <li>
              <Bank size={25} weight="regular" />
              <p>Cartão de débito</p>
            </li>
            <li>
              <Money size={25} weight="regular" />
              <p>Dinheiro</p>
            </li>
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
                  <Minus size={14} weight="bold" />
                  <span>1</span>
                  <Plus size={14} weight="bold" />
                </AddAndRemoveItems>
                <RemoveItems>
                  <Trash size={14} weight="regular" />
                  <span>Remover</span>
                </RemoveItems>
              </DetailsItems>
            </CoffeesInfos>
            <PriceItem>R$ 9,90</PriceItem>
          </SelectedCoffeItem>
          <div>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <p>Total</p>
            </div>
            <div>
              <p>R$ 29,70</p>
              <p>R$ 3,50</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button>Confirmar Pedido</button>
        </SelectedCoffees>
      </section>
    </CheckoutContainer>
  );
}
