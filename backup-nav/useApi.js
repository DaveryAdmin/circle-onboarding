import { useCallback } from "react";

import { useAuth } from "../context/AuthContext";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "/api";

export const useApi = () => {
  const { token, logout } = useAuth();

  const request = useCallback(
    async (path, options = {}) => {
      const response = await fetch(
        BASE_URL + path,
        {
          ...options,

          cache: "no-store",

          headers: {
            Accept: "application/json",
            "Content-Type":
              "application/json",
            "Cache-Control":
              "no-cache",

            Authorization:
              `Bearer ${token}`,

            ...options.headers,
          },
        }
      );

      if (response.status === 401) {
        logout();

        throw new Error(
          "Session expired"
        );
      }

      const responseText =
        await response.text();

      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(
            responseText
          );
        } catch {
          throw new Error(
            "The server returned an invalid response."
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            `HTTP ${response.status}`
        );
      }

      return data;
    },
    [token, logout]
  );

  const get = useCallback(
    (path) =>
      request(path, {
        method: "GET",
      }),
    [request]
  );

  const post = useCallback(
    (path, body) =>
      request(path, {
        method: "POST",
        body: JSON.stringify(
          body
        ),
      }),
    [request]
  );

  const patch = useCallback(
    (path, body) =>
      request(path, {
        method: "PATCH",
        body: JSON.stringify(
          body
        ),
      }),
    [request]
  );

  const put = useCallback(
    (path, body) =>
      request(path, {
        method: "PUT",
        body: JSON.stringify(
          body
        ),
      }),
    [request]
  );

  return {
    get,
    post,
    patch,
    put,
  };
};