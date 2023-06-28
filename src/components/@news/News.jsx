import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import New from "./New";
import Activities from "../@activities/Activities";

export default function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const birthday = Array.from({ length: 20 }, () => ({
      id: faker.random.numeric(2),
      fullName: faker.name.fullName(),
    }));

    setData(birthday);
  }, []);
  return (
    <div className="w-full grid grid-cols-2 mt-6 gap-y-5 gap-x-4 shadows">
      <New className="Comunicados Internos" />
      <New title="Cumpleaños">
        <h4 className="italic font-bold text-xl my-2 text-bcp">
          Del 20 al 26 de Febrero
        </h4>

        <ul className="h-full">
          {data.map(({ id, fullName }, index) => (
            <li
              key={index}
              className="text-bcp/80 text-sm my-4 ml-4 flex gap-8"
            >
              <span className="text-gray-800">{id}</span> {fullName}
            </li>
          ))}
        </ul>

        <img
          src="https://static.vecteezy.com/system/resources/previews/001/201/706/original/cake-png.png"
          className="absolute top-[35%] -translate-x-1/2 h-[160px] right-14"
          alt=""
        />
      </New>
      <New title="Reconocimientos">
        <div className="w-1/2 my-4 ml-4">
          <p className="text-center">KARLA TARAZONA MIRANDA</p>

          <p className="text-center mt-14">¡Felicitaciones! por tus esfuerzo y logros en nuestra compañia</p>
        </div>

        <img src="https://cdn-icons-png.flaticon.com/512/610/610333.png"  className="absolute h-[120px] right-20 top-[35%]" />
      </New>
      <New title="Actividades">
        <ul className="h-full my-4 mx-4">
          <li>
            <Activities />
          </li>
          <li>
            <Activities title="Fiesta de Fin de Año" />
          </li>
          <li>
            <Activities title="Dia del Padre" />
          </li>
          <li>
            <Activities />
          </li>
          <li>
            <Activities />
          </li>
          <li>
            <Activities />
          </li>
          <li>
            <Activities />
          </li>
        </ul>
      </New>
    </div>
  );
}
