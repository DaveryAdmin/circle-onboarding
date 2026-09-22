import jwtDecode from "jwt-decode";

export function useDevSSO(token: string) {
  try {
    const decoded = jwtDecode(token);

    // Store token so API calls can use it
    localStorage.setItem("circle_sso_token", token);

    return { ok: true, decoded };
  } catch (err) {
    return { ok: false, error: "Invalid token" };
  }
}