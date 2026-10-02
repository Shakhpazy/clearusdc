import Topbar from "@/components/topbar";
import WorkspacePanels from "@/components/workspace-panels";

export default function Home() {
  return (
    <>
    <Topbar />
    <div className="h-dvh overflow-hidden bg-background font-sans">
      <WorkspacePanels />
    </div>
    </>
  );
}
