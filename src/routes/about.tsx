import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
  component: ColorTestPage
})

const TAILWIND_COLORS: { name: string; hex: string }[] = [
  { name: "slate", hex: "#64748b" },
  { name: "gray", hex: "#6b7280" },
  { name: "zinc", hex: "#71717a" },
  { name: "neutral", hex: "#737373" },
  { name: "stone", hex: "#78716c" },
  { name: "red", hex: "#ef4444" },
  { name: "orange", hex: "#f97316" },
  { name: "amber", hex: "#f59e0b" },
  { name: "yellow", hex: "#eab308" },
  { name: "lime", hex: "#84cc16" },
  { name: "green", hex: "#22c55e" },
  { name: "emerald", hex: "#10b981" },
  { name: "teal", hex: "#14b8a6" },
  { name: "cyan", hex: "#06b6d4" },
  { name: "sky", hex: "#0ea5e9" },
  { name: "blue", hex: "#3b82f6" },
  { name: "indigo", hex: "#6366f1" },
  { name: "violet", hex: "#8b5cf6" },
  { name: "purple", hex: "#a855f7" },
  { name: "fuchsia", hex: "#d946ef" },
  { name: "pink", hex: "#ec4899" },
  { name: "rose", hex: "#f43f5e" }
]

function ColorTestPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Tailwind CSS Color Palette (-500)</h1>
      {TAILWIND_COLORS.map(({ name, hex }) => (
        <div
          key={name}
          style={{ backgroundColor: hex }}
          className="flex h-[512px] w-[512px] items-center justify-center rounded-xl text-2xl font-bold text-white shadow-lg"
        >
          {name}-500
        </div>
      ))}
    </div>
  )
}
