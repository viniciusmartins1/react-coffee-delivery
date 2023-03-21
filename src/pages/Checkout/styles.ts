import styled from "styled-components";
import { DefaultContainer } from "../Home/styles";

export const CheckoutContainer = styled(DefaultContainer)`
  display: flex;
  gap: 32px;
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
