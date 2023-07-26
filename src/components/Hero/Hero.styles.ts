import styled from 'styled-components';

export const Container = styled.section`
    background: url('./hero-xl.png') no-repeat center;
    background-size: cover;
    min-height: 769px;

    @media (max-width: 1700px) {
        background: url('./hero.png') no-repeat center top;
        min-height: 547px;
        background-size: cover;
    }
    @media (max-width: 1024px) {
        background: url('./hero-tablet.png') no-repeat center top;
        min-height: 547px;
        background-size: cover;
    }
    @media (max-width: 768px) {
        background: url('./hero-mobile.png') no-repeat center top;
        min-height: 852px;
        background-size: cover;
    }
    @media (min-width:656px) and (max-width:768px) {
        min-height: 930px;
    }
`;

export const Content = styled.div`
    
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
            .sub-strong {
                color: #C3B8A8;
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
            a {
                min-width: 433px;
                display: flex;
                justify-content: space-around;
                gap:10px;
                align-items: center;
                cursor: pointer;

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
                @media (max-width: 768px) {
                    min-width: 330px;
                    span {
                        font-size: 18px;
                    }
                    
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
                font-size: 26px !important;
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

    @media (max-width: 768px) {
        .standard img {
            display: none;
        }
    }
 
`;
