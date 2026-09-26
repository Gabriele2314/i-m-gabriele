"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { MotionConfig } from "framer-motion";

type IntroState = { done: boolean; finish: () => void };

const IntroContext = createContext<IntroState>({ done: true, finish: () => {} });

export function Providers({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const finish = useCallback(() => setDone(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={{ done, finish }}>{children}</IntroContext.Provider>
    </MotionConfig>
  );
}

export const useIntro = () => useContext(IntroContext);
