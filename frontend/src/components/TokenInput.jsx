import { useState } from "react";
import { saveDevToken } from "../sso-dev";

export default function TokenInput() {
  const [token, setToken] = useState("");

  function handleSubmit() {
    if (!token.trim()) return;

    saveDevToken(token);

    window.location.href = "/onboarding";
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>Paste your SSO token</h2>

      <textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <button onClick={handleSubmit} style={{ marginTop: 20 }}>
        Continue
      </button>
    </div>
  );
}