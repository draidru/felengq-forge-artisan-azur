/** Plan stylisé de la serre octogonale, vue de dessus, façon dessin technique à la plume. */
export function OctagonPlan({ className }: { className?: string }) {
  const outer = "M180 330 L156.15 330 L80 253.85 L80 146.15 L156.15 70 L263.85 70 L340 146.15 L340 253.85 L263.85 330 L240 330";
  const inner = "M180 322.2 L159.4 322.2 L87.8 250.6 L87.8 149.4 L159.4 77.8 L260.6 77.8 L332.2 149.4 L332.2 250.6 L260.6 322.2 L240 322.2";
  const lantern: [number, number][] = [
    [194.9, 163.6], [225.1, 163.6], [246.4, 184.9], [246.4, 215.1],
    [225.1, 236.4], [194.9, 236.4], [173.6, 215.1], [173.6, 184.9],
  ];
  const corners: [number, number][] = [
    [156.15, 70], [263.85, 70], [340, 146.15], [340, 253.85],
    [263.85, 330], [156.15, 330], [80, 253.85], [80, 146.15],
  ];
  const tick = (x: number, y: number) => `M${x - 5} ${y + 5} L${x + 5} ${y - 5}`;

  return (
    <svg
      viewBox="0 0 440 460"
      className={className}
      role="img"
      aria-labelledby="plan-title plan-desc"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="plan-title">Plan de la serre octogonale, vue de dessus</title>
      <desc id="plan-desc">
        Octogone de 5,00 mètres sur 5,00 mètres avec lanterne centrale, fenêtres oscillo-battantes dans chaque angle
        et SAS d'entrée vitré de 1,00 mètre équipé d'une double porte.
      </desc>
      <defs>
        <pattern id="plan-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="440" height="460" fill="url(#plan-grid)" />

      <g stroke="currentColor">
        {/* Structure */}
        <path d={outer} strokeWidth="2" />
        <path d={inner} strokeWidth="0.8" />
        {/* Faîtage vers la lanterne */}
        {corners.map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2={lantern[i]?.[0]} y2={lantern[i]?.[1]} strokeWidth="0.7" strokeDasharray="4 4" />
        ))}
        <polygon points={lantern.map((p) => p.join(",")).join(" ")} strokeWidth="1.2" />
        <circle cx="210" cy="200" r="9" strokeWidth="0.8" />
        <circle cx="210" cy="200" r="3.5" fill="currentColor" />
        {/* Fenêtres oscillo-battantes dans les angles */}
        {corners.map(([x, y], i) => {
          const dx = (210 - x) * 0.09;
          const dy = (200 - y) * 0.09;
          return <circle key={`w${i}`} cx={x + dx} cy={y + dy} r="4" strokeWidth="1" className="fill-ivory" />;
        })}
        {/* SAS d'entrée 1,00 m */}
        <path d="M156.15 330 L156.15 382 L180 382 M240 382 L263.85 382 L263.85 330" strokeWidth="2" />
        <path d="M180 382 L180 410 M180 410 A28 28 0 0 0 208 382" strokeWidth="0.9" />
        <path d="M240 382 L240 410 M240 410 A28 28 0 0 1 212 382" strokeWidth="0.9" />
        <path d="M180 330 L180 344 M240 330 L240 344" strokeWidth="0.9" />
      </g>

      {/* Cotes */}
      <g className="text-brass-deep" stroke="currentColor" strokeWidth="0.8">
        <path d="M80 140 L80 30 M340 140 L340 30" strokeDasharray="2 3" />
        <path d="M80 40 L340 40" />
        <path d={tick(80, 40)} strokeWidth="1.4" />
        <path d={tick(340, 40)} strokeWidth="1.4" />

        <path d="M270 70 L392 70 M270 330 L392 330" strokeDasharray="2 3" />
        <path d="M382 70 L382 330" />
        <path d={tick(382, 70)} strokeWidth="1.4" />
        <path d={tick(382, 330)} strokeWidth="1.4" />

        <path d="M150 330 L110 330 M150 382 L110 382" strokeDasharray="2 3" />
        <path d="M120 330 L120 382" />
        <path d={tick(120, 330)} strokeWidth="1.4" />
        <path d={tick(120, 382)} strokeWidth="1.4" />
      </g>

      <g className="fill-brass-deep font-serif" fontStyle="italic">
        <text x="210" y="33" textAnchor="middle" fontSize="16">5,00 m</text>
        <text x="400" y="200" textAnchor="middle" fontSize="16" transform="rotate(90 400 200)">5,00 m</text>
        <text x="108" y="361" textAnchor="end" fontSize="15">1,00 m</text>
      </g>

      <g className="fill-current font-serif">
        <text x="210" y="288" textAnchor="middle" fontSize="15" fontStyle="italic">Serre</text>
        <text x="210" y="363" textAnchor="middle" fontSize="12" letterSpacing="3">SAS</text>
        <text x="210" y="258" textAnchor="middle" fontSize="9" letterSpacing="2" opacity="0.7">LANTERNE</text>
      </g>

      {/* Nord */}
      <g stroke="currentColor" strokeWidth="0.9" transform="translate(395 420)">
        <circle r="14" />
        <path d="M0 -11 L5 6 L0 2 L-5 6 Z" fill="currentColor" />
      </g>
      <text x="395" y="398" textAnchor="middle" fontSize="10" className="fill-current font-serif">N</text>

      <text x="24" y="440" fontSize="10" letterSpacing="2.5" className="fill-current" opacity="0.7">
        PLAN — VUE DE DESSUS · ÉCHELLE INDICATIVE
      </text>
    </svg>
  );
}
