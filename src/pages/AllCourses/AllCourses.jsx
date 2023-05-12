import React, { useRef, useState } from "react";
import "./AllCourses.scss";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const colors = [
    "#C7EEFF",
    "#FFCE94",
    "#FFE38E",
    "#DDDDFF",
    "#B8EFCF",
    "#C7EEFF",
    "#C5DDFF",
    "#FFE9A8",
    "#FFEEF6",
    "#DDDDFF",
  ];

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(25);
  const [leftPer, setLeftPer] = useState(0);
  const [rightPer, setRightPer] = useState(0);
  const min__ref = useRef();
  const max__ref = useRef();

  const modalCancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const setValue = (e) => {
    e.preventDefault();
    if (max__ref.current.value - min__ref.current.value > 1) {
      if (e.target.id === "min") {
        setMinValue(min__ref.current.value);
        setLeftPer((min__ref.current.value / 25) * 100);
      }
      if (e.target.id === "max") {
        setMaxValue(max__ref.current.value);
        setRightPer(100 - (max__ref.current.value / 25) * 100);
      }
    }
  };

  return (
    <div className="allCourses">
      <div className="container">
        <h1>Все программы обучения</h1>
        <div className="ac-box">
          <div className="ac-filter">
            {filter ? (
              <h2
                onClick={(e) => {
                  setFilter(!filter);
                }}
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3H0" stroke="#151F34" stroke-width="2" />
                  <path d="M17 3H14" stroke="#151F34" stroke-width="2" />
                  <circle
                    cx="10"
                    cy="3"
                    r="2"
                    stroke="#151F34"
                    stroke-width="2"
                  />
                  <path d="M9 12H17" stroke="#151F34" stroke-width="2" />
                  <path d="M0 12H3" stroke="#151F34" stroke-width="2" />
                  <circle
                    cx="3"
                    cy="3"
                    r="2"
                    transform="matrix(-1 0 0 1 10 9)"
                    stroke="#151F34"
                    stroke-width="2"
                  />
                </svg>
                Фильтры{" "}
                <p>
                  <svg
                    className="ex"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L10.9993 10.9993"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 1L1.00072 10.9993"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </p>
              </h2>
            ) : (
              <h2
                onClick={(e) => {
                  setFilter(!filter);
                }}
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3H0" stroke="#151F34" stroke-width="2" />
                  <path d="M17 3H14" stroke="#151F34" stroke-width="2" />
                  <circle
                    cx="10"
                    cy="3"
                    r="2"
                    stroke="#151F34"
                    stroke-width="2"
                  />
                  <path d="M9 12H17" stroke="#151F34" stroke-width="2" />
                  <path d="M0 12H3" stroke="#151F34" stroke-width="2" />
                  <circle
                    cx="3"
                    cy="3"
                    r="2"
                    transform="matrix(-1 0 0 1 10 9)"
                    stroke="#151F34"
                    stroke-width="2"
                  />
                </svg>
                Фильтры
              </h2>
            )}
            <div
              className={filter ? "filter-settings f-open" : "filter-settings"}
            >
              <div className="setting">
                <h2>Уровень сложности</h2>

                <label htmlFor="l1">
                  <input type="radio" defaultChecked name="l" id="l1" />
                  <span></span>
                  Новичок
                </label>

                <label htmlFor="l2">
                  <input type="radio" name="l" id="l2" />
                  <span></span>
                  Пользователь
                </label>

                <label htmlFor="l3">
                  <input type="radio" name="l" id="l3" />
                  <span></span>
                  Профессионал
                </label>

                <label htmlFor="l4">
                  <input type="radio" name="l" id="l4" />
                  <span></span>
                  Читер
                </label>
              </div>
              <hr />
              <div className="setting">
                <h2>Тип обучения</h2>

                <label htmlFor="s1">
                  <input type="radio" defaultChecked name="s" id="s1" />
                  <span></span>
                  Любой
                </label>

                <label htmlFor="s2">
                  <input type="radio" name="s" id="s2" />
                  <span></span>
                  Профессия
                </label>

                <label htmlFor="s3">
                  <input type="radio" name="s" id="s3" />
                  <span></span>
                  Курс
                </label>
              </div>
              <hr />
              <div className="setting">
                <h2>Длительность</h2>
                <p>
                  от {minValue} до {maxValue} месяцев
                </p>
                <br />
                <div className="double-range">
                  <input
                    type="range"
                    name="min"
                    ref={min__ref}
                    id="min"
                    min={0}
                    max={25}
                    defaultValue={0}
                    onChange={(e) => {
                      setValue(e);
                    }}
                  />
                  <input
                    type="range"
                    name="max"
                    ref={max__ref}
                    id="max"
                    min={0}
                    max={25}
                    defaultValue={25}
                    onChange={(e) => {
                      setValue(e);
                    }}
                  />
                  <div className="dr-slider">
                    <div className="track"></div>
                    <div
                      className="progress"
                      style={{ left: leftPer + "%", right: rightPer + "%" }}
                    ></div>
                    <div className="thumb min" style={{ left: leftPer + "%" }}>
                      <span></span>
                    </div>
                    <div
                      className="thumb max"
                      style={{ right: rightPer + "%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ac-main">
            <div className="ac-favorite">
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
                <Link to={"/"} className="course">
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
            <div className="ac-programms">
              {colors.map((el) => (
                <div
                  style={{ backgroundColor: el }}
                  className="programm"
                  onClick={() => setOpen(true)}
                >
                  <p>Программа</p> <br />
                  <h2>
                    <svg
                      width="27"
                      height="43"
                      viewBox="0 0 27 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1.40625"
                        width="24.0406"
                        height="40"
                        rx="3"
                        stroke="#00093C"
                        stroke-width="2"
                      />
                      <path
                        d="M12.0342 37.4102H14.0342"
                        stroke="#00093C"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15.0415 29.4711L21.0297 29.4709"
                        stroke="#00093C"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18.0355 26.4769L18.0356 32.4651"
                        stroke="#00093C"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <mask id="path-5-inside-1_64_7723" fill="white">
                        <rect
                          x="4.04736"
                          y="5.38672"
                          width="7.90212"
                          height="7.90212"
                          rx="1"
                        />
                      </mask>
                      <rect
                        x="4.04736"
                        y="5.38672"
                        width="7.90212"
                        height="7.90212"
                        rx="1"
                        stroke="#00093C"
                        stroke-width="4"
                        mask="url(#path-5-inside-1_64_7723)"
                      />
                      <mask id="path-6-inside-2_64_7723" fill="white">
                        <rect
                          x="14.0342"
                          y="5.38672"
                          width="8.00441"
                          height="8.00441"
                          rx="1"
                        />
                      </mask>
                      <rect
                        x="14.0342"
                        y="5.38672"
                        width="8.00441"
                        height="8.00441"
                        rx="1"
                        stroke="#00093C"
                        stroke-width="4"
                        mask="url(#path-6-inside-2_64_7723)"
                      />
                      <mask id="path-7-inside-3_64_7723" fill="white">
                        <rect
                          x="4.04736"
                          y="15.4534"
                          width="7.90212"
                          height="7.90212"
                          rx="1"
                        />
                      </mask>
                      <rect
                        x="4.04736"
                        y="15.4534"
                        width="7.90212"
                        height="7.90212"
                        rx="1"
                        stroke="#00093C"
                        stroke-width="4"
                        mask="url(#path-7-inside-3_64_7723)"
                      />
                      <mask id="path-8-inside-4_64_7723" fill="white">
                        <rect
                          x="14.0342"
                          y="15.4534"
                          width="8.00441"
                          height="8.00441"
                          rx="1"
                        />
                      </mask>
                      <rect
                        x="14.0342"
                        y="15.4534"
                        width="8.00441"
                        height="8.00441"
                        rx="1"
                        stroke="#00093C"
                        stroke-width="4"
                        mask="url(#path-8-inside-4_64_7723)"
                      />
                      <mask id="path-9-inside-5_64_7723" fill="white">
                        <rect
                          x="4.04736"
                          y="25.5198"
                          width="7.90212"
                          height="7.90212"
                          rx="1"
                        />
                      </mask>
                      <rect
                        x="4.04736"
                        y="25.5198"
                        width="7.90212"
                        height="7.90212"
                        rx="1"
                        stroke="#00093C"
                        stroke-width="4"
                        mask="url(#path-9-inside-5_64_7723)"
                      />
                    </svg>
                    <span>
                      «Разработка мобильных <br /> приложений»
                    </span>
                  </h2>{" "}
                  <br />
                  <p>
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>{" "}
                  <br />
                  <p>24 месяца</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={open ? "modal active" : "modal"}
        onClick={() => setOpen(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h2> </h2>
            <span onClick={(e) => modalCancel(e)}>X</span>
          </div>
          <div className="m-container">
            <div className="oh-left">
              <div className="l-owl">
                <p>
                  <span>Помочь с выбором?</span> <br /> <br />
                  Оставьте заявку и наши специалисты <br />
                  свяжутся с вами, ответят на все вопросы <br />
                  и подберут подходящий вариант <br />
                  обучения.
                </p>
                <svg
                  width="420"
                  height="192"
                  viewBox="0 0 420 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.8947 1C38.849 1 29.8947 9.95431 29.8947 21V101H3.21884C1.54183 101 0.609485 102.94 1.6571 104.249L29.8947 139.546V171C29.8947 182.046 38.849 191 49.8947 191H399C410.046 191 419 182.046 419 171V21C419 9.95431 410.046 1 399 1H49.8947Z"
                    fill="white"
                  />
                  <path
                    d="M29.8947 101V102H30.8947V101H29.8947ZM1.6571 104.249L0.876235 104.874H0.876235L1.6571 104.249ZM29.8947 139.546H30.8947V139.196L30.6756 138.922L29.8947 139.546ZM30.8947 21C30.8947 10.5066 39.4013 2 49.8947 2V0C38.2967 0 28.8947 9.40202 28.8947 21H30.8947ZM30.8947 101V21H28.8947V101H30.8947ZM29.8947 100H3.21884V102H29.8947V100ZM3.21884 100C0.703319 100 -0.695192 102.91 0.876235 104.874L2.43797 103.625C1.91416 102.97 2.38034 102 3.21884 102V100ZM0.876235 104.874L29.1138 140.171L30.6756 138.922L2.43797 103.625L0.876235 104.874ZM30.8947 171V139.546H28.8947V171H30.8947ZM49.8947 190C39.4013 190 30.8947 181.493 30.8947 171H28.8947C28.8947 182.598 38.2967 192 49.8947 192V190ZM399 190H49.8947V192H399V190ZM418 171C418 181.493 409.493 190 399 190V192C410.598 192 420 182.598 420 171H418ZM418 21V171H420V21H418ZM399 2C409.493 2 418 10.5066 418 21H420C420 9.40202 410.598 0 399 0V2ZM49.8947 2H399V0H49.8947V2Z"
                    fill="url(#paint0_linear_64_6705)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_64_6705"
                      x1="1.21509"
                      y1="96"
                      x2="419"
                      y2="96"
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
            <div className="oh-right">
              <input type="text" placeholder="Ваше имя" className="one" />
              <input type="text" placeholder="Ваш телефон" className="two" />
              <input type="text" placeholder="Ваш e-mail" className="three" />
              <span className="four">
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных
                и с правилами пользования Платформой
              </span>
              <button className="five">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
