import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;
 
#close {
  color: red;
  width: 100px;
}
  .navBar {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100vw;
    margin-bottom: 20px;
    background-color: var(--brown-dark);
  }
  .card {
    height: 200px;
    width: 94vw;
    margin-bottom: 26px;
    border: 1px solid var(--brown-light);
    border-radius: 15px;
    text-align: center;
    button {
      height: 45px;
      width: 170px;
      margin-top: 40px;
    }
  }
  .chosenAddress {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    font-size: var(--font-size-large);
    margin: 25px auto 0;
  }
  @media (min-width: 768px) {
    .content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 96vw;
      .card {
        width: 35vw;
      }
      .card--address {
        margin-bottom: 100px;
      }
    }
  }
  @media (min-width: 1024px) {
    .content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 96vw;
      .card {
        width: 380px;
      }
      .card--address {
        margin-bottom: 100px;
      }
    }
  }
`;

export const CartContainer = styled.section`
  height: 600px;
  width: 94vw;
  margin-bottom: 26px;
  border: 1px solid var(--brown-light);
  border-radius: 15px;

  .listContainer {
    display: flex;
    overflow: hidden;
    overflow-y: scroll;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 88%;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 500px;
    width: 50vw;
  }
  @media (min-width: 1024px) {
    height: 500px;
    width: 60vw;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 45px;
  padding: 0 20px;

  background-color: var(--brown-light);
  color: var(--white-primary);
  border-radius: 12px 12px 0 0;

  .total {
    font-weight: var(--font-w-bold);
  }
`;

export const FormModal = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    width: 100%;
  }
  input {
    width: 100%;
  }
 
  h2 {
    margin: 20px;
    color: var(--gray-primary)
  }
  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: #636e72
  }
  button{
    width: 100%;
    border-radius: 0px;
    padding: 20px;
    color:#61db61;
    margin-top: 20px;

    :hover{
      opacity: 0.8;
    }
  }


`

export const OrderSuccess = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;


  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;

    text-align: center;
    color: var(--gray-primary);
    flex-wrap: wrap;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    margin-top: 50px;
    width: 69%;
    p{
      color: var(--gray-primary);
    }
    svg {
      font-size: 96px;
      color:#61db61;;
      margin: 40px;
    }
  }
`