import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Card({ name, photo, comment, link }) {
  return (
    <div className=" bg-white rounded-2xl flex overflow-hidden h-36 mt-8 items-center shadow-2xl">
      <div className="justify-center">
        <img src={photo} alt={name} className="h-36" />
      </div>
      <div className="w-48 h-auto font-medium">
        <p className="text-sm font-medium mb-2 ml-2">{comment}</p>
        <a href={link} className="text-green-400 text-lg  font-poppins flex ml-2 hover:text-green-600 transition">
          <Link to={link} className="mt-1 mr-2">
            <FaInstagram className="flex" />
          </Link>
          {name}
        </a>
      </div>
    </div>
  );
}
