import styled from "styled-components";

export const FormGridStyle = styled.div`
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
    position: relative;
  }
`;

interface InputFormProps {
  flex1?: boolean;
  widthInput?: number;
  invalidInput: boolean;
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
  box-shadow: 0 0 0 2px
    ${(props) => (props.invalidInput ? props.theme["red-500"] : "#00")};

  &:not(:disabled):hover {
    cursor: text;
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.invalidInput
          ? props.theme["red-500"]
          : props.theme["purple-500"]};
  }
`;

export const OptionalInput = styled.span`
  position: absolute;
  right: 10px;
  top: 16px;
  font-style: italic;
  font-size: 12px;
  color: ${({ theme }) => theme["gray-600"]};
  line-height: 15.6px;
`;
