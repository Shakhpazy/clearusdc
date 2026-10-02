"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState, useEffect } from "react";
import { User } from "@supabase/auth-js/dist/module/lib/types";
import { supabase } from "@/lib/supabase/client";
import { Profile } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import LogoutButton from "@/components/auth/logout-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

function Topbar() {
  const [account, setAccount] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAccount(session?.user ?? null);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);


  return (

    <div className="topbar z-100">
        <div className="absolute right-5 top-4">
            <div className="flex items-center gap-2">
                <ThemeToggle />
                {account ? (
                    <div className="flex items-center gap-2">
                        <HugeiconsIcon icon={Profile} className="h-6 w-6 text-muted-foreground" />
                        <LogoutButton />
                    </div>
                    ) : (
                    <div className="flex items-center gap-2">
                        <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-9 px-3 text-sm")}>
                            Log in
                        </Link>
                        <Link href="/signup" className={cn(buttonVariants({ size: "lg" }), "h-9 px-3 text-sm")}>
                            Sign up
                        </Link>
                    </div>
                    )}
            </div>
        </div>
    </div>
  );
}

export default Topbar;
