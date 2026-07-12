export const errorCodes = [
  400, 401, 403, 404, 408, 429, 500, 502, 503, 504,
] as const;

export type ErrorCode = (typeof errorCodes)[number] | "default";

export function normalizeErrorCode(code: number): ErrorCode {
  if ((errorCodes as readonly number[]).includes(code)) {
    return code as ErrorCode;
  }

  if (code >= 500) {
    return 500;
  }

  if (code >= 400) {
    return 400;
  }

  return "default";
}

export const errorVisuals: Record<
  ErrorCode,
  { emoji: string; accent: string; mood: "wave" | "spin" | "bounce" | "wiggle" }
> = {
  400: { emoji: "🎪", accent: "#fbbf24", mood: "wiggle" },
  401: { emoji: "🔐", accent: "#a78bfa", mood: "bounce" },
  403: { emoji: "🚧", accent: "#fb7185", mood: "wiggle" },
  404: { emoji: "🧭", accent: "#52d2a9", mood: "bounce" },
  408: { emoji: "⏳", accent: "#38bdf8", mood: "spin" },
  429: { emoji: "🐢", accent: "#f472b6", mood: "wiggle" },
  500: { emoji: "🐹", accent: "#52d2a9", mood: "bounce" },
  502: { emoji: "🌉", accent: "#34d399", mood: "wave" },
  503: { emoji: "💤", accent: "#818cf8", mood: "wave" },
  504: { emoji: "🛰️", accent: "#2dd4bf", mood: "spin" },
  default: { emoji: "✨", accent: "#52d2a9", mood: "bounce" },
};
