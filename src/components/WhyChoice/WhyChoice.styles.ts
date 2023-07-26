import styled from 'styled-components';

export const Container = styled.div`
margin-top: -24px;
background: url('./choice-bg.png') no-repeat right center, #2c2c2c;
min-height: 583px;
@media (max-width: 768px) {
    background: url('./choice-bg.png') no-repeat right bottom, #2c2c2c;
}
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 116px;

h1 {
    text-align: center;
    strong {
        color: #E0623F;
    }

    @media (max-width: 768px) {
        max-width: 173px !important;
    }
    @media (max-width: 1024px) {
        max-width: 225px;
    }
}

.choice-content {
    /* display: flex;
    justify-content: space-around; */
    .choice-flex {
        display: flex;
        justify-content: space-between;
        gap:80px;
        margin-bottom: 80px;

        > div {
            display: flex;
            align-items: center;
            flex: 1;
            gap: 30px;
            p {
                max-width: 303px;
            }
        }
        img {
            max-width: 60px;
            max-height: 80px;
        }
        @media (max-width: 768px) {
            img {
                max-width: 40px;
                max-height: 60px;
             }
            flex-direction: column;

            p {
                max-width: 100%;
            }
        }
    }
}
`;
