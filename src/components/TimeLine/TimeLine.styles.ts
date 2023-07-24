import styled from 'styled-components';

export const Container = styled.div`
min-height: 1213px;
background: #fff;
`;
export const Content = styled.div`
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
.time-content {
    position: relative;
    top: -737px;
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
}
`;
