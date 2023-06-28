import BtnMenu from "@/components/@btnMenu/BtnMenu";
import Nav from "@/components/@nav/Nav";
import Sidebar from "@/components/@sidebar/Sidebar";
import React from "react";
import { BsBookFill, BsNewspaper } from "react-icons/bs";
import { FaInnosoft, FaUserGraduate } from "react-icons/fa";

import { GoFileDirectory } from "react-icons/go";

import { HiPlusCircle } from "react-icons/hi";

import { BiPhotoAlbum } from "react-icons/bi";
import { MdHotelClass } from "react-icons/md";
import News from "@/components/@news/News";


const btnArr = [ 

    ['Capacitación', <FaUserGraduate />],
    ['Revista', <BsBookFill />],
    ['Noticias',<BsNewspaper />],
    ['Directorio', <GoFileDirectory />],
    ['Beneficios', <HiPlusCircle />],
    ['Innovando', <FaInnosoft />],
    ['Álbum', <BiPhotoAlbum />],
    ['Clasificados', <MdHotelClass />],
]

export default function ContentLayout({ children }) {
  return (
    <main className="container mx-auto px-4 border-t rounded-md mb-4">
      <Nav />

      <div className="w-full flex gap-2">
        <Sidebar />

        <div className="w-full"> 

            <ul className={`grid grid-cols-8 gap-x-6`}>
                {

                    btnArr.map(([title, icon], index) => (

                        <li key={index} className='w-full'>

                            <BtnMenu title={title} icon={icon} />

                        </li>

                    ))
                }
            </ul>

            <News />
        
        {children}</div>
      </div>
    </main>
  );
}
