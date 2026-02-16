import axios, { AxiosError, AxiosResponse } from "axios";

// Normalize error like fetchWithError does
function handleAxiosError(error: unknown): never {
  const err = error as AxiosError<{ message?: string }>;
  const message = err.response?.data?.message || err.message || "Unknown error";
  console.error("Fetch Error:", message);
  throw new Error(message);
}

const fetchDataGet = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (e) {
    handleAxiosError(e);
  }
};

const fetchDataPost = async <T = unknown>(
  url: string,
  data: unknown = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (e) {
    handleAxiosError(e);
  }
};

const fetchDataPatch = async <T = unknown>(
  url: string,
  data: unknown = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.patch(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (e) {
    handleAxiosError(e);
  }
};

const fetchDataDelete = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.delete(url);
    return response.data;
  } catch (e) {
    handleAxiosError(e);
  }
};

async function fetchWithError<T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, options);
  const result: T & { message?: string } = await res.json();

  if (!res.ok) {
    throw new Error(
      (result as { message?: string }).message || "Unknown error"
    );
  }

  return result;
}

export {
  fetchDataGet,
  fetchDataPost,
  fetchDataPatch,
  fetchDataDelete,
  fetchWithError,
};
