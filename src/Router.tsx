import { Route, Routes } from "react-router-dom";
import { Platform } from "./pages/Platform";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Login</h1>} />
            <Route path="/platform" element={<Platform />} />
        </Routes>
    )
}