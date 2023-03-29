import styled from "styled-components";
import { DefaultContainer } from "../Home/styles";

export const CheckoutContainer = styled(DefaultContainer)`
  display: flex;
  gap: 32px;
  margin-top: 40px;
`;

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 100px;
`;

export const FormContent = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme["gray-200"]};
  border-radius: 8px;
`;

export const TitleSection = styled.h2`
  font-size: 18px;
  font-family: "Baloo 2";
  line-height: 23.4px;
  color: ${({ theme }) => theme["gray-800"]};
`;

export const BACKGROUND_COLOR = {
  yellowDark: "yellow-700",
  yellow: "yellow-500",
  purple: "purple-500",
  gray: "gray-700",
} as const;

interface DeliveryInfoProps {
  iconColor: keyof typeof BACKGROUND_COLOR;
}

export const DeliveryInfo = styled.div<DeliveryInfoProps>`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    color: ${(props) => props.theme[BACKGROUND_COLOR[props.iconColor]]};
  }

  p {
    color: ${({ theme }) => theme["gray-800"]};
    font-size: 16px;
    line-height: 20.8px;
  }

  p + p {
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const PaymentsMethods = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 12px;
`;

interface PaymentsMethodsItem {
  activeItem?: boolean;
}

export const PaymentsMethodsItem = styled.li<PaymentsMethodsItem>`
  list-style: none;

  button {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    text-decoration: none;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme["gray-700"]};
    border-radius: 6px;
    width: 188.67px;
    border: 1px solid transparent;

    background-color: ${({ theme, activeItem }) =>
      !activeItem ? theme["gray-400"] : theme["purple-100"]};

    svg {
      color: ${({ theme }) => theme["purple-500"]};
    }
  }

  button:focus {
    border: 1px solid transparent;
  }
`;

export const FormGridStyle = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    border-radius: 4px;
    padding: 12px;
    background-color: ${({ theme }) => theme["gray-300"]};
    border: 1px solid;
    border-color: ${({ theme }) => theme["gray-400"]};
    font-size: 14px;
    line-height: 18px;
  }

  div {
    display: flex;
    gap: 16px;
    width: 100%;
  }
`;

interface InputFormProps {
  flex1?: boolean;
  widthInput?: number;
}

export const InputForm = styled.input<InputFormProps>`
  border-radius: 4px;
  padding: 12px;
  background-color: ${({ theme }) => theme["gray-300"]};
  border: 1px solid;
  border-color: ${({ theme }) => theme["gray-400"]};
  font-size: 14px;
  line-height: 18px;
  flex: ${(props) => (props.flex1 ? 1 : 0)};
  width: ${(props) => (props.widthInput ? props.widthInput + "px" : "auto")};
`;

export const SelectedCoffees = styled.section`
  margin-top: 12px;
  padding: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["gray-200"]};
`;

export const SelectedCoffeItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  img {
    width: 64px;
    align-self: center;
  }
`;

export const CoffeesInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  svg {
    color: ${({ theme }) => theme["purple-700"]};
  }

  p {
    font-size: 16px;
    line-height: 20.8px;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;

export const AddAndRemoveItems = styled.div`
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 6px;
  font-size: 16px;
  padding: 6px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  span {
    color: ${({ theme }) => theme["gray-900"]};
    font-size: 16px;
    line-height: 20.8px;
  }
`;

export const DetailsItems = styled.div`
  display: flex;
  gap: 8px;
`;

export const RemoveItems = styled.div`
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 6px;
  font-size: 16px;
  padding: 6px;
  display: flex;
  gap: 4px;
  align-items: flex-start;

  span {
    font-size: 12px;
    line-height: 19.2px;
    text-transform: uppercase;
  }
`;

export const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme["gray-400"]};
`;

export const PriceItem = styled.p`
  font-size: 16px;
  line-height: 20.8px;
  text-align: right;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-700"]};
`;

export const PricesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme["gray-700"]};

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalPriceItems = styled.div`
  p {
    font-size: 14px;
    line-height: 18.2px;
  }

  span {
    font-size: 16px;
    line-height: 20.8px;
  }
`;

export const TotalPrice = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-800"]};
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["yellow-500"]};
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  line-height: 22.4px;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-700"]};
  }
`;
