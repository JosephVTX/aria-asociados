import React from "react";

export default function New({ title, children }) {
  return (
    <div className="h-[320px] overflow-hidden border rounded-md p-4 shadow relative">
      <span className="p-2 bg-[#EBA208] [text-shadow:1px_1px_1px_black] rounded-md text-white block w-1/2 font-bold">
        {title ?? "Comunicados Internos"}
      </span>

      <div className="max-h-[240px] overflow-y-auto ">{children}</div>
    </div>
  );
}
