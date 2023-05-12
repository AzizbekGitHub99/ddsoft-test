import React, { useState } from "react";
import "./Celebrates.scss";

const Celebrates = () => {
  const [aOpen, setAOpen] = useState(true);
  const [bOpen, setBOpen] = useState(false);
  const [cOpen, setCOpen] = useState(false);

  return (
    <div className="celebrates">
      {/* birinchi section */}
      <section className="c-first">
        <svg
          className="xb"
          width="144"
          height="144"
          viewBox="0 0 144 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M141.69 36.4343L141.67 36.4519L141.652 36.4705L110.588 67.5701C108.229 69.9316 108.229 74.0684 110.588 76.4299L141.652 107.53C143.231 109.11 143.231 111.982 141.652 113.563L113.431 141.815C111.853 143.395 108.987 143.395 107.409 141.815L76.3444 110.715C73.9849 108.353 69.851 108.353 67.4915 110.715L36.4273 141.815C34.849 143.395 31.9827 143.395 30.4044 141.815L2.18415 113.563C0.605281 111.982 0.605283 109.11 2.18415 107.53L33.2483 76.4299C35.6071 74.0684 35.6071 69.9316 33.2483 67.5701L2.18415 36.4705C0.605283 34.8898 0.605282 32.0182 2.18415 30.4375L30.4044 2.18503C31.9827 0.60499 34.849 0.60499 36.4273 2.18503L67.4915 33.2846C69.851 35.6468 73.9849 35.6468 76.3444 33.2846L107.409 2.18503C108.987 0.60499 111.853 0.60499 113.431 2.18503L141.652 30.4375C143.471 32.259 143.415 34.88 141.69 36.4343Z"
            stroke="url(#paint0_linear_163_6900)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_6900"
              x1="0"
              y1="72"
              x2="144"
              y2="72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="xs"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.1912 25.0746L98.1717 25.0922L98.1531 25.1108L76.5807 46.7078C74.8235 48.467 74.8235 51.533 76.5807 53.2923L98.1531 74.8892C99.1304 75.8676 99.1304 77.6685 98.1531 78.6469L78.5557 98.2667C77.579 99.2445 75.7822 99.2445 74.8055 98.2667L53.2331 76.6698C51.4753 74.9099 48.4108 74.9099 46.6529 76.6698L25.0805 98.2667C24.1039 99.2445 22.307 99.2445 21.3304 98.2667L1.73296 78.6469C0.755682 77.6685 0.75568 75.8676 1.73296 74.8892L23.3053 53.2923C25.0625 51.533 25.0625 48.467 23.3053 46.7078L1.73296 25.1108C0.755682 24.1324 0.755681 22.3315 1.73296 21.3531L21.3304 1.73332C22.307 0.75556 24.1039 0.75556 25.0805 1.73332L46.6529 23.3303C48.4108 25.0902 51.4753 25.0902 53.2331 23.3303L74.8055 1.73332C75.7822 0.75556 77.579 0.75556 78.5557 1.73332L98.1531 21.3531C99.3041 22.5054 99.2478 24.1226 98.1912 25.0746Z"
            stroke="url(#paint0_linear_163_4347)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4347"
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="tb"
          width="138"
          height="115"
          viewBox="0 0 138 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.239 2.5606L66.2435 2.5531C67.4596 0.519823 70.3349 0.436563 71.7718 2.57809L136.465 108.631L136.47 108.639C137.908 110.947 136.268 114 133.704 114H69H4.29608C1.73751 114 0.0788872 111.125 1.53977 108.623L66.239 2.5606Z"
            stroke="url(#paint0_linear_163_4353)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4353"
              x1="0"
              y1="57.5"
              x2="138"
              y2="57.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="ts"
          width="99"
          height="82"
          viewBox="0 0 99 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.4697 1.97163L47.4697 1.97165L47.4742 1.96414C48.2232 0.715796 50.0114 0.633165 50.929 1.9895L97.049 77.3532L97.054 77.3612C97.9692 78.8255 96.908 80.7278 95.3248 80.7278H49.1939H3.06291C1.48534 80.7278 0.405212 78.9509 1.34361 77.3452L47.4697 1.97163Z"
            stroke="url(#paint0_linear_163_4352)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4352"
              x1="0"
              y1="40.8639"
              x2="98.3877"
              y2="40.8639"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="cr"
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 127C29.2553 127 1 98.7447 1 64C1 29.2553 29.2553 1 64 1C98.7447 1 127 29.2553 127 64C127 98.9367 98.7467 127 64 127Z"
            stroke="url(#paint0_linear_163_4351)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4351"
              x1="0"
              y1="64"
              x2="128"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="l1"
          width="129"
          height="268"
          viewBox="0 0 129 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M127.59 0V140L1.0006 266.589"
            stroke="url(#paint0_linear_163_4356)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4356"
              x1="127.59"
              y1="266.589"
              x2="127.59"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="l2"
          width="341"
          height="133"
          viewBox="0 0 341 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 131.432L82.0843 46.3475H339.084V0"
            stroke="url(#paint0_linear_163_4354)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4354"
              x1="1"
              y1="131.432"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="l3"
          width="340"
          height="133"
          viewBox="0 0 340 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M339.084 131.432L258 46.3475H0.999664V0"
            stroke="url(#paint0_linear_163_4355)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_163_4355"
              x1="339.084"
              y1="131.432"
              x2="339.084"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7941D" />
              <stop offset="1" stop-color="#27AAE1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container">
          <div className="c-first-img"></div>
          <div className="c-first-title">
            <h1>Название мероприятия</h1>
            <h3>Подпись к названию</h3>
            <div className="spans">
              <p>
                Узнайте самые востребованные профессии, на которые более 113
                тысяч вакансий
              </p>
              <p>Выберите подходящую именно для вас</p>
              <p>
                Сделайте первые шаги к возможности выйти на доход более 100
                тысяч рублей
              </p>
            </div>
            <h2>Запишись сейчас</h2>
            <button>Записаться на интенсив</button>
          </div>
        </div>
      </section>

      {/* ikkinchi section */}
      <section className="c-second">
        <div className="container">
          <div className="c-owl">
            <p>
              Текст, призывающий записаться <br /> на мероприятие
            </p>
            <svg
              width="352"
              height="140"
              viewBox="0 0 352 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 1C9.95431 1 1 9.95431 1 21V91C1 102.046 9.9543 111 21 111H141V136.839C141 138.516 142.94 139.448 144.249 138.4L178.5 111H331C342.046 111 351 102.046 351 91V21C351 9.95431 342.046 1 331 1H21Z"
                fill="white"
              />
              <path
                d="M141 111H142V110H141V111ZM144.249 138.4L143.625 137.62L144.249 138.4ZM178.5 111V110H178.149L177.875 110.219L178.5 111ZM2 21C2 10.5066 10.5066 2 21 2V0C9.40202 0 0 9.40202 0 21H2ZM2 91V21H0V91H2ZM21 110C10.5066 110 2 101.493 2 91H0C0 102.598 9.40202 112 21 112V110ZM141 110H21V112H141V110ZM140 111V136.839H142V111H140ZM140 136.839C140 139.354 142.91 140.753 144.874 139.181L143.625 137.62C142.97 138.143 142 137.677 142 136.839H140ZM144.874 139.181L179.125 111.781L177.875 110.219L143.625 137.62L144.874 139.181ZM331 110H178.5V112H331V110ZM350 91C350 101.493 341.493 110 331 110V112C342.598 112 352 102.598 352 91H350ZM350 21V91H352V21H350ZM331 2C341.493 2 350 10.5066 350 21H352C352 9.40202 342.598 0 331 0V2ZM21 2H331V0H21V2Z"
                fill="url(#paint0_linear_163_4409)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_163_4409"
                  x1="1"
                  y1="69.9212"
                  x2="351"
                  y2="69.9212"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F7941D" />
                  <stop offset="1" stop-color="#27AAE1" />
                </linearGradient>
              </defs>
            </svg>

            <img src="../images/owl.png" alt="owl" />
          </div>
          <div className="c-boxes">
            <div className="box">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4726 6.77396L26.0355 0.336827C25.5864 -0.112276 24.788 -0.112276 24.3389 0.336827L17.253 7.42267C16.8039 7.87177 16.0055 7.87177 15.5564 7.42267L8.47057 0.336827C8.02147 -0.112276 7.22307 -0.112276 6.77396 0.336827L0.336827 6.77396C-0.112276 7.22307 -0.112276 8.02147 0.336827 8.47058L7.42266 15.5564C7.87176 16.0055 7.87176 16.8039 7.42266 17.253L0.336827 24.3389C-0.112276 24.788 -0.112276 25.5864 0.336827 26.0355L6.77396 32.4726C7.22307 32.9217 8.02147 32.9217 8.47057 32.4726L15.5564 25.3868C16.0055 24.9377 16.8039 24.9377 17.253 25.3868L24.3389 32.4726C24.788 32.9217 25.5864 32.9217 26.0355 32.4726L32.4726 26.0355C32.9217 25.5864 32.9217 24.788 32.4726 24.3389L25.3868 17.253C24.9377 16.8039 24.9377 16.0055 25.3868 15.5564L32.4726 8.47058C32.9716 8.02147 32.9716 7.27297 32.4726 6.77396Z"
                  fill="#00093C"
                />
              </svg>
              <h3>Заголовок</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
            <div className="box">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4671 32.9342C7.38524 32.9342 0 25.549 0 16.4671C0 7.38524 7.38524 0 16.4671 0C25.549 0 32.9342 7.38524 32.9342 16.4671C32.9342 25.5989 25.549 32.9342 16.4671 32.9342Z"
                  fill="#00093C"
                />
              </svg>

              <h3>Заголовок</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
            <div className="box">
              <svg
                width="39"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0524 0.561378L0.188112 29.7531C-0.310891 30.6014 0.238012 31.6493 1.18612 31.6493H19.0504H36.9147C37.8628 31.6493 38.4117 30.5515 37.9127 29.7531L20.0484 0.561378C19.5494 -0.187126 18.5015 -0.187126 18.0524 0.561378Z"
                  fill="#00093C"
                />
              </svg>

              <h3>Заголовок</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras
                condimentum, ligula eget
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* uchinchi section */}
      <section className="c-third">
        <div className="container">
          <svg
            className="cr"
            width="149"
            height="149"
            viewBox="0 0 149 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.5 148C33.9644 148 1 115.036 1 74.5C1 33.9644 33.9644 1 74.5 1C115.036 1 148 33.9644 148 74.5C148 115.259 115.038 148 74.5 148Z"
              stroke="url(#paint0_linear_163_6905)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_163_6905"
                x1="0"
                y1="74.5"
                x2="149"
                y2="74.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F7941D" />
                <stop offset="1" stop-color="#27AAE1" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="tr"
            width="138"
            height="115"
            viewBox="0 0 138 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.239 2.5606L66.2435 2.5531C67.4596 0.519823 70.3349 0.436563 71.7718 2.57809L136.465 108.631L136.47 108.639C137.908 110.947 136.268 114 133.704 114H69H4.29608C1.73751 114 0.0788872 111.125 1.53977 108.623L66.239 2.5606Z"
              stroke="url(#paint0_linear_163_6907)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_163_6907"
                x1="0"
                y1="57.5"
                x2="138"
                y2="57.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F7941D" />
                <stop offset="1" stop-color="#27AAE1" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="ex"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M177.28 45.7286L177.26 45.7462L177.242 45.7648L138.411 84.6393C135.56 87.4936 135.56 92.5064 138.411 95.3607L177.242 134.235C179.313 136.309 179.313 140.056 177.242 142.13L141.966 177.445C139.896 179.518 136.154 179.518 134.084 177.445L95.2536 138.571C92.402 135.716 87.3929 135.716 84.5413 138.571L45.711 177.445C43.6405 179.518 39.8991 179.518 37.8286 177.445L2.55331 142.13C0.482231 140.056 0.482227 136.309 2.55331 134.235L41.3835 95.3607C44.2346 92.5064 44.2346 87.4936 41.3835 84.6393L2.55331 45.7648C0.482229 43.6913 0.482229 39.9436 2.55331 37.8702L37.8286 2.55461C39.8991 0.481796 43.6405 0.481796 45.711 2.55461L84.5413 41.4291C87.3929 44.2841 92.402 44.2841 95.2536 41.4291L134.084 2.55461C136.154 0.481796 139.896 0.481796 141.966 2.55461L177.242 37.8702C179.608 40.2393 179.552 43.6816 177.28 45.7286Z"
              stroke="url(#paint0_linear_163_6906)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_163_6906"
                x1="0"
                y1="90"
                x2="180"
                y2="90"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F7941D" />
                <stop offset="1" stop-color="#27AAE1" />
              </linearGradient>
            </defs>
          </svg>

          <h2>Программа мероприятия</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo vestibulum eros. Cras dignissim mi quis
            fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor
            venenatis vel. In hac habitasse platea dictumst.
          </p>
          <div className="days">
            <div
              className={aOpen ? "day d-open" : "day"}
              onClick={(e) => {
                setAOpen(!aOpen);
                setBOpen(false);
                setCOpen(false);
              }}
            >
              <h3>
                День первый
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8.07031H15.1421"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.07129 0.999268V15.1414"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </h3>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, neque sit amet aliquam cursus, ante urna porta
                  mauris, eget venenatis risus turpis ac nisl. Aenean blandit,
                  nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in
                  auctor mauris lacus sed nibh. Quisque id imperdiet metus, non
                  semper dui. Phasellus pellentesque vitae leo in dapibus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
                  dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo,
                  sit amet placerat arcu sem id sem.
                </p>
              </div>
            </div>
            <div
              className={bOpen ? "day d-open" : "day"}
              onClick={(e) => {
                setBOpen(!bOpen);
                setAOpen(false);
                setCOpen(false);
              }}
            >
              <h3>
                День второй
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8.07031H15.1421"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.07129 0.999268V15.1414"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </h3>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, neque sit amet aliquam cursus, ante urna porta
                  mauris, eget venenatis risus turpis ac nisl. Aenean blandit,
                  nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in
                  auctor mauris lacus sed nibh. Quisque id imperdiet metus, non
                  semper dui. Phasellus pellentesque vitae leo in dapibus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
                  dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo,
                  sit amet placerat arcu sem id sem.
                </p>
              </div>
            </div>
            <div
              className={cOpen ? "day d-open" : "day"}
              onClick={(e) => {
                setCOpen(!cOpen);
                setAOpen(false);
                setBOpen(false);
              }}
            >
              <h3>
                День третий
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8.07031H15.1421"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.07129 0.999268V15.1414"
                      stroke="#00093C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </h3>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  dignissim, neque sit amet aliquam cursus, ante urna porta
                  mauris, eget venenatis risus turpis ac nisl. Aenean blandit,
                  nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in
                  auctor mauris lacus sed nibh. Quisque id imperdiet metus, non
                  semper dui. Phasellus pellentesque vitae leo in dapibus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Suspendisse id aliquam nunc. Sed
                  dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo,
                  sit amet placerat arcu sem id sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* to'rtinchi section */}
      <section className="c-fourth">
        <h1>Мероприятие проводят</h1>
        <div className="img-box">
          <img src="../images/consul.png" alt="" />
          <img src="../images/consul.png" alt="" />
          <img src="../images/consul.png" alt="" />
          <img src="../images/consul.png" alt="" />
        </div>
      </section>

      {/* beshinchi section */}
      <section className="c-fifth">
        <div className="container">
          <h2>Фотографии с прошлых мероприятий</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo.
          </p>
        </div>
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates1.png" alt="slide" />
            </div>
            <div className="slide">
              <img src="../images/celebrates2.png" alt="slide" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Celebrates;
