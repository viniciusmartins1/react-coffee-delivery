import styled from "styled-components";
import { DefaultContainer } from "../Home/styles";
import { BACKGROUND_COLOR } from "../Home/styles";

export const SuccessTitle = styled.div`
  margin: 72px 0 0 0;
  h1 {
    font-size: 32px;
    font-family: "Baloo 2";
    font-weight: 800;
    line-height: 41.6px;
    color: ${({ theme }) => theme["yellow-700"]};
  }

  p {
    font-size: 20px;
    font-weight: normal;
    line-height: 26px;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;

export const SuccessContainer = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
`;

export const SuccessMainContent = styled.article`
  width: 526px;
  margin: 40px 0 0 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme["gray-700"]};
  font-size: 16px;
  line-height: 20.8px;

  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;

`;
interface OrderInfoProps {
  backgroundColorIcon: keyof typeof BACKGROUND_COLOR;
}

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.backgroundColorIcon]]};
    color: ${({ theme }) => theme["white"]};
    padding: 8px;
    box-sizing: content-box;
    border-radius: 50%;
  }

  span {
    font-weight: 700;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  
`
