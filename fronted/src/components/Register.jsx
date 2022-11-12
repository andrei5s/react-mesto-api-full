import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    props.onRegister(email, password);
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form className="registration__form" onSubmit={handleSubmit}>
        <fieldset className="registration__info-input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="registration__input"
            onChange={handleChange}
            value={state.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="registration__input"
            onChange={handleChange}
            value={state.password}
            required
          />
          <button
            className="registration__button"
            type="submit"
            aria-label="Зарегистрироваться"
          >
            Зарегистрироваться
          </button>
          <p className="registration__subtitle">
            Уже зарегистрированы?
            <Link to="sign-in" className="registration__link">
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
