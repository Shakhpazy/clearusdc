import SignupForm from "@/components/auth/signup-form";
import { AuthShell } from "@/components/auth/auth-shell";

function SignupPage() {
    return (
        <AuthShell>
            <SignupForm />
        </AuthShell>
    )
}

export default SignupPage;
