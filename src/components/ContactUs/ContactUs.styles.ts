import styled from 'styled-components';

export const Container = styled.div`
background: url('./contact-bg.png') no-repeat center;
min-height: 561px;
background-size: cover;
`;

export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 147px;

@media (max-width: 1024px) {
    gap: 90px
}

@media (max-width: 992px) {
    gap: 40px;
    flex-direction: column;
}
iframe {
    max-width: 450px;
    max-height: 461px;
    border-radius: 14px;

    @media (max-width:1024px) {
        max-width: 319px;
        max-height: 321px;
    }
    @media (max-width: 768px) {
        max-width: 335px;
        max-height: 337px;
    }
}
.info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 467px;
    
    .standard {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a:hover {
        text-decoration: underline;
    }  
    
    @media (max-width: 1024px) {
        a {
            padding: 10px 20px;
        }
    }
}
.button-mobile {
    display: none;
}
@media (max-width: 768px) {
    .button-mobile {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
    }
    .button-web {
        display: none !important;
    }
}
`;