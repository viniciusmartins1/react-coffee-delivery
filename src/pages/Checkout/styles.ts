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

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    list-style: none;
    padding: 16px;
    font-size: 12px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme["gray-400"]};
    color: ${({ theme }) => theme["gray-700"]};
    border-radius: 6px;
    width: 188.67px;

    svg {
      color: ${({ theme }) => theme["purple-500"]};
    }
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
  align-items: center;
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
  align-items: center;

  span {
    font-size: 12px;
    line-height: 19.2px;
    text-transform: uppercase;
  }
`;

export const PriceItem = styled.p`
  font-size: 16px;
  line-height: 20.8px;
  text-align: right;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-700"]};
`;
