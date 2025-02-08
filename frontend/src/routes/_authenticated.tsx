import {
    createFileRoute,
    Link,
    Outlet,
    redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
    beforeLoad: async ({ context }) => {
        const { isAuthenticated } = context.auth;
        if (!isAuthenticated) {
            throw redirect({ to: "/login" });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{" "}
                <Link to="/dashboard" className="[&.active]:font-bold">
                    About
                </Link>{" "}
                <Link to="/logout" className="[&.active]:font-bold">
                    Logout
                </Link>{" "}
            </div>
            <hr />
            <Outlet />
        </>
    );
}
