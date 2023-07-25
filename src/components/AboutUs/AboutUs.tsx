import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Container, Content } from './AboutUs.styles';


export function AboutUs() {
  return (
    <Container>
      <Content className='container'>
        <h1>Sobre nós</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-content">
              <img src="./about-marcos.png" alt="" />
              <div>
                <h2>Marcos Goffredo <br /><span>Advogado trabalhista</span></h2>

                <p>
                Com mais de <strong>20 anos de experiência</strong> na advocacia trabalhista, é defensor dos direitos dos trabalhadores. Luta contra injustiças causadas pelos empregadores, inclusive em situações envolvendo <strong>acidentes de trabalho e doenças ocupacionais.</strong>
                <br /><br />
                Se empenha para garantir que todo trabalhador <strong>seja tratado com respeito e alcance os seus direitos na Justiça.</strong>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <img src="./about-marcos.png" alt="" />
              <div>
                <h2>Marcos Goffredo <br /><span>Advogado trabalhista</span></h2>

                <p>
                Com mais de <strong>20 anos de experiência</strong> na advocacia trabalhista, é defensor dos direitos dos trabalhadores. Luta contra injustiças causadas pelos empregadores, inclusive em situações envolvendo <strong>acidentes de trabalho e doenças ocupacionais.</strong>
                <br /><br />
                Se empenha para garantir que todo trabalhador <strong>seja tratado com respeito e alcance os seus direitos na Justiça.</strong>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Content>
      
    </Container>
  );
}
