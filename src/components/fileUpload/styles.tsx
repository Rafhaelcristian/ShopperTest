import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  margin: 50px 50px 20px 50px;
  input {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
`;
