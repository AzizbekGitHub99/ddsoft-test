import React from "react";
import "./owlHelper.scss";

const OwlHelper = () => {
  return (
    <div className="owl-helper">
      <div className="container">
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
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с
            правилами пользования Платформой
          </span>
          <button className="five">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default OwlHelper;
