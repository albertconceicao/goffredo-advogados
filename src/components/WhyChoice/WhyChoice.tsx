import { Container, Content } from "./WhyChoice.styles";

export function WhyChoice() {
  return (
    <Container>
      <Content className="container">
        <h1>
          Porque você deve 
          <strong> nos escolher</strong>
        </h1>

        <div className="choice-content">
          <div className="choice-flex">
            <div>
              <img src="./1.svg" alt="" />
              <p>
                <strong>Atendemos apenas trabalhadores </strong>
                
                Defender trabalhadores é nossa especialidade e missão de vida.
              </p>
            </div>
            <div>
              <img src="./2.svg" alt="" />
              <p>
                Mais de 20 anos de experiência 
                na advocacia trabalhista
              </p>
            </div>
          </div>
          <div className="choice-flex">
            <div>
              <img src="./3.svg" alt="" />
              <p>
                Acompanhamento pessoal  e individualizado
              </p>
            </div>
            <div>
              <img src="./4.svg" alt="" />
              <p>
                Te deixo atualizado da situação 
                do processo <strong>sem precisar me perguntar</strong>
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
