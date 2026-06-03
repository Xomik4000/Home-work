function Timeline() {
  return (
    <section className="section">
      <p className="section__label">Программа дня</p>

      <h2 className="section__title">План праздника</h2>

      <div className="timeline">
        <div className="timeline__item">
          <div className="timeline__time">11:00</div>

          <div className="timeline__content">
            <h3>Роспись</h3>

            <p>Екатерининский зал</p>
          </div>
        </div>

        <div className="timeline__item">
          <div className="timeline__time">?</div>

          <div className="timeline__content">
            <h3>Праздничный вечер</h3>

            <p>Информация появится позже</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
