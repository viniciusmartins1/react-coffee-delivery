import { DefaultContainer } from "../Home/styles";
import imgSuccess from "../../assets/Illustration.png";

export function Success() {
  return (
    <DefaultContainer>
      <div>
        <article>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </article>
        <article>
          <div>
            <span>icon</span>
            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <span>icon</span>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div>
            <span>icon</span>
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </article>
      </div>
      <img src={imgSuccess} alt="" />
    </DefaultContainer>
  );
}
