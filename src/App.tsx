import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { DueDate } from './components/DueDate';
import { Footer } from './components/Footer';
import { Help } from './components/Help';
import { Hero } from './components/Hero';
import { SocialMedia } from './components/SocialMedia';
import { SubHero } from './components/Subhero';
import { TimeLine } from './components/TimeLine';
import { WhyChoice } from './components/WhyChoice';

function App() {
  return (
    <>
    <Hero />
    <SubHero />
    <Help />
    <TimeLine />
    <DueDate />
    <WhyChoice />
    <AboutUs />
    <SocialMedia />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
