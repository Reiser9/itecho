import React from 'react';
import $ from 'jquery';

import './App.css';

const App = () => {
    React.useEffect(() => {
        $(".next").on("click", function(){
            $('body,html').animate({scrollTop: $("#next").offset().top}, 500);
        });
    }, []);

    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner flexwrapper w100">
                        <a href="/" className="header__logo">
                            <span className="purple">It</span>echo
                        </a>

                        <div className="header__wrapper flexwrapper">
                            <nav className="header__nav flexwrapper">
                                <a href="https://google.com" className="header__nav--link">
                                    Этапы работы
                                </a>

                                <a href="https://google.com" className="header__nav--link">
                                    Проекты
                                </a>

                                <a href="https://google.com" className="header__nav--link">
                                    Команда
                                </a>

                                <a href="https://google.com" className="header__nav--link">
                                    Контакты
                                </a>
                            </nav>

                            <button className="button header__button">
                                Стартовать
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="main">
                <div className="container">
                    <div className="main__inner flexwrapper w100">
                        <div className="main__text--inner flex w100">
                            <img className="main__arrow next" src="/assets/img/arrow-down.svg" alt="Стрелка" />

                            <h1 className="main__title">
                                Создаем платформы и мобильные приложения для IOS, Android 
                                и Windows
                            </h1>

                            <p className="main__text">
                                От идеи до первых пользователей
                            </p>

                            <button className="button main__button">
                                Начать проект
                            </button>
                        </div>

                        <img className="main__img" src="/assets/img/main-img.svg" alt="Картинка" />
                    </div>
                </div>
            </section>

            <section id="next" className="useful">
                <img className="useful__bg" src="/assets/img/figurs.svg" alt="Задний фон" />

                <div className="container">
                    <div className="useful__inner flexcenter w100">
                        <h2 className="title center">
                            Приложение поможет вам:
                        </h2>

                        <div className="useful__content w100">
                            <div className="useful__item flexcenter">
                                <p className="useful__item--title center">
                                    <span className="purple">Увеличить</span> прибыль компании
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support1.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter">
                                <p className="useful__item--title center">
                                    <span className="purple">Автоматизировать</span> взаимодействие с клиентами
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support2.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter">
                                <p className="useful__item--title center">
                                    <span className="purple">Оптимизировать</span> бинес-процессы
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support3.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter">
                                <p className="useful__item--title center">
                                    <span className="purple">Перенести</span> бизнес в облако
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support4.svg" alt="Иконка" />
                                </div>
                            </div>
                        </div>

                        <h2 className="title center clients__title">
                            Наши клиенты
                        </h2>

                        <div className="useful__content w100">
                            <a href="https://google.com" className="client__item flexwrapper">
                                <img className="client__img" src="/assets/img/partner1.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper">
                                <img className="client__img" src="/assets/img/partner2.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper">
                                <img className="client__img" src="/assets/img/partner3.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper">
                                <img className="client__img" src="/assets/img/partner4.png" alt="Клиент" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="how">
                <img className="how__bg" src="/assets/img/how-bg.svg" alt="Задний фон" />

                <div className="container">
                    <div className="how__inner flexcenter">
                        <h2 className="title center">
                            Как это происходит?
                        </h2>

                        <div className="how__content w100">
                            <div className="how__item flexwrapper w100">
                                <p className="how__item--number">
                                    01
                                </p>

                                <img className="how__item--img" src="assets/img/how1.svg" alt="Картинка" />

                                <div className="how__item--text--inner flex w100">
                                    <h4 className="how__item--title">
                                        Аналитика
                                    </h4>

                                    <p className="how__item--text">
                                        Для уверенного старта проекта полностью изучаем бизнес процессы вашей компании
                                    </p>
                                </div>
                            </div>

                            <div className="how__item flexwrapper w100">
                                <p className="how__item--number">
                                    02
                                </p>

                                <img className="how__item--img" src="assets/img/how2.svg" alt="Картинка" />

                                <div className="how__item--text--inner flex w100">
                                    <h4 className="how__item--title">
                                        Ui, Ux проектирование
                                    </h4>

                                    <p className="how__item--text">
                                        До мельчайших деталей прорабатываем интерфейс и дизайн приложений
                                    </p>
                                </div>
                            </div>

                            <div className="how__item flexwrapper w100">
                                <p className="how__item--number">
                                    03
                                </p>

                                <img className="how__item--img" src="assets/img/how3.svg" alt="Картинка" />

                                <div className="how__item--text--inner flex w100">
                                    <h4 className="how__item--title">
                                        Разработка
                                    </h4>

                                    <p className="how__item--text">
                                        Пишем код на самых современных фреймфорках,  дающих превосходную производительность, при минимальной стоимости
                                    </p>
                                </div>
                            </div>

                            <div className="how__item flexwrapper w100">
                                <p className="how__item--number">
                                    04
                                </p>

                                <img className="how__item--img" src="assets/img/how4.svg" alt="Картинка" />

                                <div className="how__item--text--inner flex w100">
                                    <h4 className="how__item--title">
                                        Тестирование и запуск
                                    </h4>

                                    <p className="how__item--text">
                                        Тестируем сервис на разных устройствах и гарантируем качественный запуск проекта 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="button how__button">
                            Узнать подробнее
                        </button>
                    </div>
                </div>
            </section>

            <section className="form">
                <div className="container">
                    <div className="form__inner flexwrapper w100">
                        <h4 className="form__title">
                            Хотите идти в ногу со временем?
                        </h4>

                        <div className="form__content flexcenter w100">
                            <p className="form__content--title center">
                                Напишите нам
                            </p>

                            <input className="input form__input" placeholder="Ваш e-mail" />

                            <button className="button form__button">
                                Начать проект
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;