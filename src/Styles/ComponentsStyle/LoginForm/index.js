import styled from "styled-components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  line-height: 40px;
  margin-top: 36px;
  .bttnContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    width: 80%;
    max-width: 340px;
    margin-top: 60px;

    .bttnLogin {
      height: 50px;
      width: 78%;

      background-color: #aa6655;
      color: #fbfbfb;
      border: none;
      border-radius: 17px;
      margin-bottom: 20px;
    }

    .bttnRegister {
      height: 40px;
      width: 78%;

      background-color: #ffffff;
      color: #808080;
      border: none;
      border-radius: 17px;
    }
  }
`;
