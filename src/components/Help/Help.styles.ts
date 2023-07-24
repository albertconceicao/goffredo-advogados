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
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 111.5%;
        span {
            color: #E0623F;

        }
    }
    p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 111.5%; /* 26.76px */
        max-width: 482px;
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
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        flex: 1;
        min-height: 126px;
        min-width: 322px;
        max-width: 434px;
        border-radius: 10px;
        border: 1px solid rgba(44, 44, 44, 0.17);
        padding: 54px 30px;
        gap: 12px;
        p {
            font-size: 18px;
            text-align: left;
        }
    }
}
@media (max-width: 768px) {
    .title {
        align-items: center;
        h1 {
            font-size: 20px;
            max-width: 156px;
            text-align: center;
        }
        p {
            display: none;
        }
    }
    section {

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
