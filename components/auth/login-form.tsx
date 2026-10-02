"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";



function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    async function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setMessage(null);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error("Supabase login error:", error);
            setError(
                error.code === "invalid_credentials"
                    ? "Email or password is incorrect."
                    : error.code === "email_not_confirmed"
                      ? "Confirm your email address before signing in."
                      : "We couldn't sign you in. Please try again."
            );
        } else {
            setMessage("You’re signed in successfully.");
            setEmail("");
            setPassword("");
            redirect("/"); // Redirect to the dashboard page after successful login
        }

        setIsLoading(false);
    }

    return (
        <Card className="w-full border border-border/70 bg-card/90 py-7 shadow-2xl shadow-foreground/8 backdrop-blur-xl [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(7)]">
        <CardHeader className="gap-2">
            <CardTitle className="text-2xl font-semibold tracking-[-0.04em]">Welcome back</CardTitle>
            <CardDescription className="text-sm">Sign in to continue to your workspace.</CardDescription>
            <CardAction>
            <Link className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline" href="/signup">Create account</Link>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form id="login-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                    Forgot your password?
                    </a>
                </div>
                <Input id="password" name="password" type="password" minLength={6} required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {error && <p className="mt-5 rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2.5 text-sm text-destructive" role="alert">{error}</p>}
            {message && <p className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2.5 text-sm text-emerald-700 dark:text-emerald-300" role="status">{message}</p>}
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-3">
            <Button type="submit" className="h-10 w-full text-sm" form="login-form" disabled={isLoading}>
            {isLoading ? "Signing in…" : "Sign in"}
            </Button>
        </CardFooter>
        </Card>
    )
}

export default LoginForm
