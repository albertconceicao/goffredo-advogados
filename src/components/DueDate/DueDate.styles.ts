import styled from 'styled-components';

export const Container = styled.div`
background: url('due-bg.png') right no-repeat, #fff;
min-height: 643px;
`;
export const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media (max-width: 1024px) {
    justify-content: space-between;
    gap: 20px;
}
> div:first-child {
    max-width: 540px;
    h1 {
        color: #806D61;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 111.5%;
        margin-bottom: 30px;
        span {
            color: #000;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: 111.5%; /* 35.68px */
    
            strong {
                color: #806D61;
            }
        }
        
    }
    p {
        color: #000;
        font-size: 24px;
        font-style: normal;
        line-height: 111.5%;

        strong {
            font-weight: 700;
        }
        margin-bottom: 30px;
        
    }

    button {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
    }

    @media (max-width: 1024px) {
        h1, p {
            font-size: 20px;
        }
    }
}
`;
