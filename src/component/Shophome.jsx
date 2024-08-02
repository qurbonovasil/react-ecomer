import React from 'react';
import sofa from '../assets/sofa.svg';
import ourBlog from '../assets/ourBlog.svg';
import readMre from '../assets/readMore.svg';
import soat from '../assets/ourSoat.svg';
import ourist from '../assets/ourIst.svg';
import follov   from '../assets/follov.svg';

const Shophome = () => {
  return (
    <div>
      <div className="flex bg-[#FBEBB5]">
                <div>
                    <img className="w-[700px]" src={sofa} alt="" />
                </div>
                <div className="ml-[200px] mt-[200px]" >
                    <h1 className="text-1xl">New Collection</h1>
                    <h1 className="text-5xl bold mt-[10px] ">Asgaard sofa</h1>
                    <button className='text-1xl mt-[30px] px-[20px]  border-2 border-[#000000   ]'>OrderNow</button>
                </div>
            </div>
                <div className=" ml-[400px]">
                    <img src={ourBlog} alt="" />
                </div >
            <div className="flex gap-20 justify-center">

                <div className='text-center'>
                    <img className="w-[200px]" src={sofa} alt="" />
                    <h1>Going all-in with millennial design </h1>
                    <button><img src={readMre} alt="" /></button>
                    <img src={soat} alt="" />
                </div>
                <div className='text-center'>
                    <img className="w-[200px]" src={sofa} alt="" />
                    <h1>Going all-in with millennial design </h1>
                    <button><img src={readMre} alt="" /></button>
                    <img src={soat} alt="" />
                </div>
                <div className='text-center'>
                    <img className="w-[200px]" src={sofa} alt="" />
                    <h1>Going all-in with millennial design </h1>
                    <button><img src={readMre} alt="" /></button>
                    <img src={soat} alt="" />

                </div>
            </div>
            <div className="justify-center text-center mt-[100px] bg-[#FBEBB5]">
                <img className=" ml-[450px]" src={ourist} alt="" />
                <button className='mt-[20px]'><img className="w-full " src={follov} alt="" /></button>
            </div>
    </div>
  );
}

export default Shophome;
