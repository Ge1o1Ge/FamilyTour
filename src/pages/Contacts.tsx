
import React, { useState } from 'react';
import './contacts.scss';

const Contacts: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>Обратная связь</h2>
        <p>Оставьте здесь отзывы, пожелания или проблемы</p>
      </div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input type="text" name="name" required />
        </label>
        <label>
          Электронная почта
          <input type="email" name="email" required />
        </label>
        {submitted ? (
          <div className="thank-you-message">Спасибо!</div>
        ) : (
          <>
            <label>
              Оставьте отзыв здесь
              <textarea name="feedback" required></textarea>
            </label>
            <button type="submit">Отправить</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contacts;
