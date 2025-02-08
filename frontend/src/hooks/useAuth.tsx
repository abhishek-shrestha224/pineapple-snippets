import { use } from "react";
import { AuthContext } from "../context/authContext";

export function useAuth() {
    const context = use(AuthContext);
    if (!context) {
        throw new Error("useAuth hook must be used within AuthProvider");
    }
    return context;
}
