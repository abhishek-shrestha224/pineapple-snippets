import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";

const router = createRouter({
    routeTree,
    context: { auth: undefined! },
    defaultNotFoundComponent: () => <div>Global Not Found!(</div>,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const AppRouter = () => {
    const auth = useAuth();
    return <RouterProvider router={router} context={{ auth }} />;
};

export default AppRouter;
