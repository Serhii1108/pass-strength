export type Status = "easy" | "medium" | "strong" | "warn" | "clear"

export const statusCodes: Record<number, Status> = {
  0: "warn",
  1: "easy",
  2: "medium",
  3: "strong"
}

export const passStrengthAmount: number = 3