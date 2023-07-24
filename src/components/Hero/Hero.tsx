import { Container, Content } from '../Hero/Hero.styles';
export function Hero() {
  return (
    <Container>
      <Content className='container'>
        <img className='logo' src="./logo.png" alt="" /> 
        <div className='hero-content'>
          <div className='hero-text'>
            <div><span>Conte com uma advocacia especializada nos <strong>direitos do trabalhador</strong> para defender sua <strong>dignidade</strong> e os <strong>frutos do seu trabalho.</strong></span></div>

            <p>Defendemos os direitos dos trabalhadores de forma simples, humanizada e personalizada.</p>

            <button className='standard'><span>Fale com advogado trabalhista </span><img src="./whatsapp.svg" alt="" /></button>
          </div>
          {/* <div className='hero-client'>
            <img src="./marcos.png" alt="" />

          </div> */}
        </div>
      </Content>
    </Container>
  );
}
