import { useCallback, useState } from "react";

export const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = "GET", body = null) => {
    try {
      setIsLoading(true);
      setError(null);

      const options = {
        method,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const message = data?.message || "Произошла ошибка запроса";
        setError(message);

        return {
          success: false,
          data,
          message,
        };
      }

      return {
        success: true,
        data,
        message: null,
      };
    } catch (e) {
      const message = e.message || "Произошла ошибка запроса";
      setError(message);

      return {
        success: false,
        data: null,
        message,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendRequest, isLoading, error };
};
