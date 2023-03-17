import { MapPinLine, Money, CreditCard, Bank } from "phosphor-react";
import {
  CheckoutContainer,
  SectionForm,
  TitleSection,
  DeliveryInfo,
  FormContent,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <SectionForm>
        <TitleSection>Complete seu pedido</TitleSection>
        <FormContent>
          <DeliveryInfo>
            <MapPinLine size={22} weight="bold" />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </DeliveryInfo>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Numero" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </FormContent>
        <div>
          <div>
            <Bank size={25} weight="bold" />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ul>
            <li>
              <Bank size={25} weight="bold" />
              <p>Cartão de crédito</p>
            </li>
            <li>
              <Bank size={25} weight="bold" />
              <p>Cartão de débito</p>
            </li>
            <li>
              <Bank size={25} weight="bold" />
              <p>Dinheiro</p>
            </li>
          </ul>
        </div>
      </SectionForm>
      <section>
        <TitleSection>Cafés selecionados</TitleSection>
        <div>
          <img src="" alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <div>
                <Bank size={25} weight="bold" />
                <p>1</p>
                <Bank size={25} weight="bold" />
              </div>
              <div>
                <Bank size={25} weight="bold" />
                <p>Remover</p>
              </div>
            </div>
          </div>
          <p>R$ 9,90</p>
        </div>
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
      </section>
    </CheckoutContainer>
  );
}
