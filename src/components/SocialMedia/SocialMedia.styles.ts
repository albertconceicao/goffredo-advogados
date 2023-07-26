import styled from 'styled-components';

export const Container = styled.div`

`;
export const SocialContent = styled.div`
background: #fff;
min-height: 415px;
`;
export const Content = styled.div`
@media (min-width: 768px) {
    padding: 0 111px 32px !important;
}
section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;

    @media (max-width: 768px) {
        gap: 7px;
    }

img {
    max-width: 404px;
    
    @media (max-width: 768px) {
        max-width: 138px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        max-width: 350px;
        margin-top: -39px;
    }
    @media (min-width: 1024px) {
        margin-top: -69px;
    }
}
h1 {
    color: #333;
    font-weight: 700;
    line-height: 111.5%; 
}
p {
    font-size: 24px;
    color: #333;
    font-style: normal;
    line-height: 111.5%;
    max-width: 638px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
}
}

div {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 32px;

    @media (max-width:768px) {
        gap: 16px;
    }
    @media (min-width: 768px) and (max-width: 1050px) {
        p {
            font-size: 20px;
        }
    }
    @media (min-width:768px) {
        align-self: flex-end;
        margin-bottom: 20px;
    }
    @media (min-width:1149px) {
        align-self: flex-end;
        margin-bottom: 60px;
    }
}
.button-web {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width:768px) {
    .button-web {
        display: none;
    }
    .button-mobile {
        min-width: 338px;
    }
}
.button-mobile a{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 20px;
    }
    @media (min-width: 768px) {
        display: none;
    }
}
`;