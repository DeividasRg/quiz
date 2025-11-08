"use client";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <main className="flex flex-col text-center justify-center h-full">
      <p>This page does not exist</p>
      <button
        className="hover:cursor-pointer hover:font-bold transition"
        onClick={() => router.push("/")}
      >
        <p>Click here to go back</p>
      </button>
    </main>
  );
}

export default NotFound;
