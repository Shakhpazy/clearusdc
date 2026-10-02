"use client";

import { useLayoutEffect } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  useLayoutEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedTheme) applyTheme(savedTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = getTheme() === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <Button
      aria-label="Toggle color theme"
      className="size-10 rounded-full border border-border/70 bg-background/70 text-base shadow-sm backdrop-blur transition-transform hover:scale-105"
      onClick={toggleTheme}
      size="icon"
      type="button"
      variant="outline"
    >
      <span aria-hidden="true">◐</span>
    </Button>
  );
}
