import { useQuery } from '@tanstack/react-query'
import { CACHE_KEY_USERS } from '../../constants'
import userService, { type User } from '../../services/userService'

const useUsers = () => {
    return useQuery<User[], Error>({
    queryKey: CACHE_KEY_USERS,
    queryFn: userService.getAll
  })
}

export default useUsers
