import { useEffect, useState } from "react";
import { useQuizInfo } from "./context";
import { FIFTEEN_MINUTES } from "./constants";

export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  return isMounted;
};

export const useTimer = () => {
  const { info, setInfo } = useQuizInfo();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (info.timeFinished === null) return;

    const endTime = info.timeFinished + FIFTEEN_MINUTES;

    const update = () => {
      const timeLeft = Math.max(endTime - Date.now(), 0);
      setRemaining(timeLeft);

      if (timeLeft === 0) {
        setInfo((prev) => ({ ...prev, finished: false, timeFinished: null }));
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [info.timeFinished, setInfo]);

  if (remaining === null) return { minutes: null, seconds: null };

  const minutes = Math.floor(remaining / 1000 / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((remaining / 1000) % 60)
    .toString()
    .padStart(2, "0");

  return { minutes, seconds };
};
