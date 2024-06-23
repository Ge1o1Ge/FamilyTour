const MainPage = () => {
  return (
    <section className="section home__section">
      <div className="container home">
        <h1 className="visually-hidden">Росчерк</h1>
        <div className="info__content">
          <h2 className="home__title">Росчерк</h2>
          <p className="home__subtitle">
            Приложение для простой и безопасной работы с электронной подписью
          </p>
        </div>
        <div className="home-image__container" id="image-box">
          <img
            className="home__image"
            id="image-banner"
            src="./src/assets/phone-1.png"
            alt="Изображение мобильного телефона"
            width="280"
            height="535"
          />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
