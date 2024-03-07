// Exercise 6
// Get all banned users
// Calculate percentage of banned users and print it rounded down to the largest integer and add "%" sign
// Expected output: 33%
import { usersWithId } from "./3"
const bannedUsers = usersWithId.filter((user) => user.banned)
const percentageOfBannedUsers = (100 / usersWithId.length) * bannedUsers.length;
console.log(bannedUsers)
console.log(percentageOfBannedUsers.toFixed() + "%")

