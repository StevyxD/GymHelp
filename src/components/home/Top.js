import React from "react";
import FAQ from "./FAQ";
const Top = () => {
  return (
    <div>
      <div className="flex-col justify-center items-center">
        <p className="font-bold text-4xl">Fitness</p>
        <div className="bg-gray-100 rounded-xl mt-10 p-10 m lg:w-[1100px] font-serif text-xl">
          <p className="font-serif">
            Fitness is a broad term that can mean a lot of different things to
            different people. For some, it can mean a fitness program and for
            others, it can refer to their fitness level. But regardless of
            whether you are considering improving your personal fitness level or
            looking for an effective fitness program, the key is that fitness is
            a vital part of an active, healthy, and balanced lifestyle.
          </p>
          <p className="font-serif mt-6">
            Plus, there are a number of benefits to incorporating fitness into
            your daily life. Physical exercise can boost your energy, reduce the
            risk of health problems, and improve mental health.
          </p>
          <p className="font-serif mt-6">
            So, whether you are just embarking on your fitness journey or you
            are a seasoned exerciser, you will find trusted information here on
            working out safely and effectively and making physical fitness a
            part of your everyday life.
          </p>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default Top;
