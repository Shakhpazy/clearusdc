import LoginForm from "@/components/auth/login-form";
import { AuthShell } from "@/components/auth/auth-shell";

function LoginPage() {
    return (
        <AuthShell>
            <LoginForm />
        </AuthShell>
    )
}

export default LoginPage;
