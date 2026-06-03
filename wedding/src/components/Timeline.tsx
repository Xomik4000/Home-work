import ring from "../assets/ring.png";
import park from "../assets/park.png";
import champagne from "../assets/champagne.png";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__item">
        <div className="timeline__icon">
          <img src={ring} alt="Роспись" />
        </div>

        <div className="timeline__content">
          <h3>Роспись</h3>
          <p>Екатерининский зал</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__icon">
          <img src={park} alt="Фотосессия" />
        </div>

        <div className="timeline__content">
          <h3>Фотосессия</h3>
          <p>После церемонии</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__icon">
          <img src={champagne} alt="Праздничный вечер" />
        </div>

        <div className="timeline__content">
          <h3>Праздничный вечер</h3>
          <p>Информация появится позже</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
