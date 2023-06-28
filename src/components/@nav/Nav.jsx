import Link from "next/link";
import React from "react";

const navArr = [
  ["Inicio", "#"],

  ["Clima Laboral", "#"],

  ["Normas Legales", "#"],

  ["S.G.C.", "#"],

  ["Cultura de Servicio", "#"],

  ["Productos", "#"],

  ["Seguridad", "#"],

  ["Tecnologia", "#"],

  ["Encuestas", "#"],
];

export default function Nav() {
  return (
    <nav className="w-full my-4 text-[13px] bg-bcp py-2 px-4">
      <ul className="grid grid-cols-9 place-items-center place-content-center  text-white font-semibold">
        {navArr.map((item, index) => (
          <li className={` h-full w-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-500 ${item[0] !== 'Encuestas' ? 'border-r' : ''}`} key={index}>
            <Link href={item[1]}>{item[0]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}