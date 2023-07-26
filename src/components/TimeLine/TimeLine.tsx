import { Container, Content } from './TimeLine.styles';

export function TimeLine() {
  return (
    <Container>
      <Content className='container'>
        <h1>É assim que funciona o <strong>nosso atendimento</strong></h1>

        <section>
          <div className='circle'></div>
          
          <div className='line'>
            <div><img src="./number-1.png" alt=""/></div>
            <div><img src="./number-2.png" alt="" /></div>
            <div><img src="./number-3.png" alt="" /></div>
            <div><img src="./number-4.png" alt="" /></div>
            <div><img src="./number-5.png" alt="" /></div>
            <div><img src="./number-6.png" alt="" /></div>
          </div>
          <div className='circle'></div>
          <div className='time-content-web'>
            <div className="left" >
              <img src="./help-whatsapp.svg" alt="" /> <p>Você conta para mim a sua situação via <strong>Whatsapp</strong></p>
            </div>
            <div className="right"><p>Marcamos uma <strong>conversa presencial ou online</strong></p><img src="./help-partners.svg" alt="" /></div>
            <div className="left" ><img src="./help-folder.svg" alt="" /> <p>Separe os <strong>documentos </strong>que comprovam seus direitos e sua <strong>Carteira de Trabalho</strong></p></div>
            <div className="right"><p>Me conte <strong>todos os detalhes</strong> do caso </p> <img src="./help-lock.svg" alt="" /></div>
            <div className="left" ><img src="./help-pen.svg" alt="" /><p>Assina a <strong>procuração</strong></p> </div>
            <div className="right"><p>Dou entrada no <strong>processo</strong> </p><img src="./help-hammer.svg" alt="" /></div>

          </div>
          <div className='time-content-mobile'>
            <div className="right" >
              <img src="./help-whatsapp.svg" alt="" /> <p>Você conta para mim a sua situação via <strong>Whatsapp</strong></p>
            </div>
            <div className="right">
              <img src="./help-partners.svg" alt="" />
              <p>Marcamos uma <strong>conversa presencial ou online</strong></p></div>
            <div className="right" ><img src="./help-folder.svg" alt="" /> <p>Separe os <strong>documentos </strong>que comprovam seus direitos e sua <strong>Carteira de Trabalho</strong></p></div>
            <div className="right">
              <img src="./help-lock.svg" alt="" />
              <p>Me conte <strong>todos os detalhes</strong> do caso </p> </div>
            <div className="right" ><img src="./help-pen.svg" alt="" /><p>Assina a <strong>procuração</strong></p> </div>
            <div className="right">
              <img src="./help-hammer.svg" alt="" />
              <p>Dou entrada no <strong>processo</strong> </p></div>
          </div>
        </section>
      </Content>
    </Container>
  );
}
