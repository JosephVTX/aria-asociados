import React from "react";

import { BsFillPlayBtnFill } from "react-icons/bs";

export default function BtnMenu({ icon, title }) {
  return (
    <button className="grid place-items-center hover:bg-bcp text-bcp border w-full py-2 rounded-lg shadow transition-colors duration-500  group/item">
      <span className="text-4xl group-hover/item:text-white group-hover/item:text-bcp/80 transition-colors duration-500">{icon ?? <BsFillPlayBtnFill />}</span>

      <span className="group-hover/item:text-white transition-colors duration-500">{title}</span>
    </button>
  );
}
