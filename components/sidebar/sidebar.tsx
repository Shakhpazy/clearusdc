"use client";

import { FormEvent, useState } from "react";

type FormData = {
  userName: string;
  userEmail: string;
  clientName: string;
  clientEmail: string;
  description: string;
  wallet: string;
  chain: string;
};

const initialFormData: FormData = {
  userName: "",
  userEmail: "",
  clientName: "",
  clientEmail: "",
  description: "",
  wallet: "",
  chain: "",
};

const steps = ["Your details", "Client details", "Description", "Wallet & chain"];

function Sidebar() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentForm((current) => Math.min(current + 1, 5));
  };

  const startNewRequest = () => {
    setFormData(initialFormData);
    setCurrentForm(1);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="workspace-sidebar-content flex h-full flex-col justify-between gap-8">
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Clear USDC</p>
          <h1 className="text-lg font-semibold">Request ready</h1>
          <p className="text-sm leading-6 text-muted-foreground">
            Your request has been prepared. Connect the send action to your backend when it is ready.
          </p>
        </div>
        <button type="button" onClick={startNewRequest} className="h-10 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
          Create new request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleNext} className="workspace-sidebar-content flex h-full flex-col gap-8">
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">Clear USDC</p>
          <h1 className="text-lg font-semibold">New request</h1>
        </div>

        {currentForm <= 4 && (
          <div className="flex gap-1.5" aria-label={`Step ${currentForm} of 4`}>
            {steps.map((step, index) => (
              <span key={step} className={`h-1 flex-1 rounded-full ${index < currentForm ? "bg-foreground" : "bg-border"}`} />
            ))}
          </div>
        )}

        <div className="space-y-4 mt-10">
          {currentForm === 1 && (
            <>
              <div><p className="text-sm font-medium">Your details</p><p className="mt-1 text-sm text-muted-foreground">Who should we contact about this request?</p></div>
              <label className="block space-y-1.5 text-sm font-medium">Name<input required value={formData.userName} onChange={(event) => updateField("userName", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="Your name" /></label>
              <label className="block space-y-1.5 text-sm font-medium">Email<input required type="email" value={formData.userEmail} onChange={(event) => updateField("userEmail", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="you@company.com" /></label>
            </>
          )}

          {currentForm === 2 && (
            <>
              <div><p className="text-sm font-medium">Client details</p><p className="mt-1 text-sm text-muted-foreground">Who is this request for?</p></div>
              <label className="block space-y-1.5 text-sm font-medium">Client name<input required value={formData.clientName} onChange={(event) => updateField("clientName", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="Client name" /></label>
              <label className="block space-y-1.5 text-sm font-medium">Client email<input required type="email" value={formData.clientEmail} onChange={(event) => updateField("clientEmail", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="client@company.com" /></label>
            </>
          )}

          {currentForm === 3 && (
            <>
              <div><p className="text-sm font-medium">Description</p><p className="mt-1 text-sm text-muted-foreground">Give the client enough context to understand the request.</p></div>
              <label className="block space-y-1.5 text-sm font-medium">Request details<textarea required rows={5} value={formData.description} onChange={(event) => updateField("description", event.target.value)} className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="What is this request for?" /></label>
            </>
          )}

          {currentForm === 4 && (
            <>
              <div><p className="text-sm font-medium">Wallet and chain</p><p className="mt-1 text-sm text-muted-foreground">Choose where the USDC request will be sent.</p></div>
              <label className="block space-y-1.5 text-sm font-medium">Wallet<select required value={formData.wallet} onChange={(event) => updateField("wallet", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"><option value="" disabled>Choose a wallet</option><option value="MetaMask">MetaMask</option><option value="Coinbase Wallet">Coinbase Wallet</option><option value="Phantom">Phantom</option></select></label>
              <label className="block space-y-1.5 text-sm font-medium">Chain<select required value={formData.chain} onChange={(event) => updateField("chain", event.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-normal outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"><option value="" disabled>Choose a chain</option><option value="Ethereum">Ethereum</option><option value="Base">Base</option><option value="Polygon">Polygon</option><option value="Solana">Solana</option></select></label>
            </>
          )}

          {currentForm === 5 && (
            <>
              <div><p className="text-sm font-medium">Ready to send?</p><p className="mt-1 text-sm text-muted-foreground">Review your request or go back to make edits.</p></div>
              <dl className="space-y-2 rounded-lg border border-border bg-muted/35 p-3 text-sm"><div><dt className="text-muted-foreground">From</dt><dd>{formData.userName} · {formData.userEmail}</dd></div><div><dt className="text-muted-foreground">Client</dt><dd>{formData.clientName} · {formData.clientEmail}</dd></div><div><dt className="text-muted-foreground">Wallet</dt><dd>{formData.wallet} on {formData.chain}</dd></div></dl>
            </>
          )}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
        {currentForm > 1 && currentForm < 5 && <button type="button" onClick={() => setCurrentForm((current) => current - 1)} className="h-10 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted">Back</button>}
        {currentForm < 5 ? (
          <button type="submit" className="h-10 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">Next</button>
        ) : (
          <><button type="button" onClick={() => setCurrentForm(4)} className="h-10 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted">Go back to edit</button><button type="button" onClick={() => setIsSubmitted(true)} className="h-10 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">Send request</button><button type="button" onClick={startNewRequest} className="h-10 rounded-lg px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Create new</button></>
        )}
      </div>
    </form>
  );
}

export default Sidebar;
