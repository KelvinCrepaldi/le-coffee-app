import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    padding-top: 5vh;

    background-color: #504A59;

    .topContent{
        height: 25vh;
        text-align: center;
    }

    .formContent{
        width: 90%;
        height: 70vh;
        padding: 16px 0;
        text-align: center;

        background-color: #f5f5f5;
        border-radius: 20px 20px 0 0;

        h1{
            font-size: 26px;
            color: #401309;
        }
    }
`;