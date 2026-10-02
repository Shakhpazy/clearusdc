import Sidebar from "@/components/sidebar/sidebar";

export default function WorkspacePanels() {
  return (
    <section className="grid h-dvh min-h-0 w-full grid-cols-[32%_1fr] overflow-hidden rounded-xl border border-border/70 bg-card">
      <aside className="workspace-sidebar min-w-0 overflow-auto border-r border-border/70 p-4 flex justify-end">
        <Sidebar />
      </aside>
      <main className="workspace-main-panel min-w-0 flex-1 overflow-auto">
        <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Right panel
        </p>
      </main>
    </section>
  );
}
