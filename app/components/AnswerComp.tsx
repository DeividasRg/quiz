import { TAnswer } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AnswerCompProps = {
  answer: TAnswer;
  submitAnswer: () => void;
};

function AnswerComp({ answer, submitAnswer }: AnswerCompProps) {
  return (
    <button
      onClick={submitAnswer}
      className={cn(
        "bg-white w-full h-14 rounded-lg group relative hover:text-white active:text-white hover:bg-[#767AF9]  active:bg-[#767AF9] flex items-center pl-3 gap-x-3",
        answer.answer === "Yes" &&
          "border border-[#289F67] hover:bg-[#289F67]  active:bg-[#289F67]",
        answer.answer === "I'm not sure" &&
          "border border-[#FFC633] hover:bg-[#FFC633]  active:bg-[#FFC633]",
        answer.answer === "No" &&
          "border border-[#E35244] hover:bg-[#E35244]  active:bg-[#E35244]"
      )}
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
  );
}

export default AnswerComp;
