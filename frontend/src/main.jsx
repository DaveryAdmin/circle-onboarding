import React from "react";
import ReactDOM from "react-dom/client";
import {
BrowserRouter,
Routes,
Route,
Navigate,
} from "react-router-dom";
 
import {
AuthProvider,
useAuth,
} from "./context/AuthContext";
 
import OnboardingFlow from "./components/onboarding/OnboardingFlow";
import Dashboard from "./components/dashboard/Dashboard";
import TestLab from "./components/Admin/TestLab";
 
import "./styles/global.css";
 
const ProtectedRoute = ({
children,
}) => {
const { user, loading } =
useAuth();
 
if (loading) {
return (
<div className="app-loading">
Loading...
</div>
);
}
 
if (!user) {
return (
<Navigate
to="/login"
replace
/>
);
}
 
return children;
};
 
const LoginPage = () => {
const { login } = useAuth();
 
const [jwt, setJwt] =
React.useState("");
 
return (
<div className="login-page">
<div className="login-card">
<div className="step-icon">
Circle
</div>
 
<h1>
Circle Onboarding
</h1>
 
<p>
Paste your SSO token
to continue.
</p>
 
<textarea
rows={5}
value={jwt}
onChange={(e) =>
setJwt(
e.target.value
)
}
placeholder="eyJ..."
className="token-input"
/>
 
<button
className="btn btn-primary btn-lg"
onClick={() => {
login(jwt.trim());
 
window.location.href =
"/onboarding";
}}
disabled={!jwt.trim()}
>
Sign In
</button>
</div>
</div>
);
};
 
ReactDOM.createRoot(
document.getElementById("root")
).render(
<React.StrictMode>
<AuthProvider>
<BrowserRouter>
<Routes>
<Route
path="/login"
element={<LoginPage />}
/>
 
<Route
path="/onboarding"
element={
<ProtectedRoute>
<OnboardingFlow />
</ProtectedRoute>
}
/>
 
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
 
<Route
path="/testlab"
element={
<ProtectedRoute>
<TestLab />
</ProtectedRoute>
}
/>
 
<Route
path="*"
element={
<Navigate
to="/onboarding"
replace
/>
}
/>
</Routes>
</BrowserRouter>
</AuthProvider>
</React.StrictMode>
);