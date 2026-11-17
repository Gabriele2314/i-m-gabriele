"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

type IntroState = {
  done: boolean;
  /** true solo se l'intro è stata davvero mostrata: allora l'hero entra con l'animazione */
  played: boolean;
  finish: (played: boolean) => void;
};

const IntroContext = createContext<IntroState>({ done: true, played: false, finish: () => {} });

export function Providers({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({ done: false, played: false });
  const finish = useCallback((played: boolean) => setState({ done: true, played }), []);

  // React è partito: il paracadute CSS delle animazioni non serve più
  useEffect(() => {
    document.documentElement.classList.add("hydrated");
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={{ ...state, finish }}>{children}</IntroContext.Provider>
    </MotionConfig>
  );
}

export const useIntro = () => useContext(IntroContext);
