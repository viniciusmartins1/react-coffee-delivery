import { DefaultContainer } from "../Home/styles";

export function Checkout() {
  return (
    <DefaultContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <div>
          <div>
            <span>icon</span>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Numero" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </div>
        <div>
          <div>
            <span>icon</span>
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ul>
            <li>
              <span>icon</span>
              <p>Cartão de crédito</p>
            </li>
            <li>
              <span>icon</span>
              <p>Cartão de débito</p>
            </li>
            <li>
              <span>icon</span>
              <p>Dinheiro</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <div>
          <img src="" alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <div>
                <span>icon</span>
                <p>1</p>
                <span>icon</span>
              </div>
              <div>
                <span>icon</span>
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
    </DefaultContainer>
  );
}
