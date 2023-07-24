import { ReactNode } from 'react';

import { Container, Content } from './Help.styles';


export function Help() {
  return (
    <Container>
      <Content className='container'>
        <div className='title'>
          <h1>Como podemos <span>te ajudar?</span></h1>

          <p>Nossa missão é reparar o que foi lesado e garantir que <strong>seu direito como trabalhador seja respeitado.</strong></p>
        </div>

        <section>
          <div>
            <img src="./goffredo-logo.png" alt="" />
            <div>
              <p>Defendemos o <strong>trabalhador</strong> de abusos cometidos pela empresa.</p>
            </div>
          </div>
          <div>
            <img src="./goffredo-logo.png" alt="" />
            <div>
              <p>Ajudamos você a cobrar na Justiça tudo aquilo que a empresa <strong>não te pagou</strong></p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img src="./goffredo-logo.png" alt="" />
            <div>
              <p>Te ajudamos recuperar sua dignidade e receber indenizações e benefícios em caso de <strong>acidente de trabalho e doença ocupacional</strong></p>
            </div>
          </div>
          <div>
            <img src="./goffredo-logo.png" alt="" />
            <div>
              <p>
              Você pode ter <strong>direito a ser indenizado</strong> e a receber um <strong>benefício vitalício</strong> em casos como bursite, síndrome do manguito rotador, hérnia de disco, epicondilite, lesão do tipo SLAP, síndrome do túnel do carpo, entre outras <strong>doenças ocupacionais</strong>.
              </p>
            </div>
          </div>
        </section>
      </Content>
    </Container>
  );
}
