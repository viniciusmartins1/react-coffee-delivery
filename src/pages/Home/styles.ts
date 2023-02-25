import styled from "styled-components";
import backgroundHome from "../../assets/background-home.png";

export const HomeBody = styled.div`
  background-image: url(${backgroundHome});
  background-position: bottom;
  background-size: contain;
`;
export const HomeContainer = styled.div`
  max-width: 1220px;
  height: 100vh;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 33px 0;
`;

export const ActionsConteiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  border-radius: 6px;
  gap: 4px;

  color: ${({ theme }) => theme["purple-500"]};
  background-color: ${({ theme }) => theme["purple-100"]};

  p {
    color: ${({ theme }) => theme["purple-700"]};
  }
`;

export const ShoppingCartContainer = styled.div`
  align-self: center;
  padding: 8px 8px;
  border-radius: 6px;
  position: relative;

  color: ${({ theme }) => theme["yellow-700"]};
  background-color: ${({ theme }) => theme["yellow-100"]};

  span {
    color: ${({ theme }) => theme["gray-100"]};
    background-color: ${({ theme }) => theme["yellow-700"]};
    border-radius: 50%;
    padding: 4px 9px;
    font-weight: bold;

    position: absolute;
    top: -14px;
    right: -12px;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 92px 0;

  article {
    width: 588px;
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
