import { ThemeToggle } from "@/components/ui/theme-toggle";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-page relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
      <div className="pointer-events-none absolute inset-0 auth-grid" />

      <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>

      <section className="relative z-10 w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 grid size-11 place-items-center rounded-2xl bg-foreground text-background shadow-lg shadow-foreground/10">
            <span className="text-sm font-semibold tracking-[-0.12em]">CU</span>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Clear USDC</p>
        </div>
        {children}
      </section>
    </main>
  );
}
