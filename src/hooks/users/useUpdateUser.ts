import { useMutation } from '@tanstack/react-query'
import React from 'react'
import userService, { User } from '../../services/userService'

interface UpdateUser {
  id: string;
  data: User;
}

export const useUpdateUser = () => {
  return useMutation<User, Error, UpdateUser>({
    mutationFn:({id, data})=> userService.put(id, data)
  })
}

export default useUpdateUser
