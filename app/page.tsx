import male from "@/public/maleLanding.png";
import female from "@/public/femaleLanding.png";
import { GenderSelectComp } from "./components/GenderSelectComp";

const images = [
  {
    id: 1,
    src: male,
    alt: "Picture of a man",
    name: "Male",
  },
  {
    id: 2,
    src: female,
    alt: "Picture of a female",
    name: "Female",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full px-5 pb-5">
      <section className="space-y-3">
        <h1 className="font-semibold text-2xl ">What is your gender?</h1>
        <h1 className="text-sm">We will use this to personalize your plan</h1>
      </section>
      <section className="flex-1 flex  w-full justify-center items-center gap-x-3">
        {images.map((img) => (
          <GenderSelectComp key={img.id} imageData={img} />
        ))}
      </section>
    </main>
  );
}
