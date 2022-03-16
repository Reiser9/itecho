import React from 'react';
import $ from 'jquery';
import WOW from 'wowjs';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import './App.css';

const App = () => {
    React.useEffect(() => {
        $(".next").on("click", function(){
            $('body,html').animate({scrollTop: $("#next").offset().top}, 500);
        });

        new WOW.WOW({
            live: false
        }).init();
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="slick__dot '+ className +'"></span>';
        },
    };

    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner flexwrapper w100">
                        <a href="/" className="header__logo wow bounceInLeft">
                            <span className="purple">It</span>echo
                        </a>

                        <div className="header__wrapper flexwrapper">
                            <nav className="header__nav flexwrapper">
                                <a href="https://google.com" className="header__nav--link wow bounceInDown" data-wow-delay=".2s">
                                    Этапы работы
                                </a>

                                <a href="https://google.com" className="header__nav--link wow bounceInDown" data-wow-delay=".3s">
                                    Проекты
                                </a>

                                <a href="https://google.com" className="header__nav--link wow bounceInDown" data-wow-delay=".4s">
                                    Команда
                                </a>

                                <a href="https://google.com" className="header__nav--link wow bounceInDown" data-wow-delay=".5s">
                                    Контакты
                                </a>
                            </nav>

                            <button className="button header__button wow bounceInRight" data-wow-delay=".6s">
                                Стартовать
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="main wow fadeIn">
                <div className="container">
                    <div className="main__inner flexwrapper w100">
                        <div className="main__text--inner flex w100">
                            <img className="main__arrow next" src="/assets/img/arrow-down.svg" alt="Стрелка" />

                            <h1 className="main__title wow fadeIn">
                                Создаем платформы и мобильные приложения для IOS, Android 
                                и Windows
                            </h1>

                            <p className="main__text wow fadeIn" data-wow-delay=".2s">
                                От идеи до первых пользователей
                            </p>

                            <button className="button main__button wow fadeIn" data-wow-delay=".4s">
                                Начать проект
                            </button>
                        </div>

                        <img className="main__img wow fadeIn" data-wow-delay=".6s" src="/assets/img/main-img.svg" alt="Картинка" />
                    </div>
                </div>
            </section>

            <section id="next" className="useful wow fadeIn">
                <img className="useful__bg" src="/assets/img/figurs.svg" alt="Задний фон" />

                <div className="container">
                    <div className="useful__inner flexcenter w100">
                        <h2 className="title center wow fadeIn">
                            Приложение поможет вам:
                        </h2>

                        <div className="useful__content w100">
                            <div className="useful__item flexcenter wow fadeIn" data-wow-delay=".2s">
                                <p className="useful__item--title center">
                                    <span className="purple">Увеличить</span> прибыль компании
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support1.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter wow fadeIn" data-wow-delay=".3s">
                                <p className="useful__item--title center">
                                    <span className="purple">Автоматизировать</span> взаимодействие с клиентами
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support2.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter wow fadeIn" data-wow-delay=".4s">
                                <p className="useful__item--title center">
                                    <span className="purple">Оптимизировать</span> бинес-процессы
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support3.svg" alt="Иконка" />
                                </div>
                            </div>

                            <div className="useful__item flexcenter wow fadeIn" data-wow-delay=".5s">
                                <p className="useful__item--title center">
                                    <span className="purple">Перенести</span> бизнес в облако
                                </p>

                                <div className="useful__item--img--inner flexwrapper">
                                    <img className="useful__item--img" src="/assets/img/support4.svg" alt="Иконка" />
                                </div>
                            </div>
                        </div>

                        <h2 className="title center clients__title wow fadeIn">
                            Наши клиенты
                        </h2>

                        <div className="useful__content w100">
                            <a href="https://google.com" className="client__item flexwrapper wow fadeIn" data-wow-delay=".2s">
                                <img className="client__img" src="/assets/img/partner1.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper wow fadeIn" data-wow-delay=".3s">
                                <img className="client__img" src="/assets/img/partner2.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper wow fadeIn" data-wow-delay=".4s">
                                <img className="client__img" src="/assets/img/partner3.png" alt="Клиент" />
                            </a>

                            <a href="https://google.com" className="client__item flexwrapper wow fadeIn" data-wow-delay=".5s">
                                <img className="client__img" src="/assets/img/partner4.png" alt="Клиент" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="how wow fadeIn">
                <img className="how__bg wow fadeIn" src="/assets/img/how-bg.svg" alt="Задний фон" />

                <div className="container">
                    <div className="how__inner flexcenter">
                        <h2 className="title center wow fadeIn">
                            Как это происходит?
                        </h2>

                        <div className="how__content w100">
                            <div className="how__item flexwrapper w100 wow fadeIn" data-wow-delay=".2s">
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

                            <div className="how__item flexwrapper w100 wow fadeIn" data-wow-delay=".3s">
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

                            <div className="how__item flexwrapper w100 wow fadeIn" data-wow-delay=".4s">
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

                            <div className="how__item flexwrapper w100 wow fadeIn" data-wow-delay=".5s">
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

                        <button className="button how__button wow fadeIn" data-wow-delay=".6s">
                            Узнать подробнее
                        </button>
                    </div>
                </div>
            </section>

            <section className="form wow fadeIn">
                <div className="container">
                    <div className="form__inner flexwrapper w100">
                        <h4 className="form__title wow fadeIn">
                            Хотите идти в ногу со временем?
                        </h4>

                        <div className="form__content flexcenter w100">
                            <p className="form__content--title center wow fadeIn" data-wow-delay=".2s">
                                Напишите нам
                            </p>

                            <input className="input form__input wow fadeIn" data-wow-delay=".3s" placeholder="Ваш e-mail" />

                            <button className="button form__button wow fadeIn" data-wow-delay=".4s">
                                Начать проект
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects wow fadeIn">
                <img className="projects__bg wow fadeIn" src="/assets/img/project-img.svg" alt="Фон" />

                <div className="container">
                    <div className="projects__inner flexcenter w100">
                        <div className="flexcenter w100">
                            <h2 className="title center wow fadeIn">
                                Этапы работы
                            </h2>

                            <Swiper className="projects__slider wow fadeIn" loop modules={[Pagination]} slidesPerView={1} spaceBetween={50} pagination={pagination}>
                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide1.svg" alt="Слайд" />
                                </SwiperSlide>

                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide2.svg" alt="Слайд" />
                                </SwiperSlide>

                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide3.svg" alt="Слайд" />
                                </SwiperSlide>

                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide4.svg" alt="Слайд" />
                                </SwiperSlide>
                            </Swiper>

                            <button className="button team__item--button projects__button wow fadeIn">
                                Узнать подробнее
                            </button>
                        </div>

                        <div className="flexcenter w100 project__wrapper">
                            <h2 className="title center wow fadeIn">
                                Наши проекты
                            </h2>

                            <Swiper className="projects__slider wow fadeIn" loop modules={[Pagination]} slidesPerView={1} spaceBetween={50} pagination={pagination}>
                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide1-1.svg" alt="Слайд" />
                                </SwiperSlide>

                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide1-2.svg" alt="Слайд" />
                                </SwiperSlide>

                                <SwiperSlide className="projects__slider--item">
                                    <img className="projects__slider--img" src="/assets/img/slide1-3.svg" alt="Слайд" />
                                </SwiperSlide>
                            </Swiper>

                            <button className="button team__item--button projects__button wow fadeIn">
                                Узнать еще
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team wow fadeIn">
                <div className="container">
                    <div className="team__inner flexcenter w100">
                        <h2 className="title center wow fadeIn">
                            Команда Itecho
                        </h2>

                        <p className="team__text purple center wow fadeIn" data-wow-delay=".2s">
                            Мы совместными усилиями достигаем лучшего результата
                        </p>

                        <div className="team__content w100">
                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".4s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team1.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Артем Полищук
                                    </p>

                                    <p className="team__item--role center">
                                        Project manager
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Новосибирск
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Написать в  whatsapp
                                </button>
                            </div>

                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".5s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team2.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Алексей Снегирев
                                    </p>

                                    <p className="team__item--role center">
                                        Ведущий разработчик
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Новосибирск
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Закажите консультацию
                                </button>
                            </div>

                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".6s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team3.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Александр Крушанов
                                    </p>

                                    <p className="team__item--role center">
                                        Ведущий разработчик
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Новосибирск
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Закажите консультацию
                                </button>
                            </div>

                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".7s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team3.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Кирилл Гончаров
                                    </p>

                                    <p className="team__item--role center">
                                        Фронтэнд разработчик
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Москва
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Закажите консультацию
                                </button>
                            </div>

                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".8s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team3.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Виктор Батищев
                                    </p>

                                    <p className="team__item--role center">
                                        Фронтэнд разработчик
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Москва
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Закажите консультацию
                                </button>
                            </div>

                            <div className="team__item flexcenter wow fadeIn" data-wow-delay=".9s">
                                <div className="flexcenter w100">
                                    <div className="team__item--img--inner">
                                        <img src="/assets/img/team4.png" className="team__item--img" alt="Картинка" />
                                    </div>

                                    <p className="team__item--name center">
                                        Наталья Килина
                                    </p>

                                    <p className="team__item--role center">
                                        Менеджер
                                    </p>

                                    <p className="team__item--live purple center">
                                        Россия, Новосибирск
                                    </p>
                                </div>

                                <button className="button team__item--button">
                                    Закажите консультацию
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer wow fadeIn">
                <div className="container">
                    <div className="footer__inner w100">
                        <div className="footer__logo--inner flex">
                            <p className="footer__logo wow fadeIn">
                                Itecho
                            </p>

                            <p className="footer__logo--text wow fadeIn" data-wow-delay=".2s">
                                Полезные приложения
                            </p>
                        </div>

                        <div className="footer__wrapper">
                            <div className="footer__nav flex">
                                <p className="footer__address">
                                    Новосибирск, Россия, ул. Красный проспект, д. 65 офис 48а
                                </p>

                                <a href="tel:73833542900" className="footer__phone">
                                    +7 (383) 354-29-00
                                </a>

                                <div className="footer__social--inner">
                                    <a href="https://google.com" className="footer__social--link">
                                        <img src="/assets/img/facebook.svg" alt="Соц сеть" className="footer__social--icon" />
                                    </a>

                                    <a href="https://google.com" className="footer__social--link">
                                        <img src="/assets/img/twitter.svg" alt="Соц сеть" className="footer__social--icon" />
                                    </a>

                                    <a href="https://google.com" className="footer__social--link">
                                        <img src="/assets/img/in.svg" alt="Соц сеть" className="footer__social--icon" />
                                    </a>

                                    <a href="https://google.com" className="footer__social--link">
                                        <img src="/assets/img/inst.svg" alt="Соц сеть" className="footer__social--icon" />
                                    </a>
                                </div>
                            </div>

                            <div className="footer__nav flex">
                                <a href="https://google.com" className="footer__nav--link">
                                    Домой
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Как это происходит?
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Наши клиенты
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Команда
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Связаться с нами
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Политика конфидиенциальности
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Этапы работ
                                </a>

                                <a href="https://google.com" className="footer__nav--link">
                                    Наши проекты
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;