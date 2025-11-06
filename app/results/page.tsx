import brain from "@/public/brain.svg";
import target from "@/public/target.svg";
import femaleResult from "@/public/resultFemale.png";
import Image from "next/image";

function Page() {
  return (
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
      <Image className="mt-6" src={femaleResult} alt="female" />
      <h1 className="font-bold text-2xl my-10">Your Personal Summary</h1>
      <div className="space-y-2">
        <div className="w-full h-[72px] border border-[#767AF9] rounded-lg"></div>
        <div className="w-full h-[72px] border border-[#767AF9] rounded-lg"></div>
        <div className="w-full h-[72px] border border-[#767AF9] rounded-lg"></div>
        <div className="w-full h-[72px] border border-[#767AF9] rounded-lg"></div>
      </div>
    </main>
  );
}

export default Page;
