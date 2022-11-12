function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_img  ${card !== null && "popup_opened"}`}>
      <figure className="popup__img-container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
        <img
          src={card !== null ? card.link : ""}
          alt={card !== null ? card.name : ""}
          className="popup__img-card"
        />
        <figcaption className="popup__img-title">
          {card !== null ? card.name : ""}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
