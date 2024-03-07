// Exercise 2
// Create array of first names of all users and print it
// Expected output: ["John", "Alice", "Jane", "Kevin", "Monica", "Rachel"]
import { users } from "./1"

const firstNames: string[] = users.map((user) => user["firstName"])

console.log(firstNames)
