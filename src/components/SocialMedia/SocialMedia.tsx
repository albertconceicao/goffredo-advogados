import { Container, Content, SocialContent } from './SocialMedia.styles';

export function SocialMedia() {
  return (
    <Container>
      <SocialContent>
        <Content className='container'>
          <section>
            <img src="./instagram.png" alt="" />
            <div>
              <img src="./follow-image.png" alt="" />

              <h1>Nos siga no instagram!</h1>

              <p>
                Falo <strong>verdades</strong> que as empresas escondem do trabalhador (e os patrões não gostam muito de mim por conta disso). <br /><br />Acompanhe nosso conteúdo e tire suas dúvidas!
              </p>

              <button className='alternate button-web' type='button'>
                <a href="">Acessar meu perfil</a>
              </button>
            </div>
          </section>
          <div className='button-mobile'>
            <button className='alternate' type='button'>
              <a href="">Acessar meu perfil</a>
            </button>
          </div>
        </Content>
      </SocialContent>
    </Container>
  );
}