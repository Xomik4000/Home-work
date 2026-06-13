type EventSectionProps = {
  label: string;
  title: string;
  dateTime: string;
  place: string;
  address: string;
  mapLink?: string;
};

function EventSection({
  label,
  title,
  dateTime,
  place,
  address,
  mapLink,
}: EventSectionProps) {
  return (
    <section className="section">
      <p className="section__label">{label}</p>

      {title && <h2 className="section__title">{title}</h2>}

      <p className="section__time">{dateTime}</p>

      <p className="section__place">{place}</p>

      <p className="section__address">{address}</p>
      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="section__button"
        >
          Как добраться
        </a>
      )}
    </section>
  );
}

export default EventSection;
