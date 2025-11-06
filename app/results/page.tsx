"use client";
import brain from "@/public/brain.svg";
import target from "@/public/target.svg";
import femaleResult from "@/public/resultFemale.png";
import maleResult from "@/public/maleResult.png";
import Image from "next/image";
import { resultMetrics } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useQuizInfo } from "@/lib/context";
import { useIsMounted } from "@/lib/hooks";

function Page() {
  const { info } = useQuizInfo();
  const gender = info.gender;
  const isMounted = useIsMounted();

  if (!info || !isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col"
      >
        <main className="px-5 pb-5">
          <h1 className="font-bold text-2xl">
            Your personalized Alcohol-Free Plan is ready!
          </h1>
          <div className="flex items-center mt-6">
            <div className="flex gap-x-2">
              <Image src={brain} alt="Carricature of a brain" />
              <p className="text-[10px]">
                Drinking patterns <br />{" "}
                <span className="font-bold text-[12px]">Imbalanced</span>
              </p>
            </div>
            <div className="h-[43px] border border-[#767AF9] ml-[50.5px] mr-5" />
            <div className="flex gap-x-2 w-[147.5px]">
              <Image src={target} alt="Carricature of a target with an arrow" />
              <p className="text-[10px]">
                Goal <br />{" "}
                <span className="font-bold text-[12px]">
                  Regain control and live alcohol-free
                </span>
              </p>
            </div>
          </div>
          <Image
            className="mt-6"
            src={gender === "male" ? maleResult : femaleResult}
            alt="female"
            quality={100}
          />
          <h1 className="font-bold text-2xl my-10">Your Personal Summary</h1>
          <div className="space-y-2">
            {resultMetrics.map((metric) => (
              <div
                key={metric.id}
                className="flex items-center w-full h-[72px] border border-[#767AF9] rounded-lg px-3 gap-x-3"
              >
                <Image src={metric.image.src} alt={metric.image.alt} />
                <div>
                  <p
                    className={`${metric.color} inline-block font-bold text-[10px] text-white px-1 py-0.5 rounded-sm`}
                  >
                    {metric.status.toUpperCase()}
                  </p>
                  <p className="text-[16px] font-bold">{metric.name}</p>
                </div>
                <div className="flex-1 flex items-center justify-end gap-x-3">
                  <div className="w-20 bg-[#E4E4E4] h-1.5 rounded-full">
                    <motion.div
                      className={`${metric.color}  h-1.5 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${metric.percentage}%`,
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="font-bold text-[14px]">{metric.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default Page;
