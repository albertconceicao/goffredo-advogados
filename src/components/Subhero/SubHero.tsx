import { Container, Content } from './SubHero.styles';

export function SubHero() {
  return (
    <Container>
      <Content className="container">

        <section>
          <div>
            <img src="./lock.svg" alt="Ícone de Pasta" />
            <span>
              Especialistas em <strong>defender o trabalhador</strong>
            </span>
          </div>
          <div>
            <img src="./screen.svg" alt="Ícone de uma tela de computador" />
            <span className='personal'>
              Atendimento <strong>presencial</strong> e online
            </span>
          </div>
          <div>
            <img src="./person.svg" alt="Ícone de pessoa" />
            <span>
              Mais de <strong>dois mil clientes</strong> atendidos
            </span>
          </div>
        </section>
      </Content>
    </Container>
  );
}
