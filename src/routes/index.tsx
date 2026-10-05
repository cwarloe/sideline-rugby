import { createFileRoute } from "@tanstack/react-router";
import { SidelineApp } from "@/components/sideline-app";
import type { Mode } from "@/lib/u12";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { mode: Mode } => ({
    mode: search.mode === "fifteens" ? "fifteens" : "tens",
  }),
  component: Home,
});

function Home() {
  const { mode } = Route.useSearch();
  return <SidelineApp mode={mode} />;
}
