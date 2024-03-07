// Exercise 4
// Define type that represents tuple of user's id and upper-cased last name
// Create and print slice of first 4 items of array of tuples
// Expected output: [[1, "DOE"], [2, "SMITH"], [3, "FOO"], [4, "BAR"]]

import { usersWithId } from "./3"
import { type UserWithId } from "./3"

type UserTuple = [number, string]

const usersTuple: Array<UserTuple> = usersWithId.slice(0, 4).map((user) => [user.id, user.lastName.toUpperCase()])


console.log(usersTuple)
