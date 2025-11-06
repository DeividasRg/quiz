"use client";
import { useQuizInfo } from "@/lib/context";
import { questions } from "@/lib/constants";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnswerComp from "../components/AnswerComp";

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
    if (info.question !== questions.length) {
      setInfo((prev) => ({ ...prev, question: Number(prev.question) + 1 }));
    } else {
      setInfo((prev) => ({
        ...prev,
        finished: true,
        timeRemaining: Date.now(),
        question: null,
      }));
    }
  };

  return (
    <main className="flex flex-col h-full mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col flex-1"
        >
          <h1 className="font-semibold text-2xl text-center">
            {question.question}
          </h1>
          <section className="flex-1 flex flex-col justify-end items-center gap-y-2 ">
            {question.answers.map((answer) => (
              <AnswerComp
                key={answer.id}
                answer={answer}
                submitAnswer={submitAnswer}
              />
            ))}
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default Page;
