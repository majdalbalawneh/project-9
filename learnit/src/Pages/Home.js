import React from 'react'


function Home() {
  return (
    <>
 
  {/* Page Content START */}
  <div className="page-content">
    {/* Main Nav START */}
    <nav id="main-nav" className="main-nav fixed">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="nav-header d-flex justify-content-between align-items-center">
              <a href="index.html" className="logo" title="LOGO">
                <img className="logo-img" src="../img/logo.png" alt="LOGO" />
                <img
                  className="alt-logo-img"
                  src="../img/logo-alt.png"
                  alt="LOGO"
                />
              </a>
            </div>
            <div className="nav-wrap">
              <ul id="nav" className="nav-wrap__list menu">
                <li className="current">
                  <a href="/" title="Главная">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="/about.html" title="Проекте">
                    О Проекте
                  </a>
                </li>
                <li>
                  <a href="/donate.html" title="Донат">
                    <span className="red-fox">Донат</span>
                  </a>
                </li>
                <li>
                  <a href="/contacts.html" title="Контакты">
                    Контакты
                  </a>
                </li>
                <div className="dropdown">
                  <span>
                    <div className="drop-ed" />
                  </span>
                  <div className="dropdown-content">
                    <span className="arrow_box" />
                    <ul className="drop-vape">
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
              <div className="riglt-floats-xs">
                <a href="#" className="btn-login">
                  <span className="ic-sx21" /> Войти в аккаунт
                </a>
                <a href="/how-start.html" className="btn-startgames">
                  <span className="ic-sx22" /> Начать играть
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* Main Nav END */}
    {/* Home Section START */}
    <section id="home-sec" className="main-banner parallax">
      <div className="bg-lefts" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* Swiper */}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-hash="slide1">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">PUBG</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Встречайте новая мини-игра <br />
                      PUBG теперь и в майнкрафте.
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Подробнее
                    </a>
                  </div>
                </div>
                <div className="swiper-slide" data-hash="slide2">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">PUBG</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Встречайте новая мини-игра <br />
                      PUBG теперь и в майнкрафте.
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Подробнее
                    </a>
                  </div>
                </div>
                <div className="swiper-slide" data-hash="slide3">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">PUBG</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Встречайте новая мини-игра <br />
                      PUBG теперь и в майнкрафте.
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Подробнее
                    </a>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
            </div>
          </div>
          <div className="col-lg-3">
            <a href="/how-start.html" className="block-s1">
              <p className="how-to-games">Как начать играть ?</p>
              <p className="desctops">
                {" "}
                В данной теме рассказано как нчать игру на нашем проекте.
              </p>
            </a>
            <a href="#" className="block-s1 p2">
              <p className="how-to-games">Стать модератором</p>
              <p className="desctops">
                {" "}
                В данном разделе вы можете купить модераторку за 900р.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Home Section END */}
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9">
          <div className="news-link">
            <img className="poster" src="/img/post.png" />
            <span className="hot-news">HOT</span>
            <h3 className="news-log">PUBG Теперь и в майнкрафт !</h3>
            <p className="description">
              Встречайте новая мини-игра PUBG теперь и на нашем сервере в
              майнкрафт ! По традиции нашим первым шагом будет ознакомление с
              правилами и регистрация аккаунта. Будьте внимательны при чтении
              правил нашего проекта, незнание их не освобождает вас от...
            </p>
            <a href="#" className="btn-view">
              <span className="ic-sx24" /> Подробнее
            </a>
            <span className="time-data">18.05.18 12:42</span>
          </div>
          <div className="news-link">
            <img className="poster" src="/img/post.png" />
            <span className="new-news">NEW</span>
            <h3 className="news-log">PUBG Теперь и в майнкрафт !</h3>
            <p className="description">
              Встречайте новая мини-игра PUBG теперь и на нашем сервере в
              майнкрафт ! По традиции нашим первым шагом будет ознакомление с
              правилами и регистрация аккаунта. Будьте внимательны при чтении
              правил нашего проекта, незнание их не освобождает вас от...
            </p>
            <a href="#" className="btn-view">
              <span className="ic-sx24" /> Подробнее
            </a>
            <span className="time-data">18.05.18 12:42</span>
          </div>
          <div className="news-link">
            <img className="poster" src="/img/post.png" />
            <h3 className="news-log">PUBG Теперь и в майнкрафт !</h3>
            <p className="description">
              Встречайте новая мини-игра PUBG теперь и на нашем сервере в
              майнкрафт ! По традиции нашим первым шагом будет ознакомление с
              правилами и регистрация аккаунта. Будьте внимательны при чтении
              правил нашего проекта, незнание их не освобождает вас от...
            </p>
            <a href="#" className="btn-view">
              <span className="ic-sx24" /> Подробнее
            </a>
            <span className="time-data">18.05.18 12:42</span>
          </div>
          <div className="news-link">
            <img className="poster" src="/img/post.png" />
            <h3 className="news-log">PUBG Теперь и в майнкрафт !</h3>
            <p className="description">
              Встречайте новая мини-игра PUBG теперь и на нашем сервере в
              майнкрафт ! По традиции нашим первым шагом будет ознакомление с
              правилами и регистрация аккаунта. Будьте внимательны при чтении
              правил нашего проекта, незнание их не освобождает вас от...
            </p>
            <a href="#" className="btn-view">
              <span className="ic-sx24" /> Подробнее
            </a>
            <span className="time-data">18.05.18 12:42</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="right-block">
            <div className="n-m">Мониторинг Серверов</div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online not-hr">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online not-hr">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <p className="tdx-strom">
              <span className="online-o" /> Общий онлайн: 2173
            </p>
          </div>
          <div className="right-block vk">
            <div className="n-m">Мониторинг Серверов</div>
            <div className="widget-vk">WIDGET VK</div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer START */}
    <footer className="section site-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <img
              className="logo-img my-3"
              src="../img/logo-ft.png"
              alt="LOGO"
            />
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <p className="footer-text">
              © ProjectNames 2018 - Все права только у меня.
            </p>
          </div>
          <div className="col-md-4">
            <ul className="ft-nav social-nav my-3">
              <li className="mx-1">
                <a href="javascript:void(0);" title="vk">
                  <i className="fa fa-vk" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="instagram">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <a href="http://larts.pro/">
              <span className="corp-design" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer END */}
  </div>
  {/* Page Content END */}
</>


  )
}

export default Home
