import { useState } from 'react';
import './contacts.scss';

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="feedback-container container">
      <div className="feedback-header">
        <h2 className="feedback__title">Обратная связь</h2>
        <p className="feedback__subtitle">
          Оставьте здесь отзывы, пожелания или проблемы
        </p>
      </div>
      <form
        id="form"
        className="form feedback-form"
        autoComplete="off"
        data-lang="ru"
        onSubmit={handleSubmit}
      >
        {submitted ? (
          <div className="thank-you-message">Спасибо!</div>
        ) : (
          <>
            <div className="form-group form__field">
              <input
                type="text"
                id="firstName"
                className="form__input"
                name="firstname"
                autoComplete="off"
                placeholder="Ваше имя"
                required
              />
              <label className="form__label" htmlFor="firstName">
                Имя
              </label>
            </div>
            <div className="form-group form__field form__field--email">
              <input
                type="email"
                required
                id="email"
                className="form__input"
                name="email"
                autoComplete="off"
                placeholder="Email"
              />
              <label className="form__label" htmlFor="email">
                Электронная почта
              </label>
            </div>
            <div className="form-group form__field">
              <textarea
                required
                className="form__textarea"
                id="textarea"
                name="message"
                placeholder="Ваше сообщение"
              ></textarea>
              <label
                className="form__label form__label--textarea"
                htmlFor="textarea"
              >
                Ваше сообщение
              </label>
            </div>
            <div className="form__warnings">
              <p className="form__warnings-text please-wait"></p>
              <p id="error" className="form__warnings-text error"></p>
              <p className="form__warnings-text success"></p>
            </div>
            <button
              className="form__button"
              id="form__submit-button"
              type="submit"
            >
              Отправить
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contacts;
