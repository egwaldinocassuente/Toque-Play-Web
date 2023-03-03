import { Routes, Route } from "react-router-dom";

import Login from "../login/Login";

export function RoutesConfig() {
    return (
        <Routes>
            <Route path="/signIn" element={<Login />} />
            <Route path="*" element={''} />
        </Routes>
    );
}
