"use client";
import { QuizInfoContextProvider } from "./context";

function ContextWrapper({ children }: { children: React.ReactNode }) {
  return <QuizInfoContextProvider>{children}</QuizInfoContextProvider>;
}

export default ContextWrapper;
