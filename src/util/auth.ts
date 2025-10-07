export function getAuthToken(): string | null {
  return import.meta.env.VITE_ACCESS_TOKEN
}
