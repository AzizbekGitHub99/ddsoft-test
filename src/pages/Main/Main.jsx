import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      {/* birinchi section */}

      <section className="m-first">
        <div className="clearfix"></div>
        <div className="m-first-decor">
          <div className="decor-in"></div>
        </div>
      </section>

      {/* ikkinchi section */}

      <section className="m-second">
        <div className="container">
          <div className="m-second-owl">
            <div className="owl">
              <p>
                <span>Кем вы хотите стать?</span> <br /> <br />
                Пора найти себя <br />
                и выбрать подходящий <br />
                курс :) <br /> <br />
                Удачи!
              </p>
              <svg
                width="262"
                height="220"
                viewBox="0 0 262 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 1C9.95431 1 1 9.95431 1 21V171C1 182.046 9.9543 191 21 191H141V216.839C141 218.516 142.94 219.448 144.249 218.4L178.5 191H241C252.046 191 261 182.046 261 171V21C261 9.95431 252.046 1 241 1H21Z"
                  fill="white"
                />
                <path
                  d="M141 191H142V190H141V191ZM144.249 218.4L143.625 217.62L144.249 218.4ZM178.5 191V190H178.149L177.875 190.219L178.5 191ZM2 21C2 10.5066 10.5066 2 21 2V0C9.40202 0 0 9.40202 0 21H2ZM2 171V21H0V171H2ZM21 190C10.5066 190 2 181.493 2 171H0C0 182.598 9.40202 192 21 192V190ZM141 190H21V192H141V190ZM140 191V216.839H142V191H140ZM140 216.839C140 219.354 142.91 220.753 144.874 219.181L143.625 217.62C142.97 218.143 142 217.677 142 216.839H140ZM144.874 219.181L179.125 191.781L177.875 190.219L143.625 217.62L144.874 219.181ZM241 190H178.5V192H241V190ZM260 171C260 181.493 251.493 190 241 190V192C252.598 192 262 182.598 262 171H260ZM260 21V171H262V21H260ZM241 2C251.493 2 260 10.5066 260 21H262C262 9.40202 252.598 0 241 0V2ZM21 2H241V0H21V2Z"
                  fill="url(#paint0_linear_64_4047)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_64_4047"
                    x1="1"
                    y1="109.921"
                    x2="261"
                    y2="109.921"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7941D" />
                    <stop offset="1" stop-color="#27AAE1" />
                  </linearGradient>
                </defs>
              </svg>
              <img src="../images/owl.png" alt="owl" />
            </div>
          </div>
          <div className="m-second-favorite">
            <div className="ages">
              <img src="../images/children.png" alt="" />
              <img src="../images/young.png" alt="" />
              <img src="../images/adult.png" alt="" />
            </div>
            <div className="progressbar">
              <div className="bar"></div>
            </div>
            <div className="courses">
              <Link to={"/"} className="course">
                Робототехника
              </Link>
              <Link to={"/"} className="course">
                Создание игр
              </Link>
              <Link to={"/"} className="course">
                Web-разработка
              </Link>
              <Link to={"/"} className="course">
                Мультимедиа
              </Link>
              <Link to={"./chess"} className="course">
                Шахматы
              </Link>
              <Link to={"/"} className="course">
                3D-моделирование и дизайн
              </Link>
              <Link to={"/"} className="course">
                Английский язык
              </Link>
              <Link to={"/"} className="course">
                Блогинг
              </Link>
              <Link to={"/"} className="course">
                Soft skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* uchinchi section */}

      <section className="m-third">
        <div className="container">
          <div className="video-box">
            <svg
              className="svg-one"
              width="165"
              height="137"
              viewBox="0 0 165 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.8653 2.94796L78.8698 2.94045C80.3996 0.390727 84.0096 0.307454 85.7956 2.96528L162.984 129.098L162.989 129.106C164.772 131.959 162.757 135.77 159.524 135.77H82.3251H5.12573C1.89957 135.77 -0.135345 132.171 1.67051 129.09C1.67196 129.088 1.6734 129.085 1.67485 129.083L78.8653 2.94796Z"
                fill="white"
                stroke="url(#paint0_linear_64_4051)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_64_4051"
                  x1="0"
                  y1="68.385"
                  x2="164.65"
                  y2="68.385"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7941D" />
                  <stop offset="1" stop-color="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="svg-two"
              width="352"
              height="351"
              viewBox="0 0 352 351"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0V180H181L351 350"
                stroke="url(#paint0_linear_64_4054)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_64_4054"
                  x1="1"
                  y1="175"
                  x2="351"
                  y2="175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7941D" />
                  <stop offset="1" stop-color="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="svg-three"
              width="281"
              height="132"
              viewBox="0 0 281 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 131H150L280 1"
                stroke="url(#paint0_linear_64_4053)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_64_4053"
                  x1="0"
                  y1="66"
                  x2="280"
                  y2="66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7941D" />
                  <stop offset="1" stop-color="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="svg-four"
              width="230"
              height="230"
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M226.71 58.8085L226.691 58.8261L226.672 58.8447L177.056 108.461C173.521 111.996 173.521 118.22 177.056 121.755L226.672 171.372C229.426 174.126 229.426 179.083 226.672 181.838L181.598 226.912C178.844 229.666 173.887 229.666 171.133 226.912L121.516 177.295C117.981 173.76 111.757 173.76 108.222 177.295L58.6054 226.912C55.8512 229.666 50.8939 229.666 48.1397 226.912L3.06563 181.838C0.311455 179.083 0.311455 174.126 3.06563 171.372L52.682 121.755C56.2172 118.22 56.2172 111.996 52.682 108.461L3.06563 58.8447C0.311455 56.0906 0.311456 51.1331 3.06563 48.3789L48.1397 3.30489C50.8939 0.550713 55.8512 0.550713 58.6054 3.30489L108.222 52.9213C111.757 56.4565 117.981 56.4565 121.516 52.9213L171.133 3.30489C173.887 0.550713 178.844 0.550713 181.598 3.30489L226.672 48.3789C229.798 51.5044 229.741 56.0808 226.71 58.8085Z"
                fill="white"
                stroke="url(#paint0_linear_64_4046)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_64_4046"
                  x1="0"
                  y1="115.108"
                  x2="230"
                  y2="115.108"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7941D" />
                  <stop offset="1" stop-color="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="video">
              <img src="../images/vrchild.png" alt="" />
              <svg
                width="99"
                height="99"
                viewBox="0 0 99 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="49.127"
                  cy="49.127"
                  r="48.127"
                  fill="white"
                  stroke="url(#paint0_linear_64_4110)"
                  stroke-width="2"
                />
                <path
                  d="M70.8024 50.0019L35.2714 70.5157L35.2714 29.4881L70.8024 50.0019Z"
                  fill="url(#paint1_linear_64_4110)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_64_4110"
                    x1="0"
                    y1="49.1269"
                    x2="98.2539"
                    y2="49.1269"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7941D" />
                    <stop offset="1" stop-color="#27AAE1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_64_4110"
                    x1="23.4277"
                    y1="26.3146"
                    x2="70.8024"
                    y2="26.3146"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7941D" />
                    <stop offset="1" stop-color="#27AAE1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="m-third-info">
            <h1>
              Актуальные знания от признанных экспертов рынка для новичков и
              практикующих специалистов.
            </h1>
            <div className="infos">
              <div className="info">
                <div className="info-number">600</div>
                <div className="info-title">Курсов</div>
              </div>
              <div className="info">
                <div className="info-number">82</div>
                <div className="info-title">Ведущих преподавателей</div>
              </div>
              <div className="info">
                <div className="info-number">14 795</div>
                <div className="info-title">Выпускников</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* to'rtinchi section */}

      <section className="m-fourth">
        <div className="container">
          <div className="m-fourth-items">
            <div className="item one">
              <div className="data">
                <span>25</span> <br />
                ноября
              </div>
              <div className="item-info">
                <h1 className="title">День открытых дверей </h1>
                <p>
                  Приглашаем всех желающих на бесплатную экскурсию в мир
                  востребованных профессий и полезных навыков
                </p>
              </div>
              <div className="button">
                Записаться
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.87354 1.99658L7.68115 7.56201L1.87354 12.9655"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="item two">
              <img className="icon" src="../images/monitor.png" alt="monitor"></img>
              <div className="item-info">
                <h1>Программы обучения</h1>
                <p>
                  В списке наших курсов вы сможете найти профессию и занятие по
                  душе, изучить новое и получить практические знания, которые
                  помогут получить работу мечты.
                </p>
              </div>
              <div className="button">
                Подробнее
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.87354 1.99658L7.68115 7.56201L1.87354 12.9655"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="item three">
              <img src="../images/newspaper.png" alt="" className="icon" />
              <div className="item-info">
                <h1>Новости Академии</h1>
              </div>
            </div>
            <div className="item four">
              <img src="../images/diagram.png" alt="" className="icon" />
              <div className="item-info">
                <h1>Мир IT</h1>
              </div>
            </div>
            <div className="item five">
              <img src="../images/logoicon.png" alt="" className="icon" />
              <div className="item-info">
                <h1>Попробуй!</h1>
                <p>
                  Пройдите тест и узнайте свои способности в сфере
                  информационных технологий
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* beshinchi section */}

      <section className="m-fifth">
        <h2>Отзывы наших студентов</h2>
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/slide2.png" alt="slide" />
            </div>
          </div>
        </div>
      </section>

      {/* oltinchi section */}

      <section className="m-sixth">
        <div className="container">
          <h1>Добро пожаловать в Академию будущего ХОД</h1>
          <div className="m-sixth-boxes">
            <div className="box">
              <img src="../images/gears.png" alt="" />
              <p>Передовой подход к образовательному процессу</p>
            </div>
            <div className="box">
              <img src="../images/book.png" alt="" />
              <p>Непрерывное усовершенствование и пополнение базы курсов</p>
            </div>
            <div className="box">
              <img src="../images/teacher.png" alt="" />
              <p>Только практикующие преподаватели</p>
            </div>
            <div className="box">
              <img src="../images/helper.png" alt="" />
              <p>Сопровождение на всех этапах. От начала обучения до трудоустройства</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
