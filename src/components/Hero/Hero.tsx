import { Container, Content } from '../Hero/Hero.styles';
export function Hero() {
  return (
    <Container>
      <Content className='container'>
        <div className='logo-div'><img className='logo' src="./logo.png" alt="" /> </div>
        <div className='hero-content'>
          <div className='hero-text'>
            <div><span>Conte com uma advocacia especializada nos <strong>direitos do trabalhador</strong> para defender sua <strong className='sub-strong'>dignidade</strong> e os <strong className='sub-strong'>frutos do seu trabalho.</strong></span></div>

            <p>Defendemos os direitos dos trabalhadores de forma simples, humanizada e personalizada.</p>

            <a className='standard' href='https://wa.me/5511976716676?text=Olá, desejo saber mais sobre seus serviços de Advocacia que vi pelo site.' target='_blank' rel="noreferrer"><span>Fale comigo pelo WhatsApp </span><img src="./whatsapp.svg" alt="" /></a>
          </div>
          
        </div>
      </Content>
    </Container>
  );
}
