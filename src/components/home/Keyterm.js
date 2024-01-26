import React from "react";
// import IntroImg from "./Background.jpg";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Keyterm = () => {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <h1 className="bg-blue-300 uppercase text-start p-2 py-2 tracking-widest font-bold mb-8 font-serif bg-slate-300 text-gray-700 h-[50px]">
          Key Terms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="m-0 lg:h-[500px]">
            <div className="lg:h-[500px] flex-col justify-center bg-slate-100">
              <div className="group h-96 w-100 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex-col justify-center items-center">
                    <div className="flex justify-center ">
                      <p className="m-4 text-2xl font-bold text-black hover:scale-105 cursor-pointer duration-500 hover:text-slate-100 ">
                        Strength Training
                      </p>
                    </div>

                    <img
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VpZ2h0JTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl flex-col justify-center items-center bg-black px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="text-red-600 font-serif text-2xl">
                      Strength Training
                    </div>
                    <div className="font-serif text-lg">
                      Strength training—which is sometimes referred to as
                      resistance training or weight training—is a form of
                      exercise intended to increase muscular strength and
                      endurance. It involves exercising muscles using some form
                      of weight or resistance such as your body weight, hand
                      weights, machines, and more.
                      <br /> Strength training is designed to increase your
                      strength and endurance. It can help you build muscle mass.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="m-0">
            <div className=" lg:h-[500px] flex-col justify-center bg-slate-100">
              <div className="group h-96 w-100 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex-col justify-center items-center">
                    <div className="flex justify-center ">
                      <p className="m-4 text-2xl font-bold text-black hover:scale-105 cursor-pointer duration-500 hover:text-white ">
                        Cardio Training
                      </p>
                    </div>

                    <img
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://media.istockphoto.com/id/1832926978/photo/latin-american-woman-walking-on-a-treadmill-and-drinking-water-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=nkKnEwUhergZXKirXYrBPhtkmNStBT2sHnRuvyh26_0="
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="text-red-600 font-serif text-2xl">
                      Cardio Training
                    </div>
                    <div className="font-serif text-lg">
                      Cardio, also known as cardiovascular exercise, is
                      generally any activity that increases your heart rate.
                      Whether that is walking, running, cycling, dancing, or
                      swimming, these rhythmic activities help to strengthen
                      your heart and lungs. What’s more, cardio has a number of
                      health benefits. Aside from improving heart function and
                      lowering blood pressure, consistently fitting cardio into
                      your weekly routine can help you sleep better, improve
                      cognitive function, and boost your overall sense of
                      well-being.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="m-0">
            <div className=" lg:h-[500px] flex-col justify-center bg-slate-100">
              <div className="group h-96 w-100 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex-col justify-center items-center">
                    <div className="flex justify-center ">
                      <p className="m-4 text-2xl font-bold text-black hover:scale-105 cursor-pointer duration-500 hover:text-white ">
                        FIIT Principle
                      </p>
                    </div>

                    <img
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="text-red-600 font-serif text-2xl">FIIT</div>
                    <div className="font-serif text-lg">
                      The FIIT principle—which stands for frequency, intensity,
                      time, and type of exercise—is a guideline you can use to
                      revise and improve your workout plan. When evaluating and
                      creating your workouts, you will need to consider these
                      four elements. Doing so will help put you on the path to
                      achieving your fitness goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyterm;
