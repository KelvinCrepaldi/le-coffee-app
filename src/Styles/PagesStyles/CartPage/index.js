import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 100vh;

  .navBar{
      display: flex;
      align-items: center;
      height: 72px;
      width: 100vw;
      margin-bottom: 20px;
      background-color: var(--brown-xlight);
  }
  .card {
    height: 200px;
    width: 94vw;
    margin-bottom: 26px;
    border: 1px solid var(--brown-light);
    border-radius: 15px;

    button {
      position: absolute;

      height: 45px;
      width: 170px;
      margin: 40px 0 0 64px;
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

  @media(min-width: 768px){
      .content{
          display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 96vw;
        .card{
            width: 35vw;
            button{
                margin-left: 50px;
            }
        }
        .card--address{
            margin-bottom: 100px;
        }
      }
  }
  @media(min-width: 1024px){
      .content{
          display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 96vw;
        .card{
            width: 380px;
            button{
                margin-left: 50px;
            }
        }
        .card--address{
            margin-bottom: 100px;
        }
      }
  }
`;

export const CartContainer = styled.section`
  min-height: 660px;
  width: 94vw;
  margin-bottom: 26px;
  border: 1px solid var(--brown-light);
  border-radius: 15px;
  @media(min-width: 768px){
    min-height: 500px;
    width: 50vw;
  }
  @media(min-width: 1024px){
    min-height: 500px;
    width: 60vw;
  }

`;

export const CardTop = styled.section`
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

// export const SideCards = styled.div`
//     media
// `;
