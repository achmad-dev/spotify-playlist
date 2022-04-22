import styled from "styled-components";
import { css } from "@emotion/css";
export const Div = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const ButtonDiv = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: rgb(36, 36, 36);
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
`;
