import { Container, Content } from '../Hero/Hero.styles';
export function Hero() {
  return (
    <Container>
      <Content className='container'>
        <img className='logo' src="./logo.png" alt="" /> 
        <div className='hero-content'>
          <div className='hero-text'>
            <div><span>Conte com uma advocacia especializada nos <strong>direitos do trabalhador</strong> para defender sua <strong className='sub-strong'>dignidade</strong> e os <strong className='sub-strong'>frutos do seu trabalho.</strong></span></div>

            <p>Defendemos os direitos dos trabalhadores de forma simples, humanizada e personalizada.</p>

            <a className='standard' href='/'><span>Fale comigo pelo WhatsApp </span><img src="./whatsapp.svg" alt="" /></a>
          </div>
          {/* <div className='hero-client'>
            <img src="./marcos.png" alt="" />

          </div> */}
        </div>
      </Content>
    </Container>
  );
}
