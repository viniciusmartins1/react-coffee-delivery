import styled from "styled-components";
import backgroundHome from "../../assets/background-home.png";

export const HomeBody = styled.div`
  background-image: url(${backgroundHome});
  background-position: center;
  background-size: cover;
`;
export const DefaultContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;

  padding: 92px 0;

  article {
    width: 688px;
  }

  h1 {
    color: ${({ theme }) => theme["gray-900"]};
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 48px;
    font-style: normal;
    line-height: 130%;
  }

  h1 + p {
    margin: 16px 0 66px 0;
    color: ${({ theme }) => theme["gray-800"]};
    font-size: 20px;
  }
`;

export const ContentCoffee = styled.div`
  display: flex;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  flex-direction: row;
`;

const BACKGROUND_COLOR = {
  yellowDark: "yellow-700",
  yellow: "yellow-500",
  purple: "purple-500",
  gray: "gray-700",
} as const;

interface ItemProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR;
}

export const ItemStyle = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  width: 256px;

  p {
    font-size: 1rem;
  }

  svg {
    color: ${({ theme }) => theme["gray-100"]};
    background-color: ${(props) =>
      props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
    padding: 8px 8px;
    box-sizing: content-box;
    border-radius: 50%;
  }
`;

export const ItemLeftStyle = styled(ItemStyle)`
  width: 300px;
`;

export const TitleList = styled.h2`
  margin-top: 32px;
  font-family: "Baloo 2";
  font-size: 32px;
  line-height: 41.6px;
  color: ${({ theme }) => theme["gray-800"]};
`;
export const CoffeeListContent = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 64px;
`;
