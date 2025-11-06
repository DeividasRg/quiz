"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";

type QuizInfo = {
  question: number | null;
  finished: boolean;
  timeRemaining: string | null;
  gender: "male" | "female" | null;
};

type QuizInfoContextValue = {
  info: QuizInfo;
  setInfo: React.Dispatch<React.SetStateAction<QuizInfo>>;
};

const QuizInfoContext = createContext<QuizInfoContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "quizInfo";

const defaultValues: QuizInfo = {
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
    if (typeof window === "undefined") return defaultValues;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as QuizInfo;
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    return defaultValues;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  }, [info]);

  return (
    <QuizInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </QuizInfoContext.Provider>
  );
};

export const useQuizInfo = () => {
  const context = React.useContext(QuizInfoContext);
  if (!context)
    throw new Error(
      "useQuizInfo must be used within a QuizInfoContextProvider"
    );
  return context;
};
