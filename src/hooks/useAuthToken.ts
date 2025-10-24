import { UserAuth } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken, setAuthToken } from '../util/auth'

export default async function useAuthToken(): Promise<UserAuth | null> {
  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 200) {
      const data: UserAuth = await response.json()
      setAuthToken(data.token)
      return data
    }
  } catch (e) {
    // ignore error
  }

  return null
}
