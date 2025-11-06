"use client";
import { useQuizInfo } from "@/lib/context";
import { questions } from "@/lib/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Page() {
  const { info, setInfo } = useQuizInfo();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  const question = questions.find(
    (x) => Number(x.id) === Number(info.question)
  );

  if (!question || !isMounted) return null;

  const submitAnswer = () => {
    if (info.question !== questions.length)
      setInfo((prev) => ({ ...prev, question: Number(prev.question) + 1 }));
  };

  return (
    <main className="flex flex-col h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id} // this triggers animation on question change
          initial={{ opacity: 0, y: 20 }} // fade in + slide up
          animate={{ opacity: 1, y: 0 }} // visible
          exit={{ opacity: 0, y: -20 }} // fade out + slide up
          transition={{ duration: 0.3 }}
          className="flex flex-col flex-1"
        >
          <h1 className="font-semibold text-2xl text-center">
            {question.question}
          </h1>
          <section className="flex-1 flex flex-col justify-end items-center gap-y-2 ">
            {question.answers.map((answer) => (
              <button
                onClick={submitAnswer}
                className="bg-white w-full h-14 rounded-lg group relative hover:text-white hover:bg-[#767AF9] active:text-white active:bg-[#767AF9] flex items-center pl-3 gap-x-3"
                key={answer.id}
              >
                <Image
                  src={answer.image.default}
                  alt={answer.answer}
                  className="h-6 w-6 object-contain transition-opacity duration-200 group-hover:opacity-0 group-active:opacity-0"
                />
                <Image
                  src={answer.image.highlighted}
                  alt={answer.answer}
                  className="absolute h-6 w-6 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100"
                />
                <p className="font-semibold text-base">{answer.answer}</p>
              </button>
            ))}
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default Page;
