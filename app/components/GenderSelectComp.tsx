"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useQuizInfo } from "@/lib/context";
import { motion, AnimatePresence } from "framer-motion";

type TGenderImage = {
  id: number;
  src: StaticImageData;
  alt: string;
  name: string;
};

export const GenderSelectComp = ({
  imageData,
}: {
  imageData: TGenderImage;
}) => {
  const { setInfo } = useQuizInfo();

  const setLocalStorage = () => {
    setInfo((prev) => ({
      ...prev,
      question: 1,
      gender: imageData.name.toLowerCase() === "male" ? "male" : "female",
    }));
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col"
      >
        <Link
          href="/quiz"
          onClick={() => setLocalStorage()}
          className="w-40 h-[200px] overflow-hidden rounded-lg bg-[#F0EFFB] border-2 border-[#5349DB] relative group hover:cursor-pointer hover:scale-101 transition active:scale-103"
        >
          <Image
            src={imageData.src}
            alt={imageData.alt}
            loading="eager"
            className={cn(
              "object-cover w-full h-full",
              imageData.id === 1 && "translate-y-6 scale-120",
              imageData.id === 2 && "translate-y-0"
            )}
          />
          <div className="absolute bottom-0 w-full text-center bg-[#5349DB] h-[60px] flex justify-center items-center text-white font-semibold text-lg group-hover:bg-white group-hover:text-[#5349DB] group-active:bg-white group-active:text-[#5349DB] transition">
            {imageData.name}
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
