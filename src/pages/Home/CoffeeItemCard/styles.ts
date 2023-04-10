import styled from "styled-components";

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
    user-select: none;
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
    user-select: none;
  }

  div svg {
    color: ${({ theme }) => theme["purple-500"]};
    cursor: pointer;
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
