import axios, { AxiosResponse } from 'axios'

type ErrorResponse = {
  message?: string
}

function handleAxiosError(error: unknown): never {
  const message = axios.isAxiosError<ErrorResponse>(error)
    ? error.response?.data?.message || error.message
    : error instanceof Error
      ? error.message
      : 'Unknown error'

  throw new Error(message)
}

const fetchDataGet = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url)
    return response.data
  } catch (error) {
    return handleAxiosError(error)
  }
}

const fetchDataPost = async <T = unknown>(url: string, data: unknown = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    return response.data
  } catch (error) {
    return handleAxiosError(error)
  }
}

const fetchDataPatch = async <T = unknown>(url: string, data: unknown = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.patch(url, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    return response.data
  } catch (error) {
    return handleAxiosError(error)
  }
}

const fetchDataDelete = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.delete(url)
    return response.data
  } catch (error) {
    return handleAxiosError(error)
  }
}

async function fetchWithError<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(url, options)
  const result: T & { message?: string } = await res.json()

  if (!res.ok) {
    throw new Error((result as { message?: string }).message || 'Unknown error')
  }

  return result
}

export { fetchDataGet, fetchDataPost, fetchDataPatch, fetchDataDelete, fetchWithError }
