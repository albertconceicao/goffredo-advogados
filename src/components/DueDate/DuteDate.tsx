import { Container, Content } from './DueDate.styles';

export function DueDate() {
  return (
    <Container>
      <Content className='container'>
        <div>
          <h1>ATENÇÃO! <br /> <span>O seu prazo pode <strong>estar acabando!</strong></span></h1>
          <p>Existe um tempo certo para dar entrada em um processo trabalhista. Você pode receber menos ou até <strong>perder seu direito.</strong></p>

          <button className='standard'><span>Fale com especialista agora</span><img src="./whatsapp.svg" alt="" /></button>
        </div>
        <div>
          <img src="./watch-desktop.png" alt="" />
        </div>
      </Content>
    </Container>
  );
}
