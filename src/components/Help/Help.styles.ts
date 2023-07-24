import styled from 'styled-components';

export const Container = styled.div`
background: url('./help.png');
min-height: 839px;
background-size: cover;
`;
export const Content = styled.div`
color: #2c2c2c;

.title {
margin-bottom: 32px;
display: flex;
flex-direction: column;
gap: 20px;
    h1{
        text-align: center;
    }
    p {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 111.5%; /* 26.76px */
        max-width: 576px;
        margin: 0 auto;
    }

}
section {
    display: flex;
    justify-content: center;
    margin: 0 auto 30px;
    gap: 25px;

    > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        flex: 1;
        min-height: 126px;
        min-width: 322px;
        max-width: 434px;
        border-radius: 10px;
        border: 1px solid rgba(44, 44, 44, 0.17);
        padding: 54px 67px;
        gap: 30px;
        p {
            font-size: 18px;
            text-align: left;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        > div {
            max-width: 100%;
        }
        p {
            font-size: 16px;
        }
    }
}
`;
