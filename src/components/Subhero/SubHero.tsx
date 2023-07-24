import { Container, Content } from './SubHero.styles';

export function SubHero() {
  return (
    <Container>
      <Content className="container">

        <section>
          <div>
            <img src="./lock.svg" alt="" />
            <span>
              Especialistas em <strong>defender o trabalhador</strong>
            </span>
          </div>
          <div>
            <img src="./screen.svg" alt="" />
            <span className='personal'>
              Atendimento <strong>presencial</strong> e online
            </span>
          </div>
          <div>
            <img src="./person.svg" alt="" />
            <span>
              Mais de <strong>dois mil clientes</strong> atendidos
            </span>
          </div>
        </section>
      </Content>
    </Container>
  );
}
