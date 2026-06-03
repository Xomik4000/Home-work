import { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-10-02T11:00:00");

    const updateCountdown = () => {
      const now = new Date();

      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsWeddingDay(true);

        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <p className="section__label">До свадьбы осталось</p>

      {isWeddingDay ? (
        <h2 className="section__title"> Этот день настал ❤️</h2>
      ) : (
        <div className="countdown">
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.days}</span>

            <span className="countdown__label">Дней</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.hours}</span>

            <span className="countdown__label">Часов</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.minutes}</span>

            <span className="countdown__label">Минут</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.seconds}</span>

            <span className="countdown__label">Секунд</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Countdown;
