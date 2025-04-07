import { GET_USERS } from '../features/gqlQueries'
import { User } from '../types/types'
import { useQuery, useMutation, gql } from '@apollo/client'

export default class Users {
  users: User[]

  constructor(user: User) {
    const { data } = useQuery(GET_USERS)

    this.users = data.getUsers
  }

  async getUsers() {
    return {
      data: this.users,
    }
  }
}
