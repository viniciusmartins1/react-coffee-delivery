import styled from "styled-components";

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

  svg {
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme["gray-900"]};
    font-size: 16px;
    line-height: 20.8px;
    user-select: none;
  }
`;

export const DetailsItems = styled.div`
  display: flex;
  gap: 8px;
`;

export const RemoveItems = styled.button`
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 6px;
  font-size: 16px;
  padding: 6px;
  display: flex;
  gap: 4px;
  align-items: flex-start;
  box-shadow: none;
  border: none;
  cursor: pointer;

  span {
    font-size: 12px;
    line-height: 19.2px;
    text-transform: uppercase;
    user-select: none;
    color: ${({ theme }) => theme["gray-700"]};
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
  user-select: none;
`;
