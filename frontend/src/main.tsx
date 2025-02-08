import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/authProvider";
import AppRouter from "./Router";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </StrictMode>
    );
}
