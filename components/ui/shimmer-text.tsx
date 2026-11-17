/*
  Titolo con un riflesso che passa sopra il testo, animato solo con transform.
  Sopra il testo c'è una sua copia nel colore «segnale», visibile solo dentro una
  banda (mask). Lo strato scorre verso destra e la copia interna scorre al
  contrario della stessa quantità: la banda si muove, le lettere restano ferme.
  Con «Riduci movimento» la banda resta fuori dal testo.
*/
export function ShimmerText({
  children,
  className,
  duration = 2.2,
  delay = 1.2,
}: {
  children: React.ReactNode;
  className?: string;
  /** durata di un passaggio, in secondi */
  duration?: number;
  /** attesa prima del primo passaggio, in secondi */
  delay?: number;
}) {
  const timing = {
    "--shimmer-cycle": `${duration / 0.6}s`,
    "--shimmer-delay": `${delay}s`,
  } as React.CSSProperties;

  return (
    <div className="relative inline-block overflow-hidden">
      <div className={className}>{children}</div>
      <div aria-hidden="true" className="shimmer-layer pointer-events-none absolute inset-0" style={timing}>
        <div className={`shimmer-copy text-signal ${className ?? ""}`}>{children}</div>
      </div>
    </div>
  );
}

export default ShimmerText;
