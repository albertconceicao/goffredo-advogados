import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
background: #128C7E;
    border-radius: 50%;
    padding: 12px;
    z-index: 3;
img {
    width: 60px;
    height: 60px;
}
@media (max-width: 768px) {
    padding: 8px;
    img {
        width: 40px;
        height: 40px;
    }
}
`;
