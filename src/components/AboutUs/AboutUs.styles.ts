import styled from 'styled-components';

export const Container = styled.div`
background: url(''), #F4EEE8;
min-height: 571px;
`;
export const Content = styled.div`
h1 {
    margin-bottom: 90px 0 100px 0;
    text-align: center;
    font-weight: 700;
    color: #2c2c2c;
    @media (max-width:768px) {
        margin-bottom: 0;
    }
}
.swiper {
    max-width: 1200px;
    margin: 0 auto;
}
.mySwipper {
    min-height: 600px;
}
.swiper-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
    gap: 30px;
    min-height: 600px;


    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 700px;
    }
    img {
        max-width: 320px;
        max-height: 320px;

        @media (max-width: 1024px) {
            max-width: 249px;
            max-height: 249px;
        }
    }
    div {
        max-width: 440px;

        h2 {
            color: #2c2c2c;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 111.5%; 
            
            span {
                font-size: 20px;
                font-weight: 400;
            }
            @media (max-width: 768px) {
                font-size: 20px;
                text-align: center;

            }
        }
        p {
            color: #2c2c2c;
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 20px;

        }
    }
}

.swiper-button-next, .swiper-button-prev {
    background: url('./next.png'),#C3B8A8;
    border-radius: 50%;
    width: 67px;
    height: 67px;
    &::after {
        content: '';
    }

    @media (max-width: 768px) {
        background: url('./next-mb.png'),#C3B8A8;
        width: 45px;
        height: 45px;
    }
}
.swiper-button-prev {
    background: url('./prev.png'),#C3B8A8;

    @media (max-width: 768px) {
        background: url('./prev-mb.png'),#C3B8A8;
    }
    
}
.swiper-pagination-bullet {
    width: 16px;
    height: 16px;
}
.swiper-pagination-bullet-active {
    background: #E0623F;
}
`;