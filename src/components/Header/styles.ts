import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 33px 0;

  a:focus {
    box-shadow: none;
  }
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
  position: relative;
  a {
    display: block;
    align-self: center;
    padding: 8px 8px;
    border-radius: 6px;
    position: relative;

    color: ${({ theme }) => theme["yellow-700"]};
    background-color: ${({ theme }) => theme["yellow-100"]};
    transition: 0.4s all ease;

    &:hover {
      color: ${({ theme }) => theme["white"]};
      background-color: ${({ theme }) => theme["yellow-500"]};
    }
  }

  span {
    color: ${({ theme }) => theme["gray-100"]};
    background-color: ${({ theme }) => theme["yellow-700"]};
    border-radius: 50%;
    padding: 4px 9px;
    font-weight: bold;

    position: absolute;
    top: -14px;
    right: -12px;
    user-select: none;
  }
`;
