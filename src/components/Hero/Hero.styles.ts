import styled from 'styled-components';

export const Container = styled.section`
    background: url('./hero.png') no-repeat center;
    background-size: cover;
    min-height: 769px;

    @media (max-width: 1024px) {
        background: url('./hero-tablet.png') no-repeat center top;
        min-height: 547px;
        background-size: cover;
    }
    @media (max-width: 768px) {
        background: url('./hero-mobile.png') no-repeat center top;
        min-height: 672px;
        background-size: cover;
    }
`;

export const Content = styled.div`
    .logo {

    }
    .hero-content {
        display: flex;
        align-items: flex-start;
        .hero-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            max-width: 720px;
            @media (min-width: 768px) and (max-width: 1024px) {
                max-width: 403px;
                }

            div > span:first-child  {
                font-size: 48px;
                font-style: normal;
                font-weight: 700;
                line-height: 111.5%;

                @media (max-width: 1024px) {
                    font-size: 30px;
                }
            }
        
            strong {
               color: #E0623F;
            }
            p {
               font-size: 30px;
               font-style: normal;
               font-weight: 400;
               line-height: 111.5%; /* 33.45px */
               max-width: 695px;
               @media (max-width: 1024px) {
                    font-size: 24px;
                }
            }
            button {
                min-width: 488px;
                display: flex;
                justify-content: space-between;
                gap:10px;
                align-items: center;

                span {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 800;
                    line-height: 111.5%; 
                }
                img {
                    width: 20px;
                    height: 20px;
                }
            }

        }
        .hero-client {
            
            position: relative;
            right: 194px;
            top: -58px;
            img {
                max-width: 803px;
                max-height: 656px;
            }
        }
        
    }

    @media (max-width: 1024px) {
        .logo {
            max-height: 56px;
        }
        .hero-text div > span:first-child {
            font-size: 30px;
        }
        .hero-text p {
            font-size: 24px;
        }
    }
    @media (max-width: 768px) {
        
        .hero-text {
            @media (min-width: 533px) and (max-width:768px) {
                margin-top: 71%;
            }
           
            margin-top: 300px;
            div > span:first-child {
                max-width: 341px !important;
                font-size: 28px;
            }
            button {
                justify-content: center !important;
                min-width: 338px !important;
            }
        }
        .hero-text p {
            font-size: 20px;
        }
    }
 
`;
