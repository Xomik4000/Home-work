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

        <p className="hero__date">02 октября 2026</p>

        <div className="hero__divider"></div>
      </main>
      <AnimateOnScroll>
        <WeddingCalendar />
      </AnimateOnScroll>
      <Divider />
      <AnimateOnScroll>
        <Timeline />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EventSection
          label="Роспись"
          title="Мы будем рады видеть вас на нашей церемонии"
          dateTime="02 октября 2026 • 11:00"
          place='Дворец бракосочетания "Екатерининский зал"'
          address="ул. Офицерская, 47"
          mapLink="https://yandex.ru/maps/"
        />
      </AnimateOnScroll>
      <Divider />
      <AnimateOnScroll>
        <EventSection
          label="Празднование"
          title="Продолжим этот особенный день вместе"
          dateTime="После церемонии"
          place="Ресторан уточняется"
          address="Адрес появится позже"
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
