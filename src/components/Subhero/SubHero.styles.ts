import styled from 'styled-components';

export const Container = styled.div`
background: #2C2C2C;
min-height: 107px;
`;
export const Content = styled.div`
  
  @media (max-width:1557px) {
    margin-top: -50px;
  }
  @media (min-width: 1024px) and (max-width: 1352px) {
    margin-top: -53px;
  }
  h1 {
    text-align: center;
    margin-bottom: 47px;
  }
  section {
    display: flex;
    justify-content: center;
    gap: 30px;
    div {
      flex: 1;
      max-width: 368px;
      display: flex;
      gap: 12px;
      align-items: center;
      span {
        font-size: 24px;
      }
      
      strong {
        font-weight: 700;
      }
    }
    @media (max-width: 1200px) {
      div > span {
        font-size: 18px;
        max-width: 204px;
      }
      .personal {
        max-width: 184px;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;

      div > span{
        max-width: 100% !important;
      }
    }
  }
  @media (min-width: 768px) {
    padding:29px 85px 29px !important;
    div > span {
      max-width: 204px !important;
    }
    .personal{
      max-width: 184px !important;
    }
  }
  @media (min-width: 1200px) {
    padding:29px 132px 29px !important;
    div > span {
      max-width: 278px !important;
    }
    .personal{
     max-width: 227px !important;
   }
  }
`;
