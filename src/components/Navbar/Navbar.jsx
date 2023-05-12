import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const ddMenu = [
    "Дзержинск",
    "Нижний Новгород",
    "On-line",
    "Альметьевск",
    "Анапа",
  ];
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Нижний Новгород");
  const [isBurger, setIsBurger] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-logo">
          <Link to={"/"}>
            <img src="../images/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className={isBurger ? "nav-menu" : "nav-menu nopen"}>
          <li className="menu-item">
            <Link to={"/allCourses"}>
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1.51392"
                  width="18"
                  height="4.99717"
                  rx="1"
                  stroke="#00093C"
                  stroke-width="2"
                />
                <rect
                  x="1"
                  y="10.4858"
                  width="18"
                  height="5"
                  rx="1"
                  stroke="#00093C"
                  stroke-width="2"
                />
              </svg>
              Все курсы
            </Link>
          </li>
          <li className="menu-item">
            <Link to={"/celebrates"}>Мероприятия</Link>
          </li>
          <li className="menu-item">
            <Link to={"#"}>Базы знаний</Link>
          </li>
          <li className="menu-item">
            <Link to={"#"}>Карьера</Link>
          </li>
          <li className="menu-item dropdown">
            <Link
              className="dropdown-btn"
              onClick={(e) => {
                setIsActive(!isActive);
              }}
            >
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.5C16 11.3282 14.13 13.9545 12.0535 15.9699C11.036 16.9575 10.0146 17.754 9.24613 18.304C8.95504 18.5123 8.70155 18.6843 8.5 18.8171C8.29845 18.6843 8.04496 18.5123 7.75387 18.304C6.98537 17.754 5.96395 16.9575 4.94648 15.9699C2.86999 13.9545 1 11.3282 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
                  stroke="#00093C"
                  stroke-width="2"
                />
                <circle cx="8.5" cy="7.5" r="2.5" fill="#00093C" />
              </svg>
              {selected}
              <svg
                className={isActive ? "dopen" : "dclose"}
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#00093C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
            {isActive && (
              <div className="dropdown-content">
                <div className="dropdown-name">
                  <h1>Выберите свой город</h1>
                  <span
                    onClick={(e) => {
                      setIsActive(false);
                    }}
                  >
                    &#9932;
                  </span>
                </div>
                <div className="dropdown-items">
                  {ddMenu.map((el) => (
                    <div
                      onClick={(e) => {
                        setSelected(el);
                        setIsActive(!isActive);
                      }}
                      className="dropdown-item"
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li className="menu-item">
            <Link to={"#"}>8 800 950-33-98</Link>
          </li>
          <li className="menu-item">
            <Link to={"#"}>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.18024"
                  y="1"
                  width="6.63833"
                  height="8.41108"
                  rx="3.31917"
                  stroke="#00093C"
                  stroke-width="2"
                />
                <path
                  d="M1 15.4111C1 13.7543 2.34315 12.4111 4 12.4111H13.2795C14.9364 12.4111 16.2795 13.7543 16.2795 15.4111V16.3229C16.2795 16.8752 15.8318 17.3229 15.2795 17.3229H2C1.44772 17.3229 1 16.8752 1 16.3229V15.4111Z"
                  stroke="#00093C"
                  stroke-width="2"
                />
              </svg>
              Войти
            </Link>
          </li>
        </ul>
        <div
          className={isBurger ? "burger bopen" : "burger bclose"}
          onClick={(e) => {
            setIsBurger(!isBurger);
          }}
        >
          {isBurger ? (
            <svg
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
          ) : (
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1406 1H0.999512"
                stroke="#00093C"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M19.1406 7.05469H6.13096"
                stroke="#00093C"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M19.1406 13.0508H0.999512"
                stroke="#00093C"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
