import axios, { AxiosError, type AxiosResponse } from "axios";

const AXIOS_TIMEOUT = 30000;

const API_BASE = "/api/web";
const BOOKING_BASE = "/api/booking";
const GATEWAY_BASE = "/api/gateway";

const successHandler = (response: AxiosResponse) => response;
const errorHandler = (error: AxiosError) => {
  return Promise.reject({ ...error });
};

export const axiosApiInstance = axios.create({
  baseURL: API_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
});

export const axiosInstance = axios.create({
  baseURL: BOOKING_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export const axiosInstanceProd = axios.create({
  baseURL: BOOKING_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstanceProd.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export const axiosInstanceAuth = (token: string) =>
  axios.create({
    baseURL: BOOKING_BASE,
    timeout: AXIOS_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const axiosInstancePatch = axios.create({
  baseURL: BOOKING_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/merge-patch+json",
    Accept: "application/json",
  },
});

axiosInstancePatch.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export const axiosInstanceAuthPatch = (token: string) =>
  axios.create({
    baseURL: BOOKING_BASE,
    timeout: AXIOS_TIMEOUT,
    headers: {
      "Content-Type": "application/merge-patch+json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

let csrfTokenSingleton: string | null = null;
let csrfTokenPromise: Promise<string> | null = null;

const fetchCsrfTokenFromServer = async (): Promise<string> => {
  if (csrfTokenSingleton) {
    return csrfTokenSingleton;
  }

  if (csrfTokenPromise) {
    return csrfTokenPromise;
  }

  const tokenUrl = `${API_BASE}/csrf-token/`;

  csrfTokenPromise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(tokenUrl);
      if (!response.ok) {
        reject(new Error(`Failed to fetch CSRF token: ${response.status}`));
        return;
      }
      const data = await response.json();
      if (!data.csrfToken) {
        reject(new Error("CSRF token not found in response"));
        return;
      }
      csrfTokenSingleton = data.csrfToken;
      resolve(data.csrfToken);
    } catch (error) {
      reject(error);
    } finally {
      csrfTokenPromise = null;
    }
  });
  return csrfTokenPromise;
};

export const axiosApiInstanceWithCsrf = axios.create({
  baseURL: API_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
});

axiosApiInstanceWithCsrf.interceptors.request.use(
  async (config) => {
    try {
      const token = await fetchCsrfTokenFromServer();
      if (token) {
        config.headers["X-CSRF-Token"] = token;

        const method = config.method?.toUpperCase();
        if (
          method === "POST" ||
          method === "PUT" ||
          method === "PATCH" ||
          method === "DELETE"
        ) {
          if (typeof config.data !== "object" || config.data === null) {
            config.data = {};
          }
          if (!(config.data instanceof FormData)) {
            config.data.csrfToken = token;
          }
        }
      }
    } catch (error) {
      return Promise.reject(
        new Error("Failed to obtain CSRF token. Request aborted.")
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApiInstanceWithCsrf.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      csrfTokenSingleton = null;

      try {
        const newToken = await fetchCsrfTokenFromServer();
        originalRequest.headers["X-CSRF-Token"] = newToken;

        if (
          originalRequest.data &&
          !(originalRequest.data instanceof FormData)
        ) {
          const data =
            typeof originalRequest.data === "string"
              ? JSON.parse(originalRequest.data)
              : originalRequest.data;
          data.csrfToken = newToken;
          originalRequest.data = JSON.stringify(data);
        }

        return axiosApiInstanceWithCsrf(originalRequest);
      } catch (retryError) {
        return Promise.reject(retryError);
      }
    }

    return Promise.reject(error);
  }
);

export const axiosGatewayInstance = axios.create({
  baseURL: GATEWAY_BASE,
  timeout: AXIOS_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosGatewayInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
