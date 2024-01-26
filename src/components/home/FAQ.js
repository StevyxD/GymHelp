import React, { useState } from "react";
import { Questions } from "./Questions.js";
import SingleQuestion from "./SingleQuestion.js";

const FAQ = () => {
  const [cards] = useState(Questions);

  return (
    <>
      <section className="max-w-xl mx-auto py-20 px-4 gap-0 flex-col justify-center items-center">
        <h1 className="uppercase text-start p-2 py-2 tracking-widest font-bold mb-8 font-serif bg-slate-300 text-gray-700 h-[50px]">
          Faqs
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
};

export default FAQ;
