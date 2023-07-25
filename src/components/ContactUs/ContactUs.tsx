import { Container, Content } from './ContactUs.styles';

export function ContactUs() {
  return (
    <Container>
      <Content className='container'>
        <div className='info'>
          <h1>Entre em <strong>contato</strong> com a gente</h1>

          <strong>Email:</strong>
          <span><strong>Instagram:</strong> @marcosgoffredo</span>

          <button className='standard button-web'><span>Fale com especialista agora </span><img src="./whatsapp.svg" alt="" /></button>
        </div>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14617.837141838332!2d-46.5313727!3d-23.6595279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce428e97f37005%3A0xe4806ae67d0135b5!2sGoffredo%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1690317704191!5m2!1spt-BR!2sbr" width="450" height="461"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <button className='standard button-mobile'><span>Fale com especialista agora </span><img src="./whatsapp.svg" alt="" /></button>
      </Content>
    </Container>
  );
}
