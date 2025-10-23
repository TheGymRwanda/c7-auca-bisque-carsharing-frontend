import { UserAuth } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { setAuthToken } from '../util/auth'

export default async function useAuth(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    if (response.status === 201) {
      const data: UserAuth = await response.json()
      setAuthToken(data.token)
      return true
    }
  } catch (e) {
    // ignore error
  }

  return false
}
