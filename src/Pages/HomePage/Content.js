import React from 'react';
import background from "../Images/backsr.jpg"
import { Link } from 'react-router-dom';
const Content = () => {
  return (
    <div className="relative flex justify-center items-center h-[calc(100vh-80px)] overflow-hidden  ">
      <img src={background} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.5)' }} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">FakeStore Hoşgeldiniz.</h1>
          <h2 className="text-lg md:text-xl text-white font-normal mb-6">FakeStore'da en yeni ve çeşitli ürünleri keşfedin</h2>
          <Link to={"/products"} className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-extrabold py-4 px-10  ">
            ÜRÜNLERE GÖZAT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
