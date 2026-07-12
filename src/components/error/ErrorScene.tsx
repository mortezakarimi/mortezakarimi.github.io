import type { ErrorCode } from "@/lib/error-codes";
import { errorVisuals } from "@/lib/error-codes";

type ErrorSceneProps = {
  code: ErrorCode;
  displayCode: string;
};

const ORBS = [
  { size: 120, top: "12%", left: "8%", delay: "0s", duration: "7s" },
  { size: 80, top: "70%", left: "85%", delay: "1.2s", duration: "9s" },
  { size: 60, top: "20%", left: "78%", delay: "0.6s", duration: "6s" },
  { size: 100, top: "78%", left: "15%", delay: "1.8s", duration: "8s" },
  { size: 40, top: "45%", left: "92%", delay: "2.4s", duration: "5s" },
] as const;

const SPARKLES = [
  { top: "18%", left: "22%", delay: "0s" },
  { top: "32%", left: "68%", delay: "0.8s" },
  { top: "58%", left: "38%", delay: "1.6s" },
  { top: "72%", left: "62%", delay: "2.2s" },
  { top: "42%", left: "12%", delay: "1.1s" },
  { top: "84%", left: "48%", delay: "0.4s" },
] as const;

export function ErrorScene({ code, displayCode }: ErrorSceneProps) {
  const visual = errorVisuals[code];
  const digits = displayCode.split("");

  return (
    <div className="error-scene relative mx-auto mb-8 flex w-full max-w-md flex-col items-center gap-4">
      <div
        className="error-code-display font-mono text-6xl font-black tracking-tighter md:text-7xl"
        aria-hidden
      >
        {digits.map((digit, index) => (
          <span
            key={`${digit}-${index}`}
            className="error-code-digit inline-block text-gradient"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {digit}
          </span>
        ))}
      </div>

      <div className="relative flex h-44 w-full items-center justify-center md:h-48">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
        {ORBS.map((orb, index) => (
          <span
            key={index}
            className="error-orb absolute rounded-full blur-2xl"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              animationDelay: orb.delay,
              animationDuration: orb.duration,
              background: `radial-gradient(circle, color-mix(in oklab, ${visual.accent} 55%, transparent), transparent 70%)`,
            }}
          />
        ))}

        {SPARKLES.map((sparkle, index) => (
          <span
            key={index}
            className="error-sparkle absolute size-2 rounded-full"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
              background: visual.accent,
              boxShadow: `0 0 12px ${visual.accent}`,
            }}
          />
        ))}

        <span className="error-ring absolute inset-8 rounded-full border border-[var(--color-accent)]/20" />
        <span className="error-ring error-ring--delayed absolute inset-14 rounded-full border border-[var(--color-accent)]/10" />
        </div>

        <div
        className={`error-mascot error-mascot--${visual.mood} relative z-10 flex size-28 items-center justify-center rounded-full md:size-32`}
        style={{
          background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, ${visual.accent} 35%, white 5%), color-mix(in oklab, ${visual.accent} 18%, var(--color-background)))`,
          boxShadow: `0 0 40px color-mix(in oklab, ${visual.accent} 35%, transparent), inset 0 0 24px color-mix(in oklab, ${visual.accent} 20%, transparent)`,
        }}
        aria-hidden
      >
        <span className="text-5xl md:text-6xl">{visual.emoji}</span>
        <span className="error-mascot-face absolute bottom-5 flex gap-3 md:bottom-6">
          <span className="size-2 rounded-full bg-[var(--color-foreground)]/80" />
          <span className="size-2 rounded-full bg-[var(--color-foreground)]/80" />
        </span>
        <span className="error-mascot-smile absolute bottom-3 h-2 w-6 rounded-b-full border-2 border-t-0 border-[var(--color-foreground)]/70 md:bottom-4" />
        </div>

        <div className="error-confetti pointer-events-none absolute inset-x-0 top-16 bottom-0" aria-hidden>
        {Array.from({ length: 14 }).map((_, index) => (
          <span
            key={index}
            className="error-confetti-piece absolute size-2 rounded-sm"
            style={{
              left: `${8 + index * 6.5}%`,
              animationDelay: `${index * 0.35}s`,
              background:
                index % 3 === 0
                  ? visual.accent
                  : index % 3 === 1
                    ? "#52d2a9"
                    : "#3a9e7e",
            }}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
