import styled from "styled-components";
import { DefaultContainer } from "../Home/styles";

export const CheckoutContainer = styled(DefaultContainer)`
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
    cursor: pointer;

    background-color: ${({ theme, activeItem }) =>
      !activeItem ? theme["gray-400"] : theme["purple-100"]};
    border-color: ${({ theme, activeItem }) =>
      activeItem ? theme["purple-500"] : theme["gray-400"]};

    svg {
      color: ${({ theme }) => theme["purple-500"]};
    }
  }

  button:focus {
    box-shadow: none;
  }
`;

export const SelectedCoffees = styled.section`
  margin-top: 12px;
  padding: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["gray-200"]};
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

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["yellow-700"]};
  }

  &:focus {
    box-shadow: none;
  }
`;

export const EmptyCarImage = styled.img`
  align-self: flex-start;
  margin-top: 30px;
  width: 35%;
`;
