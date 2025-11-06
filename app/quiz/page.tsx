"use client";
import { useQuizInfo } from "@/lib/context";
import { questions } from "@/lib/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

function Page() {
  const { info } = useQuizInfo();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  const question = questions.find((x) => x.id === info.question?.toString());

  if (!question || !isMounted) return null;

  return (
    <main className="flex flex-col h-full">
      <h1 className="font-semibold text-2xl text-center">
        {question.question}
      </h1>
      <section className="flex-1 flex flex-col justify-end items-center gap-y-2">
        {question.answers.map((answer) => (
          <div
            className="bg-white w-full h-14 rounded-lg group relative hover:text-white hover:bg-[#767AF9] flex items-center pl-3 gap-x-3"
            key={answer.id}
          >
            <Image
              src={answer.image.default}
              alt={answer.answer}
              className="h-6 w-6 object-contain transition-opacity duration-200 group-hover:opacity-0"
            />
            <Image
              src={answer.image.highlighted}
              alt={answer.answer}
              className="absolute h-6 w-6 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <p className="font-semibold text-base">{answer.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Page;
