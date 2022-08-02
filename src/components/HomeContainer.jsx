import React from "react";
import DeliveryImg from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/HardCodeData";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-ful" id="home">
      <div className="py-4 gap-6 flex-1 flex flex-col items-start justify-center md:items-start">
        <div className="flex px-4 py-1 items-center gap-2 justify-between rounded-full bg-orange-100 p-2 mt-4">
          <p className="text-orange-600 font-semibold">Kia Delivery</p>
          <div className="w-8 drop h-8 bg-white rounded-full overflow-hidden">
            <img
              src={DeliveryImg}
              className="w-full h-full object-contain"
              alt="delivey"
            />
          </div>
        </div>
        <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          rerum. Iste nulla, ipsa dignissimos sequi autem tenetur, incidunt
          consectetur ullam excepturi perferendis culpa eveniet libero! Fugiat
          incidunt ex eveniet soluta!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br md:w-auto from-orange-500 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 ease-in-out "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="Hero-bg"
          className="ml-auto h-420 lg:h-650 mt-4"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-16 gap-6 flex-wrap px-32">
          {heroData &&
            heroData.map((item) => {
              return (
                <div
                  className="w-190 p-2 h-190 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-md"
                  key={item.id}
                >
                  <img
                    src={item.img}
                    alt="Icecream"
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  />
                  <p className="font-semibold text-textColor text-xl mt-2 lg:mt-4 lg:text-lg">
                    {item.name}
                  </p>
                  <p className=" text-gray-400 my-3 text-[12px] lg:text-sm">
                    {item.desc}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-red-500 text-xs">$ </span>
                    {item.price}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
