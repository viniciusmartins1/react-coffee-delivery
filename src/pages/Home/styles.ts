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
  padding-bottom: 78px;
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

export const CoffeeItemContent = styled.div`
  background-color: ${({ theme }) => theme["gray-200"]};
  border-radius: 8px 36px;
  width: 256px;
  text-align: center;
  margin-bottom: 20px;

  padding: 0 20px 20px 20px;

  img {
    margin-top: -30px;
    margin-bottom: 10px;
  }
`;

export const CoffeeItemTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  span {
    background-color: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-700"]};
    /* margin: 10px 0 16px 0; */

    border-radius: 20px;

    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    line-height: 13px;
  }
`;

export const CoffeeItemTitle = styled.p`
  color: ${({ theme }) => theme["gray-800"]};

  font-family: "Baloo 2";
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  margin-top: 16px;
`;

export const CoffeeItemDescription = styled.p`
  color: ${({ theme }) => theme["gray-600"]};

  font-size: 14px;
  line-height: 18.2px;
  margin-top: 8px;
`;

export const CoffeeItemBuy = styled.div`
  margin-top: 34px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  p {
    /* justify-self: flex-start; */
    flex: 1;
    color: ${({ theme }) => theme["gray-700"]};

    font-family: "Baloo 2";
    font-size: 24px;
    line-height: 31.2px;
    text-align: left;
    font-weight: bold;
  }

  p span {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: normal;
    line-height: 18.2px;
  }

  div {
    background-color: ${({ theme }) => theme["gray-400"]};
    border-radius: 6px;
    font-size: 16px;
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  div svg {
    color: ${({ theme }) => theme["purple-500"]};
  }

  span > svg {
    display: block;
    color: ${({ theme }) => theme["white"]};
    background-color: ${({ theme }) => theme["purple-700"]};
    padding: 8px;
    border-radius: 6px;
    box-sizing: content-box;
  }
`;
