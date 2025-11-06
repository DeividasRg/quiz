"use client";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import Back from "@/public/Back.svg";
import Image from "next/image";
import { useQuizInfo } from "@/lib/context";
import { Poppins } from "next/font/google";
import { questions } from "@/lib/constants";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Header() {
  const pathName = usePathname();
  const { info, setInfo } = useQuizInfo();
  const router = useRouter();

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

  if (pathName === "/") {
    return (
      <header className="w-full flex justify-center mb-8">
        <Logo />
      </header>
    );
  }

  if (pathName === "/quiz")
    return (
      <>
        <header className="w-full flex justify-between">
          <button onClick={goBack}>
            <Image src={Back} alt="Arrow pointing left" />
          </button>

          <Logo />
          <h1 className={poppins.className}>
            <span className="font-bold">{info.question}</span>
            <span className="font-bold mx-px">/</span>
            <span>{questions.length}</span>
          </h1>
        </header>
        <div className="w-full h-1 mt-[13px] rounded-full bg-[#E4E4E4]">
          <motion.div
            className="h-1 rounded-full bg-[#767AF9]"
            animate={{
              width: info.question
                ? `${(info.question / questions.length) * 100}%`
                : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </>
    );
}

export default Header;
