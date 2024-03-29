import { useEffect, useState } from "react";
import LightBox from "./LightBox";
import PreviousIcon from "../assets/icon-previous.svg";
import NextIcon from "../assets/icon-next.svg";

export default function Slider({ product }) {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(product.images[current]);
  const [showBox, setShowBox] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    setImage(product.images[current]);
  }, [current]);
  return (
    <div className="slider relative  overflow-hidden sm:hidden">
      {showBox && <LightBox product={product} isShowBox={setShowBox} />}
      <div className="images relative h-[80vw]">
        {product.images.map((item, index) => (
          <img
            src={item}
            alt=""
            key={item}
            className={classNames(
              index !== current ? "opacity-0" : "z-30",
              "w-full cursor-pointer"
            )}
            onClick={() => setShowBox(true)}
          />
        ))}
      </div>
      <button
        className="btn left"
        onClick={() => {
          setCurrent(() =>
            current === 0 ? product.images.length - 1 : current - 1
          );
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
            className=""
          />
        </svg>
      </button>
      <button
        className="btn right"
        onClick={() => {
          setCurrent(() =>
            current === product.images.length - 1 ? 0 : current + 1
          );
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
