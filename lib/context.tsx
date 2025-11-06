"use client";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { COOKIE_KEY } from "./constants";

type QuizInfo = {
  question: number | null;
  finished: boolean;
  timeRemaining: number | null;
  gender: "male" | "female" | null;
};

type QuizInfoContextValue = {
  info: QuizInfo;
  setInfo: React.Dispatch<React.SetStateAction<QuizInfo>>;
};

const QuizInfoContext = createContext<QuizInfoContextValue | undefined>(
  undefined
);

export const defaultValues: QuizInfo = {
  question: null,
  finished: false,
  timeRemaining: null,
  gender: null,
};

export const QuizInfoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [info, setInfo] = useState<QuizInfo>(() => {
    if (typeof document === "undefined") return defaultValues;

    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(COOKIE_KEY + "="))
      ?.split("=")[1];

    if (cookie) {
      try {
        return JSON.parse(decodeURIComponent(cookie)) as QuizInfo;
      } catch {}
    }
    return defaultValues;
  });

  // Persist info to cookie whenever it changes
  useEffect(() => {
    if (typeof document === "undefined") return;

    const value = encodeURIComponent(JSON.stringify(info));

    document.cookie = `${COOKIE_KEY}=${value}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
  }, [info]);

  return (
    <QuizInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </QuizInfoContext.Provider>
  );
};

export const useQuizInfo = () => {
  const context = useContext(QuizInfoContext);
  if (!context)
    throw new Error(
      "useQuizInfo must be used within a QuizInfoContextProvider"
    );
  return context;
};
