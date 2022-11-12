import SuccessIcon from "../images/SuccessIcon.svg";
import FailIcon from "../images/FailIcon.svg";
import React from "react";

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_registration ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть окно"
          onClick={props.onClose}
        ></button>
        {props.isSuccess ? (
          <>
            <img
              src={`${SuccessIcon}`}
              alt="Регистрация прошла успешно."
              className="popup__registration-logo"
            />
            <h2 className="popup__registration-title">
              Вы успешно зарегистрировались!
            </h2>
          </>
        ) : (
          <>
            <img
              src={`${FailIcon}`}
              alt="Что-то пошло не так!"
              className="popup__registration-logo"
            />
            <h2 className="popup__registration-title">
              Что-то пошло не так! Попробуйте ещё раз.
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoToolTip;
