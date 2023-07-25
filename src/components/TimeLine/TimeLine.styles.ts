import styled from 'styled-components';

export const Container = styled.div`
min-height: 1213px;
background: #fff;
`;
export const Content = styled.div`

h1 {
    max-width: 362px;
    margin: 0 auto;
    text-align: center;
    color: #2c2c2c;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 111.5%;
    margin-bottom: 62px;

    strong {
        color: #e0623f;
    }
    @media (max-width: 768px) {
        font-size: 20px;
        max-width: 207px;
    }
}
.circle {
    width: 18px;
    background: #806D61;
    height: 18px;
    margin: 0 auto;
    border-radius: 10px;

   
}
.line {
    margin: 0 auto;
    height: 821px;
    width: 2px;
    border:2px solid #806D61;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

}
@media (max-width: 768px) {
    .circle, .line {
        margin: unset;
        margin-right: auto;
    }
    .line {
        margin-left: 8px;
    }
}

.time-content-web {
    position: relative;
    top: -737px;
    margin-bottom: -737px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
    gap: 20px;
    div {
        &:nth-child(even) {
            align-self: flex-end;
        }
        max-width: 405px;
    }

    .left, .right {
        min-width: 405px;
        min-height: 110px;
        padding: 25px 59px 25px 59px;
        color: #2c2c2c;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 20px;

    }
    .left {
        background: url('./time-left.png') no-repeat left;
    }
    .right {
        background: url('./time-right.png') no-repeat right;
        padding: 35px 30px 30px 88px;
    }
    @media (max-width: 1024px) {
            display: none ;
        
        .left, .right {
            min-width:372px;
            max-width:372px;
        
            font-size: 16px;
        }
        .right {
            padding: 35px 30px 30px 69px;
        }
        .left {
            padding: 25px 59px 25px 46px;
        }
        .time-content-web {
            top: -751px;
        }
    }
    @media (min-width: 1024px) {
        display: flex;
    }
}
.time-content-mobile {
    position: relative;
    top: -737px;
    margin-bottom: -737px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
    margin-left: 40px;
    gap: 48px;

    div {
        
        min-width:279px;
        max-width:279px;
        max-height:82px;
    }
    .right {
        max-width:279px;
        max-height:82px;
        padding: 25px 21px;
        color: #2c2c2c;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 20px;

    }
    .right {
        background: url('./time-right-mb.png') no-repeat right;
    }
    @media (min-width: 1024px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        align-items: flex-end;
    }
    
}

@media (max-width: 1024px) {
    .line img {
        max-width: 51px;
        max-height: 51px;
    }
    .time-content-web {
        display: none;
        display: none ;
        
        .left, .right {
            min-width:279px !important;
            max-width:279px !important;
        
            font-size: 16px;
        }
        .right {
            padding: 35px 30px 30px 69px;
        }
        .left {
            padding: 25px 59px 25px 46px;
        }
        .time-content-web {
            top: -751px;
        }
    }
    
    
}
@media (min-width: 1024px) {
    .time-content-web {
    position: relative;
    top: -737px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: -737px;
    gap: 20px;
    div {
        &:nth-child(even) {
            align-self: flex-end;
        }
        max-width: 405px;
    }

    .left, .right {
        min-width: 405px;
        min-height: 110px;
        padding: 25px 59px 25px 59px;
        color: #2c2c2c;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 20px;

    }
    .left {
        background: url('./time-left.png') no-repeat left;
    }
    .right {
        background: url('./time-right.png') no-repeat right;
        padding: 35px 30px 30px 88px;
    }
    
}
    
    
}
`;
