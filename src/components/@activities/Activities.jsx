import React from "react";

export default function Activities({title}) {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="bg-bcp text-center flex flex-col px-4 text-white rounded-md text-sm">
        <span>29</span>
        <span>oct</span>
      </div>
      <p className="text-bcp font-semibold">{title ?? 'Halloween Criollo 2012' }</p>
    </div>
  );
}
