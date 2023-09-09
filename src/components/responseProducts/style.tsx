import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 20px 50px;
  .alert {
    padding: 30px 0;
    color: red;
    font-weight: 500;
  }
  h1 {
    font-size: 24px;
    color: #333;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border: 1px solid #ccc;
      margin: 10px 0;
      padding: 10px;
      background-color: #f5f5f5;
      height: 160px;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
      }
      .error_message {
        color: red;
      }
    }
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
