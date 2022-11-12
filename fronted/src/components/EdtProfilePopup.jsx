import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/currentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(
    () => {
      if (!isOpen) {
        setName(String(currentUser.name));
				setDescription(String(currentUser.about));
      }
    },
    [currentUser, isOpen]
  );

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      name={`User`}
      title={`Редактировать профиль`}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <fieldset className="popup__form-input">
        <input
          className="popup__input popup__input-top popup__input-upper"
          id="inputname"
          placeholder="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="error popup__input-error"></span>
        <input
          className="popup__input popup__input-bottom"
          id="inputjob"
          placeholder="Профессия"
          type="text"
          name="job"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="error popup__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
