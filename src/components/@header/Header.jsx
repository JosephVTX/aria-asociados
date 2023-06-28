import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

import { RiLogoutBoxRFill } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";

// Obtener la fecha actual
const fecha = new Date();

// Días de la semana en español
const diasSemana = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

// Meses del año en español
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Obtener el día de la semana, el día del mes y el mes en formato numérico
const diaSemanaNum = fecha.getDay();
const diaMesNum = fecha.getDate();
const mesNum = fecha.getMonth();

// Obtener el día de la semana, el día del mes y el mes en formato texto
const diaSemanaTexto = diasSemana[diaSemanaNum];
const mesTexto = meses[mesNum];

// Formatear la fecha en el formato deseado
const fechaFormateada = `${diaSemanaTexto}, ${diaMesNum} de ${mesTexto} de ${fecha.getFullYear()}`;

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="w-full bg-bcp">
        <img
          className="mx-auto  shadow-sm h-[250px]  w-[800px] "
          src="/img/banner.png"
          alt="Banner"
        />
      </div>

      <div className="flex justify-between my-4 px-4 items-center  ">
        <span className="flex gap-2 items-center text-bcp font-semibold">
          <FaUserAlt />
          Bienvenido | Usuario
        </span>

        <div className="flex gap-4">
          <Link className="text-[#EE5E16] font-bold" href="/">
            Mi Sitio
          </Link>

          <p>{fechaFormateada}</p>
        </div>
        <section className="flex items-center text-gray-800 gap-4">
          <p className="pr-10">TC 3.989</p>
          <input
            type="text"
            placeholder="Buscar..."
            className="outline-none border p-2 rounded-md"
          />
          <VscSearch />
          <div className="flex items-center">
            <Link
              title="Cerrar Sesión"
              className="text-bcp text-4xl pr-10"
              href="/"
            >
              <span>
                <RiLogoutBoxRFill />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}