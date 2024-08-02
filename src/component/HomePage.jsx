import React from 'react';
import kreslo from '../assets/kreslo.svg';
import table from '../assets/table.svg';
import kres1 from '../assets/kres1.svg';
import kres2 from '../assets/kres2.svg';
import kres3 from '../assets/kres3.svg';
import kres4 from '../assets/kres4.svg';
import sofa from '../assets/sofa.svg';
import ourBlog from '../assets/ourBlog.svg';
import readMre from '../assets/readMore.svg';
import soat from '../assets/ourSoat.svg';
import ourist from '../assets/ourIst.svg';
import follov   from '../assets/follov.svg';


const HomePage = () => {
    return (
        <>
            <div className="flex bg-[#FBEBB5]">
                <div className="ml-[300px]  mt-[300px]">
                    <h1 className="text-6xl w-1/2">Rocket single seater</h1>
                    <button className='mt-[10px] text-2xl '>Shop Now</button>
                </div>
                <div>
                    <img className="w-full" src={kreslo} alt="" />
                </div>

            </div>
            <div>
                <img src={table} alt="" />
            </div>
            <div className=" ">
                <div className="text-center ">
                    <h1 className="text-3xl">Top Pics For You</h1>
                    <p>Lorem ipsum  adipisicing elit. In veritatis sed vitae ipsum, laudantium mollitia!</p>
                </div>
                <div className="flex justify-center">
                    <img src={kres1} alt="" />
                    <img src={kres2} alt="" />
                    <img src={kres3} alt="" />
                    <img src={kres4} alt="" />
                </div>
            </div>
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
        </>

    );
}

export default HomePage;
