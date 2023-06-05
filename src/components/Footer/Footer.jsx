import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex bottom-0 fixed w-full shadow-lg items-center justify-between flex-wrap bg-gradient-to-br from-beige-dark to-black h-20">
      <div className=" max-w-7xl m-auto flex items-center  justify-center">
        <div className=" wlex-shrink-0 text-white text-4xl">
          <a href="https://www.instagram.com/fisiokarolsalmona/">
            <FaInstagram />
          </a>
          </div>
      </div>
    </div>
  );
}
