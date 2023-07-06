import Image from "next/image";
import { useState } from "react";
function Card(props) {
  const [shown, setShown] = useState(false);
  console.log(shown);
  return (
    <div>
      <div
        className={`${
          shown ? "rounded-t-md" : "rounded-md"
        }  bg-gray-700 px-4 py-2 font flex items-center justify-between`}
      >
        <p className="bg-fuchsia-600 p-2 rounded-2xl font-semibold">
          {props.short}
        </p>
        <p className="font-semibold">{props.title}</p>
        <Image
          className={`hidden md:block md:cursor-pointer ${
            shown ? "rotate-45" : ""
          }`}
          src="dropdown.svg"
          width={18}
          height={10}
          alt="Dropdown icon"
          onClick={() => {
            setShown(!shown);
          }}
        ></Image>
        <Image
          className={`md:hidden cursor-pointer  ${shown ? "rotate-45" : ""} `}
          src="dropdown.svg"
          width={15}
          height={8}
          alt="Dropdown icon"
          onClick={() => {
            setShown(!shown);
          }}
        ></Image>
      </div>
      {shown && (
        <div className="rounded-b-md bg-gray-700/50 px-6 py-2 font">
          <p className="text-sm">{props.description}</p>
        </div>
      )}
    </div>
  );
}
export default Card;
