import styled from 'styled-components';

export const Container = styled.div`
background: url('due-bg.png') right no-repeat, #fff;
min-height: 643px;

@media (max-width:768px) {
    background: #F4EEE8;
    min-height: 312px;
}
`;
export const Content = styled.div`
.web {
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
    
        a {
            display: flex;
            justify-content: space-around;
            gap: 20px;
            align-items: center;
        }
    
        @media (max-width: 1024px) {
            h1, p {
                font-size: 20px;
            }
        }
        
    }
    
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        > div:first-child {
            max-width: 347px;
        }
        img {
            max-width: 308px;
            max-height: 370px;
        }
        a {
            position: relative;
            z-index: 1;
        }
    }
}
.mobile {
    a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    .watch-left {
        width: 82px;
        height: 99px;
        position: relative;
        left: -27px;
        @media (min-width: 768px) {
            display: none;
        }
    }
    .watch-right {
        width: 45px;
        height: 55px;
        position: relative;
        right: -94%;
        top: -126px;
        filter: blur(3px);
        @media (min-width: 768px) {
            display: none;
        }
    }

    div {
        max-width: 330px;
        margin: 0 auto;
        h1 {
            
            max-width: 202px;
            color: #806D61;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 111.5%;
            margin: 0 auto;
            margin-bottom: 30px;
            text-align: center;
            span {
                color: #2C2C2C;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 111.5%; /* 35.68px */
        
                strong {
                    color: #806D61;
                }
            }
            
        }
        p {
            color: #2C2C2C;
            font-size: 16px;
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
        @media (min-width: 768px) {
            display: none;
        }

    }
}
`;
