import { UserAuth } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { setAuthToken } from '../util/auth'

export default async function useAuthToken(): Promise<UserAuth | null> {
  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 201) {
      const data: UserAuth = await response.json()
      setAuthToken(data.token)
      return data
    }
  } catch (e) {
    // ignore error
  }

  return null
}
