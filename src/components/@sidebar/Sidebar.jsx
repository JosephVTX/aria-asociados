import Link from "next/link";
import React, { useState } from "react";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { MdOutlineArrowForwardIos } from "react-icons/md";

const sidebarArr = [
  ["Listas", "#"],

  ["Blog", "#"],
  ["Continuidad de Negocios", "#"],
  ["Operaciones", "#"],
  ["GDH", "#"],
  ["Tecnologias Información", "#"],
  ["Región Norte", "#"],
  ["Región Sur", "#"],
  ["Comercial", "#"],
  ["GAI", "#"],
  ["Otros Aplicativos", "#"],
  ["Bibliotecas", "#"],
];

const sidebarArr2 = [
  ["Enlace Interes", "#"],
  ["Correo Arias & Asociados", "#"],
  ["Oficina Virtual", "#"],
  ["Cauciones Web", "#"],
  ["Archivo Digital", "#"],
];
export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(!open);

  return (
    <aside className="w-1/6 text-sm border rounded-md overflow-hidden">
      <div
        onClick={handleOpen}
        className="flex justify-center items-center bg-bcp py-1 cursor-pointer"
      >
        {open ? (
          <IoMdArrowDropup className="text-white" />
        ) : (
          <IoMdArrowDropdown className="text-white" />
        )}
      </div>
      <div
        className={` overflow-y-hidden ${
          open ? "max-h-0" : "max-h-[1000px]"
        } transition-all duration-700`}
      >
        <ul>
          {sidebarArr.map((item, index) => (
            <li key={index} className="border-b">
              <Link
                href={item[1]}
                className="flex justify-between py-2 px-4 items-center"
              >
                {item[0]}

                <MdOutlineArrowForwardIos />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {sidebarArr2.map((item, index) => (
          <li
            key={index}
            className={`border-b text-bcp ${
              index === 0 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          >
            <Link
              href={item[1]}
              className="flex justify-between py-2 px-4 items-center child "
            >
              {item[0]}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}