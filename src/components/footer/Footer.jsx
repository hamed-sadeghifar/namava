import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaAngleUp,
} from "react-icons/fa";

import enamad from "../../assets/namad/enamad.png";
import namad from "../../assets/namad/logo.png";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const placeholderRef = useRef(null);
  const topFooterRef = useRef(null);
  const [fixed, setFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const topFooterHeight = topFooterRef.current.offsetHeight;
      const rect = placeholderRef.current.getBoundingClientRect();
      setFixed(rect.top > window.innerHeight - topFooterHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="mt-16 pb-8 bg-zinc-900">
      <div ref={placeholderRef}>
        <div
          className={`flex justify-around text-mist-300 bg-zinc-800 text-sm py-2
            ${fixed ? "fixed bottom-0 left-0 w-full z-50" : ""}`}
          ref={topFooterRef}
        >
          <p className="cursor-pointer hover:text-mist-100">اپلیکیشن‌ها</p>
          <p className="cursor-pointer hover:text-mist-100">فرصت‌های شغلی</p>
          <p className="cursor-pointer hover:text-mist-100">تبلیغات در نماوا</p>
          <p className="cursor-pointer hover:text-mist-100">خرید اشتراک</p>
          <p className="cursor-pointer hover:text-mist-100">کارت هدیه</p>
          <p className="cursor-pointer hover:text-mist-100">سوالات متداول</p>
          <p className="cursor-pointer hover:text-mist-100">تماس با ما</p>
          <p className="cursor-pointer hover:text-mist-100">درباره نماوا</p>
          <div className="flex items-center cursor-pointer hover:text-mist-100">
            <span>سایر لینک‌ها</span>
            <FaAngleUp className="text-xl mr-1" />
          </div>
        </div>
      </div>
      <div className="mx-47">
        <div className="bg-zinc-800 my-5 rounded-sm py-4 px-6 flex justify-between">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-lg w-18 h-18 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="30"
                viewBox="0 0 47 30"
                fill="#ffffff"
              >
                <path d="M14.022 17.41l-1.5.17v-.044a2.35 2.35 0 0 1-.274.037 12.87 12.87 0 0 1-2.95.1c-.456-.048-.906-.135-1.347-.26a2.47 2.47 0 0 1-.882-.435 1.9 1.9 0 0 1-.164-.148 1.99 1.99 0 0 1-.51-.9 2.72 2.72 0 0 1-.071-.347.44.44 0 0 1 0-.089v-4.088c.001-.27.04-.54.113-.8.033-.11.074-.216.124-.318a2.08 2.08 0 0 1 .349-.507l.027-.026a1.81 1.81 0 0 1 .514-.334 6.3 6.3 0 0 1 1.626-.438c.588-.088 1.18-.14 1.774-.153h.487l1.216.05c.55.04 1.094.118 1.632.235a3.35 3.35 0 0 1 1.527.667.42.42 0 0 1 .036.033c.167.18.298.388.387.616.023.06.043.12.06.183a2.01 2.01 0 0 1 .074.542v8.435a2.19 2.19 0 0 1-.062.533 1.78 1.78 0 0 1-.763 1.064 3.6 3.6 0 0 1-1.329.5l-.127.024a12.41 12.41 0 0 1-1.417.15l-1.35.026-.3-.01c-.796-.014-1.6-.083-2.377-.206l-.212-.068a.41.41 0 0 1-.241-.477 2.26 2.26 0 0 1 .1-.376c.035-.1.086-.192.15-.275a.7.7 0 0 1 .687-.245l.38.04a31.14 31.14 0 0 0 2.479.081l.192-.005c.468-.01.934-.07 1.4-.175.17-.036.325-.122.446-.246a.49.49 0 0 0 .12-.333V17.41zm0-1.733v-4.39a.4.4 0 0 0-.026-.147c-.02-.053-.053-.1-.093-.14-.405-.228-.862-.35-1.327-.356l-.6-.047a12.45 12.45 0 0 0-1.506.015c-.486.026-.967.104-1.436.232-.1.028-.19.08-.264.15a.57.57 0 0 0-.119.163 1.51 1.51 0 0 0-.113.638v3.528c.01.085.036.168.073.245a.47.47 0 0 0 .113.147.59.59 0 0 0 .169.1.75.75 0 0 0 .084.027 1.34 1.34 0 0 0 .165.039 11.42 11.42 0 0 0 3.338-.029l.262-.033.236-.033c.035-.005.07-.005.106 0zM3.037 8.807h.8a1.21 1.21 0 0 1 .853.352l.026.027a1.2 1.2 0 0 1 .16.21 1.18 1.18 0 0 1 .17.609v11.46a.4.4 0 0 1-.406.4h-.8a1.14 1.14 0 0 1-.484-.109c-.14-.065-.266-.156-.372-.267a1.27 1.27 0 0 1-.355-.86V9.21c.008-.22.187-.396.408-.4zm15.07 0h.735c.457-.001.875.256 1.08.664.083.165.127.348.13.533v9.29c-.01.122.018.244.08.35l.005.006.008.01a.62.62 0 0 0 .252.158l.113.04.178.05.3.065.3.05.3.036.3.027.308.02.312.01h.64l.33-.01.34-.02.35-.03.36-.046.368-.066a2.64 2.64 0 0 0 .363-.1c.083-.028.16-.07.23-.122l.018-.02c.022-.02.042-.043.06-.068s.026-.04.035-.064c.02-.047.03-.097.03-.147v-4.19c.001-.08.006-.16.017-.24a1.98 1.98 0 0 1 .128-.482l.02-.042a1.88 1.88 0 0 1 .181-.314 1.94 1.94 0 0 1 .215-.256.41.41 0 0 1 .038-.033 1.62 1.62 0 0 1 .25-.183 4.55 4.55 0 0 1 1.3-.473 13.8 13.8 0 0 1 2.435-.3l.8-.017 1.5.06a11.23 11.23 0 0 1 2.13.36c.418.1.8.29 1.15.554a.38.38 0 0 1 .037.032l.105.115a1.9 1.9 0 0 1 .313.5c.05.123.088.25.112.38a1.88 1.88 0 0 1 .033.344v4.183c-.001.05.01.1.028.147.01.026.026.05.043.073s.03.036.045.053l.01.01a2.92 2.92 0 0 0 1.358.35c.4.04.85.06 1.306.06.83.034 1.663-.065 2.463-.294.07-.027.134-.064.192-.11l.02-.02a.4.4 0 0 0 .088-.127c.02-.045.03-.094.03-.143v-4.2c0-.177.04-.35.117-.5.2-.42.625-.69 1.09-.688h.8c.223-.001.405.177.408.4v5.126a1.86 1.86 0 0 1-.145.725c-.017.04-.037.08-.057.12-.093.185-.214.354-.36.5a.46.46 0 0 1-.037.033 2.9 2.9 0 0 1-1.123.538 12.46 12.46 0 0 1-2.934.39h-.018a15.54 15.54 0 0 1-3.695-.3 5.27 5.27 0 0 1-.843-.261c-.372.148-.756.26-1.15.337-.45.09-.906.158-1.364.2l-1.307.072h-.345c-.29 0-.578-.007-.864-.02l-1.1-.088-1.016-.157a7.1 7.1 0 0 1-.964-.258l-.222-.085c-.115.05-.242.094-.377.136l-.5.133q-.236.054-.494.1l-.484.072-.472.053-.46.037q-.194.013-.4.022h-.06q-.22.01-.44.013-.22.004-.432 0-.213 0-.426-.007-.213-.007-.42-.017-.21-.01-.42-.026l-.417-.036-.417-.05-.418-.062-.418-.08-.15-.033-.267-.07-.41-.135a2.87 2.87 0 0 1-.389-.184 2.09 2.09 0 0 1-.331-.232l-.02-.018c-.11-.097-.206-.208-.288-.33a1.71 1.71 0 0 1-.2-.409c-.052-.155-.085-.316-.1-.48l-.013-.27V9.21a.4.4 0 0 1 .067-.231.41.41 0 0 1 .334-.173zm11.682 11.29l1.226.05h.147a13.32 13.32 0 0 0 1.457-.087c.43-.017.852-.135 1.228-.346l.018-.02a.4.4 0 0 0 .088-.126c.018-.047.026-.098.024-.148v-4.05c0-.05-.01-.1-.03-.147a.4.4 0 0 0-.088-.126l-.01-.01a.7.7 0 0 0-.17-.106 7.89 7.89 0 0 0-2.671-.335c-.967-.08-1.94.07-2.837.438l-.014.015c-.02.018-.035.038-.05.06s-.027.043-.037.067c-.02.047-.03.097-.03.147v4.05a.38.38 0 0 0 .029.147.39.39 0 0 0 .071.11l.016.015.02.02c.046.037.096.068.15.093a4.74 4.74 0 0 0 1.455.291zm12.975-9.888h.885c.47-.001.85.378.854.847v.665c-.003.47-.385.848-.854.847h-.885c-.47.001-.85-.378-.854-.847v-.666c.004-.47.385-.847.854-.846z"></path>
              </svg>
            </div>
            <p className="text-lg font-medium text-white mr-3">
              دانلود اپلیکیشن
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center bg-zinc-700 p-1 ml-4 rounded-lg min-w-25 cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.5166"
                  y="3.5166"
                  width="32.967"
                  height="32.967"
                  fill="url(#pattern0)"
                ></rect>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_21490_174832"
                      transform="scale(0.00666667)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_21490_174832"
                    width="150"
                    height="150"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTEtMjNUMTY6MTI6MDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTExLTIzVDE2OjE1OjM1KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTExLTIzVDE2OjE1OjM1KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE2ODQwZjQzLTI2NGEt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"
                  ></image>
                </defs>
              </svg>
              <div className="text-zinc-200 text-[10px] mr-2">
                دریافت از<p className="text-white text-sm">بازار</p>
              </div>
            </div>

            <div className="flex items-center bg-zinc-700 p-1 ml-4 rounded-lg min-w-25 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width="24" height="24" fill="url(#sibche)"></rect>
                <defs>
                  <pattern
                    id="sibche"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_537_34877"
                      transform="scale(0.0125)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_537_34877"
                    width="80"
                    height="80"
                    xlinkHref="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
              <div className="text-zinc-200 text-[10px] mr-2">
                دریافت از<p className="text-white text-sm">سیبچه</p>
              </div>
            </div>

            <div className="flex items-center bg-zinc-700 p-1 ml-2 rounded-lg min-w-25 cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.67254 7.40789C9.34301 7.79751 9.17487 8.29835 9.20254 8.80789V30.9279C9.16852 31.4383 9.33744 31.9414 9.67254 32.3279L9.74254 32.4079L22.1325 20.0179V19.7179L9.74254 7.33789L9.67254 7.40789Z"
                  fill="url(#paint0_linear_21485_166848)"
                ></path>
                <path
                  d="M26.2328 24.1479L22.1328 20.0179V19.7179L26.2328 15.5879L26.3228 15.6479L31.2328 18.4279C32.6328 19.2179 32.6328 20.5179 31.2328 21.3179L26.3428 24.0979L26.2328 24.1479Z"
                  fill="url(#paint1_linear_21485_166848)"
                ></path>
                <path
                  d="M26.3529 24.0872L22.1329 19.8672L9.67285 32.3272C10.2559 32.8462 11.1261 32.8756 11.7429 32.3972L26.3529 24.0872Z"
                  fill="url(#paint2_linear_21485_166848)"
                ></path>
                <path
                  d="M26.3529 15.6476L11.7429 7.34765C11.1298 6.86237 10.2567 6.88768 9.67285 7.40765L22.1329 19.8676L26.3529 15.6476Z"
                  fill="url(#paint3_linear_21485_166848)"
                ></path>
                <path
                  opacity="0.2"
                  d="M26.2329 23.998L11.7429 32.248C11.151 32.6947 10.3347 32.6947 9.74285 32.248L9.67285 32.318L9.74285 32.398C10.3347 32.8447 11.151 32.8447 11.7429 32.398L26.3529 24.088L26.2329 23.998Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.12"
                  d="M9.67287 32.1873C9.35166 31.7907 9.19425 31.2863 9.23287 30.7773V30.9273C9.19884 31.4377 9.36776 31.9409 9.70287 32.3273L9.77287 32.2573L9.67287 32.1873Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.12"
                  d="M31.2324 21.1672L26.2324 23.9972L26.3224 24.0872L31.2324 21.3072C31.8228 21.0575 32.2295 20.5051 32.2924 19.8672C32.1656 20.4443 31.7722 20.9268 31.2324 21.1672Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.25"
                  d="M11.7431 7.48717L31.2331 18.5672C31.7729 18.8075 32.1663 19.2901 32.2931 19.8672C32.2302 19.2293 31.8235 18.6768 31.2331 18.4272L11.7431 7.34717C10.3531 6.54717 9.20312 7.20717 9.20312 8.80717V8.95717C9.23312 7.35717 10.3531 6.69717 11.7431 7.48717Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_21485_166848"
                    x1="16.7039"
                    y1="-7.68409"
                    x2="-3.13684"
                    y2="-2.40285"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A0FF"></stop>
                    <stop offset="0.01" stopColor="#00A1FF"></stop>
                    <stop offset="0.26" stopColor="#00BEFF"></stop>
                    <stop offset="0.51" stopColor="#00D2FF"></stop>
                    <stop offset="0.76" stopColor="#00DFFF"></stop>
                    <stop offset="1" stopColor="#00E3FF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_21485_166848"
                    x1="33.0628"
                    y1="9.66758"
                    x2="8.87281"
                    y2="9.66758"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE000"></stop>
                    <stop offset="0.41" stopColor="#FFBD00"></stop>
                    <stop offset="0.78" stopColor="#FFA500"></stop>
                    <stop offset="1" stopColor="#FF9C00"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_21485_166848"
                    x1="9.32036"
                    y1="13.3866"
                    x2="-6.64113"
                    y2="40.1858"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF3A44"></stop>
                    <stop offset="1" stopColor="#C31162"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_21485_166848"
                    x1="-0.0522221"
                    y1="3.96657"
                    x2="7.07008"
                    y2="15.9344"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#32A071"></stop>
                    <stop offset="0.07" stopColor="#2DA771"></stop>
                    <stop offset="0.48" stopColor="#15CF74"></stop>
                    <stop offset="0.8" stopColor="#06E775"></stop>
                    <stop offset="1" stopColor="#00F076"></stop>
                  </linearGradient>
                </defs>
              </svg>

              <div className="text-zinc-200 text-[10px] mr-2">
                دریافت از<p className="text-white text-sm">گوگل پلی</p>
              </div>
            </div>

            <p className="text-blue-400 mr-2 cursor-pointer">بیشتر</p>
          </div>
        </div>
        <div className="items-center grid grid-cols-12 mb-2">
          <div className="col-start-1 col-end-9">
            <h3 className="text-white text-sm mb-1">درباره نماوا</h3>
            <p className="text-neutral-400 text-sm/7">
              سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های
              محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده
              پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود
              درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای
              ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از
              جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است.
              نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین
              زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود
              را به صورت آنلاین و آفلاین مشاهده کنند.
            </p>
          </div>
          <div className="flex items-center col-start-10 col-end-12 mr-10">
            <img
              src={enamad}
              alt="enamad"
              className="w-35 h-25 bg-mist-300 p-2 rounded-md mx-3 cursor-pointer"
            />
            <img
              src={namad}
              alt="namad"
              className="w-35 h-25 bg-mist-300 py-2 px-3 rounded-md mr-3 cursor-pointer"
            />
          </div>
        </div>
        <div className="border-b border-b-neutral-700 w-full my-5"></div>
        <div className="flex items-center justify-between">
          <p className="text-neutral-400 text-xs">
            خدمات ارائه شده در نماوا، دارای مجوزهای لازم از مراجع مربوطه است و
            هر گونه بهره‌برداری و سوءاستفاده از محتوای نماوا، پیگرد قانونی دارد.
          </p>
          <div className="flex items-center text-neutral-200 text-2xl gap-x-8">
            <FaTwitter className=" hover:text-blue-700 cursor-pointer" />
            <FaInstagram className=" hover:text-blue-700 cursor-pointer" />
            <FaTelegramPlane className=" hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
