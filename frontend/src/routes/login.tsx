import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/login")({
    beforeLoad: async ({ context }) => {
        const { isAuthenticated } = context.auth;
        if (isAuthenticated) {
            throw redirect({ to: "/" });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    const router = useRouter();

    const { setIsAuthenticated } = useAuth();
    return (
        <button
            onClick={() => {
                setIsAuthenticated(true);
                router.invalidate();
            }}
        >
            Login
        </button>
    );
}
