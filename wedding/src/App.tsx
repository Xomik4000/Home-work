import EventSection from "./components/EventSection";
import Countdown from "./components/Countdown";
import Divider from "./components/Divider";
import WeddingCalendar from "./components/WeddingCalendar";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import Timeline from "./components/Timeline";
import hallImage from "./assets/ekaterininsky-hall.png";
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
          description="11:00"
          place='Дворец бракосочетания "Екатерининский зал"'
          address="ул. Офицерская, 47"
          mapLink="https://yandex.ru/maps/-/CPXEZY-~"
        />
      </AnimateOnScroll>
      <Divider />

      <AnimateOnScroll>
        <EventSection
          label="Праздничный вечер"
          title="Продолжим этот особенный день вместе"
          description="После церемонии мы будем рады провести этот вечер в кругу самых близких людей."
          place="Ресторан AMAVI"
          address="ул. им. Героя Владислава Посадского, 2Е, Краснодар"
          mapLink="https://yandex.ru/maps/?text=Ресторан%20AMAVI%20Краснодар"
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
