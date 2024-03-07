// Exercise 5
// Write a function that creates user's full name and use it to get and print full name of the last user
// Declare a type for the function and use it correctly
// Expected output: "Rachel Green"

import { usersWithId } from "./3"

type GetFullName = (id: number) => string;

const getFullName: GetFullName = (id) => {
    return usersWithId[id].firstName + " " + usersWithId[id].lastName;
}
const fullName: string = getFullName(3)

console.log(fullName)
