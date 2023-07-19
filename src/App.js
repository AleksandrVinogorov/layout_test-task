import './css/index.css';

function App() {
  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__left-side'>
            <figure className='header__logo'>
              <img src={require("./img/logo_welbex.svg").default} alt='logo'></img>
              <figcaption>крупный интегратор CRM в Росcии и ещё 8 странах</figcaption>
            </figure>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li><a href="/#">Услуги</a></li>
                <li><a href="/#">Виджеты</a></li>
                <li><a href="/#">Интеграции</a></li>
                <li><a href="/#">Кейсы</a></li>
                <li><a href="/#">Сертификаты</a></li>
              </ul>
            </nav>
          </div>
          <img className='purple-light' src={require("./img/purple light.png")} alt='ball'></img>
          <img className='purple-ball' src={require("./img/purple ball.svg").default} alt='ball'></img>
          <div className="header__contacts">
            <p>+7 555 555-55-55</p>
            <div className='header__contacts-links'>
              <a href="/#">
                <img src={require("./img/telegram.svg").default} alt='telegram'></img>
              </a>
              <a href="/#">
                <img src={require("./img/viber.svg").default} alt='telegram'></img>
              </a>
              <a href="/#">
                <img src={require("./img/whatsapp.svg").default} alt='telegram'></img>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <img className='red-ball' src={require("./img/red ball.svg").default} alt='ball'></img>
        <section className='page'>
          <img className='red-light' src={require("./img/red light.png")} alt='ball'></img>
          <div className='page__wrapper'>
            <div className='page__title'>
              <h1 className="page__title-head">Зарабатывайте больше <br /> <span>с WELBEX</span></h1>
              <p className='page__title-description'>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className='page__info'>
              <img className='purple__light-mobile' src={require("./img/purple light-mobile.png")} alt='ball'></img>
              <img className='purple__ball-mobile' src={require("./img/purple ball-mobile.png")} alt='ball'></img>
              <img className='red__light-mobile' src={require("./img/red light-mobile.png")} alt='ball'></img>
              <h2 className='page__info-title'>Вместе с <span>бесплатной консультацией</span> мы дарим:</h2>
              <div className='page__info-content'>
                <div>
                  <p className='title'>Виджеты</p>
                  <p className='description'>30 готовых решений</p>
                </div>
                <div>
                  <p className='title'>Dashboard</p>
                  <p className='description'>с показателями вашего бизнеса</p>
                </div>
                <div>
                  <p className='title'>Skype Аудит</p>
                  <p className='description'>отдела продаж и CRM системы</p>
                </div>
                <div>
                  <p className='title'>35 дней</p>
                  <p className='description'>использования CRM</p>
                </div>
              </div>
              <div className='page__info-content-mobile'>
                <div>
                  <div>
                    <p className='title'>Skype аудит</p>
                  </div>
                  <div>
                    <p className='title'>Dashboard</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='title'>30 виджетов</p>
                  </div>
                  <div>
                    <p className='title'>Месяц amocrm</p>
                  </div>
                </div>
              </div>
              <button className='page__info-btn'>
                <p>Получить консультацию</p>
              </button>
              <img className='brown-ball' src={require("./img/brown ball.svg").default} alt='ball'></img>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <img className='red__ball-mobile' src={require("./img/red ball-mobile.png")} alt='ball'></img>
        <div className='footer__wrapper'>
          <div className='footer__info'>
            <div className='footer__about'>
              <p>О компании</p>
              <ul>
                <li><a href="/#">Партнёрская программа</a></li>
                <li><a href="/#">Вакансии</a></li>
              </ul>
            </div>
            <div className='footer__menu'>
              <div className='footer__menu-left'>
                <p>Меню</p>
                <ul>
                  <li><a href="/#">Расчёт стоимости</a></li>
                  <li><a href="/#">Услуги</a></li>
                  <li><a href="/#">Виджеты</a></li>
                  <li><a href="/#">Интеграции</a></li>
                  <li><a href="/#">Наши клиенты</a></li>
                </ul>
              </div>
              <div className='footer__menu-right'>
                <p>&nbsp;</p>
                <ul>
                  <div className='footer__menu-right-mobile'>
                    <li><a href="/#">Благодарность клиентов</a></li>
                    <li><a href="/#">Кейсы</a></li>
                  </div>
                  <div className='footer__menu-right-desktop'>
                    <li><a href="/#">Кейсы</a></li>
                    <li><a href="/#">Благодарственные письма</a></li>
                  </div>
                  <li><a href="/#">Сертификаты</a></li>
                  <li><a href="/#">Блог на Youtube</a></li>
                  <li><a href="/#">Вопрос / Ответ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__contacts'>
            <p>Контакты</p>
            <div className='footer__contacts-links'>
              <div>+7 555 555-55-55</div>
              <div>
                <a className='footer__contacts-links-telegram' href="/#">
                </a>
                <a className='footer__contacts-links-viber' href="/#">
                </a>
                <a className='footer__contacts-links-whatsapp' href="/#">
                </a>
              </div>
              <div>Москва, Путевой проезд 3с1, к 902</div>
            </div>
            <div className='privacy_policy'>
              <div>©WELBEX 2022. Все права защищены.</div>
              <a href="/#">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
