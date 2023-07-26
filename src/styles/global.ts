import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

  @font-face {
    font-family: 'Gantari Black';
    src: local('Gantari Black'), url('../fonts/Gantari-Black.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari Bold';
    src: local('Gantari Bold'), url('../fonts/Gantari-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari ExtraBold';
    src: local('Gantari ExtraBold'), url('../fonts/Gantari-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari ExtraLight';
    src: local('Gantari ExtraLight'), url('../fonts/Gantari-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari Light';
    src: local('Gantari Light'), url('../fonts/Gantari-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari Medium';
    src: local('Gantari Medium'), url('../fonts/Gantari-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari Regular';
    src: local('Gantari Regular'), url('../fonts/Gantari-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Gantari SemiBold';
    src: local('Gantari SemiBold'), url('../fonts/Gantari-SemiBold.ttf') format('truetype');
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    font-family: Gantari, sans-serif;
  }
  .container {
    padding: 80px 111px 102px;

    @media (max-width: 1024px) {
    padding: 52px 90px 102px;
    }
    @media (max-width: 768px) {
        padding: 30px 27px 40px 27px;
    }
  }
  .standard {
    max-width: 488px;
    min-height: 70px;
    background: linear-gradient(180deg, #E0623F 0%, #D95629 100%);
    border: 1px solid #D95629;
    border-radius: 10px;
    padding: 10px 48px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    line-height: 30px;
    text-decoration: none;
    @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .alternate {
    min-width: 299px;
    max-width: 488px;
    min-height: 70px;
    background: #0195F7;
    border: 1px solid #0195F7;
    border-radius: 10px;
    padding: 10px 48px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    line-height: 30px;
    text-decoration: none;
    a {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 111.5%; 
    }
    @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 100%;
    }
  }
  p {
    font-size: 18px;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  h1 {
    font-size: 32px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
