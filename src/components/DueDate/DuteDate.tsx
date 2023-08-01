import { Container, Content } from './DueDate.styles';

export function DueDate() {
  return (
    <Container>
      <Content className='container'>
        <section className='web'>
          <div>
            <h1>ATENÇÃO! <br /> <span>O seu prazo pode <strong>estar acabando!</strong></span></h1>
            <p>Existe um tempo certo para dar entrada em um processo trabalhista. Você pode receber menos ou até <strong>perder seu direito.</strong></p>

            <a className='standard' href='https://wa.me/5511976716676?text=Olá, desejo saber mais sobre seus serviços de Advocacia que vi pelo site.' target='_blank' rel="noreferrer"><span>Fale comigo pelo WhatsApp</span><img src="./whatsapp.svg" alt="Botão para entrar em contato pelo WhatsApp" /></a>
          </div>
          <div>
            <img src="./watch-desktop.png" alt="" />
          </div>
        </section>
        <section className='mobile'>
            <img className='watch-left' src="./watch-desktop.png" alt="Relógio da seção de Prazos" />
          <div>
              <h1>ATENÇÃO! <br /> <span>O seu prazo pode <strong>estar acabando!</strong></span></h1>
              <p>Existe um tempo certo para dar entrada em um processo trabalhista. Você pode receber menos ou até <strong>perder seu direito.</strong></p>

              <a className='standard' href='https://wa.me/5511976716676?text=Olá, desejo saber mais sobre seus serviços de Advocacia que vi pelo site.' target='_blank' rel="noreferrer"><span>Fale comigo pelo WhatsApp</span></a>
          </div>
            <img className='watch-right' src="./watch-desktop.png" alt="Relógio de fundo da seção de prazos" />
        </section>
      </Content>
    </Container>
  );
}
