import EventSection from "./components/EventSection";
import Countdown from "./components/Countdown";
import Divider from "./components/Divider";
import WeddingCalendar from "./components/WeddingCalendar";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import Timeline from "./components/Timeline";
import hallImage from "./assets/ekaterininsky-hall.jpeg";
import "./App.css";

function App() {
  return (
    <div className="invitation">
      <main className="hero">
        <img src={hallImage} alt="Екатерининский зал" className="hero__image" />

        <p className="hero__subtitle">Свадебное приглашение</p>

        <h1 className="hero__title">Саша & Настя</h1>

        <p className="hero__text">
          С любовью приглашаем вас разделить этот особенный день вместе с нами
        </p>
        <div className="hero__divider"></div>
      </main>
      <AnimateOnScroll>
        <WeddingCalendar />
      </AnimateOnScroll>
      <Divider />
      <AnimateOnScroll>
        <section className="section">
          <p className="section__label">Программа дня</p>

          <h2 className="section__title">Как пройдёт этот день</h2>

          <Timeline />
        </section>
      </AnimateOnScroll>
      <Divider />
      <AnimateOnScroll>
        <EventSection
          label="Роспись"
          title="Мы скажем друг другу «Да»"
          dateTime="11:00"
          place='Дворец бракосочетания "Екатерининский зал"'
          address="ул. Офицерская, 47"
          mapLink="https://yandex.ru/maps/-/CPXEZY-~"
        />
      </AnimateOnScroll>
      <Divider />
      <AnimateOnScroll>
        <Countdown />
      </AnimateOnScroll>
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
