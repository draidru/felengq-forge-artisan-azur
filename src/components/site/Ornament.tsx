import { cn } from "@/lib/utils";

/** Séparateur ornemental en laiton : filets, volutes affrontées et losange central. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-primary", className)} aria-hidden="true">
      <span className="brass-rule w-12 sm:w-20" />
      <svg width="96" height="24" viewBox="0 0 96 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M40 12 C 34 12, 31 5, 25 5 C 19 5, 17 11, 21 14 C 24 16, 27 13, 25 11" />
        <path d="M40 12 C 34 12, 31 19, 25 19 C 21 19, 18 17, 16 14" />
        <path d="M16 14 C 12 9, 6 12, 2 12" />
        <path d="M56 12 C 62 12, 65 5, 71 5 C 77 5, 79 11, 75 14 C 72 16, 69 13, 71 11" />
        <path d="M56 12 C 62 12, 65 19, 71 19 C 75 19, 78 17, 80 14" />
        <path d="M80 14 C 84 9, 90 12, 94 12" />
        <path d="M48 6 L 53 12 L 48 18 L 43 12 Z" fill="currentColor" fillOpacity="0.25" />
      </svg>
      <span className="brass-rule w-12 sm:w-20" />
    </div>
  );
}

/** Grande volute de fer forgé en filigrane, pour les fonds. */
export function FiligreeVolute({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      viewBox="0 0 260 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M10 210 C 10 110, 90 40, 170 60 C 232 76, 242 152, 192 166 C 152 178, 130 142, 156 126 C 172 116, 188 130, 176 141" />
      <path d="M62 116 C 52 80, 26 68, 16 82 C 8 94, 22 106, 32 96" />
      <path d="M118 54 C 122 30, 146 16, 166 24 C 180 30, 176 46, 164 44" />
      <path d="M36 168 C 60 160, 80 170, 84 188 C 87 202, 72 208, 66 198" />
      <path d="M200 62 C 220 40, 248 44, 250 64 C 252 80, 234 84, 230 72" />
      <circle cx="176" cy="141" r="2" fill="currentColor" />
      <circle cx="32" cy="96" r="2" fill="currentColor" />
      <circle cx="164" cy="44" r="2" fill="currentColor" />
    </svg>
  );
}

/** Monogramme : petite volute en S. */
export function VoluteMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
      <path d="M16 3 C 24 3, 27 10, 23 14 C 20 17, 15 15, 16 11 C 17 8, 21 9, 20 12" />
      <path d="M16 29 C 8 29, 5 22, 9 18 C 12 15, 17 17, 16 21 C 15 24, 11 23, 12 20" />
      <path d="M16 3 L 16 29" strokeOpacity="0.5" />
    </svg>
  );
}
