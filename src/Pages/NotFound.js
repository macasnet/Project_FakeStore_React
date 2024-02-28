import React from 'react';
import custom404Image from "../Pages/Images/404.png"; // Resminizin yolunu buraya ekleyin
import Navbar from './Components/Navbar';

export default function Notfound() {
  return (
    <div>
      <Navbar/>
    <div className="flex justify-center items-center h-[calc(100vh-80px)] overflow-hidden">
      <img src={custom404Image} alt="404" className="w-full h-full object-cover" />
    </div>
    </div>
  );
}
