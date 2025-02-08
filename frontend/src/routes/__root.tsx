import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContextType } from "../context/authContext";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RouterContext = {
    auth: AuthContextType;
};
export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}
