const About = () => {
  return (
    <div>
      <div className="container home about">
        <div className="info__content">
          <h2 className="about__title">О приложении</h2>
          <p className="about__subtitle about__subtitle--first">
            Приложение для работы с электронной подписью
          </p>
          <p className="about__subtitle">Безопасно</p>
          <p className="about__text">
            подпись токеном, защищенным паролем, все файлы у вас на устройстве и
            никуда не передаются
          </p>
          <p className="about__subtitle">Быстро</p>
          <p className="about__text">
            не надо скачивать дополнительные приложения или использовать
            компьютер
          </p>
          <p className="about__subtitle">Удобно</p>
          <p className="about__text">простой и понятный интерфейс</p>
        </div>
        <div className="about-image__container" id="image-box">
          <img
            className="about__image"
            id="image-banner"
            src="./src/assets/phone-1.png"
            alt="Изображение мобильного телефона"
            width="280"
            height="535"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
