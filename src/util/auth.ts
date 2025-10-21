export function getAuthToken(): string | null {
  return localStorage.getItem('token')
}

export function setAuthToken(token: string): void {
  if (!token) return
  localStorage.setItem('token', token)
}
