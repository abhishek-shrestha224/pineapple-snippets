import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useAuth } from "../../hooks/useAuth";

export const Route = createFileRoute("/_authenticated/logout")({
    component: RouteComponent,
});

function RouteComponent() {
    const router = useRouter();

    const { setIsAuthenticated } = useAuth();
    return (
        <button
            onClick={() => {
                setIsAuthenticated(false);
                router.invalidate();
            }}
        >
            Logout
        </button>
    );
}
