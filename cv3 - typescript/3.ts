// Exercise 3
// Define a type that represents user with id
// Use User from Exercise 1 as a base
// Use this type and create a new array of users with their ids
// Id is based on index of the user and starts with 1
import { users } from "./1"
import { type User } from "./1"
export interface UserWithId extends User {
    id: number
}

export const usersWithId: Array<UserWithId> = users.map((user, index) => ({ ...user, id: index + 1 }))

console.log(usersWithId)
