import { Container, Content, SocialContent } from './SocialMedia.styles';

export function SocialMedia() {
  return (
    <Container>
      <SocialContent>
        <Content className='container'>
          <section>
            <img src="./instagram.png" alt="Logo Instagram" />
            <div>
              <img src="./follow-image.png" alt="Logo de Instagram" />

              <h1>Nos siga no instagram!</h1>

              <p>
                Falo <strong>verdades</strong> que as empresas escondem do trabalhador (e os patrões não gostam muito de mim por conta disso). <br /><br />Acompanhe nosso conteúdo e tire suas dúvidas!
              </p>

                <a href="https://www.instagram.com/marcosgoffredo/" target='_blank' className='alternate button-web' rel="noreferrer">Acessar meu perfil</a>
            </div>
          </section>
          <div className='button-mobile'>
            <a href="https://www.instagram.com/marcosgoffredo/" className='alternate' target='_blank' rel="noreferrer">Acessar meu perfil</a>
          </div>
        </Content>
      </SocialContent>
    </Container>
  );
}
