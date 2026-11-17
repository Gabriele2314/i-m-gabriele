/**
 * L'età compare SOLO qui. Per toglierla dal sito metti `null`:
 * spariscono la sezione della storia e la frase dell'hero che la annuncia,
 * e il pulsante dell'hero porta al capitolo 01.
 */
export const AGE: number | null = 12;

export const site = {
  url: "https://i-m-gabriele.vercel.app",
  gaId: "G-BX8V25EZNX", // Google Analytics
} as const;

// Tutti i link del sito in un posto solo: cambiali qui.
export const links = {
  github: "https://github.com/Gabriele2314",
  thisRepo: "https://github.com/Gabriele2314/i-m-gabriele",

  piattino: "https://gabriele2314.github.io/piattino/",
  piattinoRepo: "https://github.com/Gabriele2314/piattino",

  lorisBike: "https://www.youtube.com/@Loris_Bikezz",
  bikeLifePeppe: "https://www.youtube.com/@BikeLifePeppe",
} as const;

// Le ancore della pagina, in un posto solo
export const anchors = {
  top: "inizio",
  story: "storia",
  ch1: "capitolo-01",
  ch2: "capitolo-02",
  ch3: "capitolo-03",
} as const;

export const ease = [0.22, 1, 0.36, 1] as const;
