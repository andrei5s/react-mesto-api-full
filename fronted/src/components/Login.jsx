import React from "react";

const initValues = {
  email: "",
  password: "",
  message: "",
};

const Login = (props) => {
  const [state, setState] = React.useState(initValues);

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

    props.onLogin(email, password);
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Вход</h2>
      <form className="registration__form" onSubmit={handleSubmit}>
        <fieldset className="registration__info-input">
          <input
            type="email"
            id="sign-in-email"
            name="email"
            placeholder="Email"
            className="registration__input"
            onChange={handleChange}
            value={state.email}
            required
          />
          <input
            type="password"
            id="sign-in-password"
            name="password"
            placeholder="Пароль"
            className="registration__input"
            onChange={handleChange}
            value={state.password}
            required
          />
          <button
            className="registration__button registration__button_margin"
            id="button-reg"
            type="submit"
            aria-label="создать"
          >
            Вход
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
