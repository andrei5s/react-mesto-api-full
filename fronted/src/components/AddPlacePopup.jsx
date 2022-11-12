import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    const target = e.target;
    setName(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(name, link);
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleLinkChange(e) {
    const target = e.target;
    setLink(target.value);
  }

  return (
    <PopupWithForm
      name={`cards`}
      title={`Новое место`}
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-input">
        <input
          type="text"
          id="inputnamecard"
          name="name"
          placeholder="название"
          className="popup__input popup__input-upper"
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          value={name || ""}
          required
        />
        <span
          id="inputnamecard-error"
          className="error popup__input-error"
        ></span>
        <input
          type="url"
          id="inputcard"
          name="card"
          placeholder="Ссылка на картинку"
          className="popup__input"
          onChange={handleLinkChange}
          value={link || ""}
          required
        />
        <span id="inputcard-error" className="error popup__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
