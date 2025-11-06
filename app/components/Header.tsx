"use client";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import Back from "@/public/Back.svg";
import Image from "next/image";
import { defaultValues, useQuizInfo } from "@/lib/context";
import { Poppins } from "next/font/google";
import { questions } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMounted } from "@/lib/hooks";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Header() {
  const { info, setInfo } = useQuizInfo();
  const isMounted = useIsMounted();
  const pathName = usePathname();
  const router = useRouter();

  const restartQuiz = () => {
    setTimeout(() => {
      setInfo(defaultValues);
      router.push("/");
    }, 0);
  };

  const goBack = () => {
    if (info.question === 1) {
      setInfo((prev) => ({ ...prev, question: null }));
      setTimeout(() => router.push("/"), 0);
    } else {
      setInfo((prev) => ({
        ...prev,
        question: prev.question && prev.question > 1 ? prev.question - 1 : null,
      }));
    }
  };

  if (!isMounted || !info || pathName === "/") {
    return (
      <header className="w-full flex justify-center mb-8 px-5 pt-5">
        <Logo />
      </header>
    );
  }

  if (pathName === "/results") {
    return (
      <header className="sticky top-0 w-full flex justify-between items-center mb-8 bg-[#FFC633] h-[76px] px-5">
        <button onClick={restartQuiz}>
          <Logo />
        </button>
        <div>
          <p className="flex items-center font-bold text-lg">
            Reserved price for:
            <span className="text-2xl font-bold text-[#6A61F1] ml-2.5">
              14:59
            </span>
          </p>
        </div>
      </header>
    );
  }

  if (pathName === "/quiz")
    return (
      <AnimatePresence mode="wait">
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <header className="px-5 pt-5">
            <div className="w-full flex justify-between items-center">
              <button onClick={goBack}>
                <Image src={Back} alt="Arrow pointing left" />
              </button>

              <Logo />
              <h1 className={poppins.className}>
                <span className="font-bold">{info.question ?? 0}</span>
                <span className="font-bold mx-px">/</span>
                <span>{questions.length}</span>
              </h1>
            </div>
            <div className="w-full h-1 mt-[13px] rounded-full bg-[#E4E4E4]">
              <motion.div
                className="h-1 rounded-full bg-[#767AF9]"
                initial={{ width: 0 }}
                animate={{
                  width: info.question
                    ? `${(info.question / questions.length) * 100}%`
                    : "0%",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </header>
        </motion.div>
      </AnimatePresence>
    );
}

export default Header;
