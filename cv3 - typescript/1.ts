// Exercise 1
// Define a TS type that represents following array of users and use it here

interface User {
    firstName: string,
    lastName: string,
    login: string | null,
    role: string,
    hobbies: Array<String>
    age?: Number | null,
    banned?: boolean
}

export const users: Array<User> = [
    { firstName: 'John', lastName: 'Doe', login: 'john.doe@mendelu.cz', role: "admin", hobbies: ['reading', 'writing'], age: 40 },
    { firstName: 'Alice', lastName: 'Smith', login: 'smilf', role: "user", hobbies: ['swimming'], age: 25, banned: true },
    { firstName: 'Jane', lastName: 'Foo', login: 'jane.foo@example.com', role: "moderator", hobbies: [], age: null },
    { firstName: 'Kevin', lastName: 'Bar', login: 'kevin12345', role: "moderator", hobbies: ['IT', 'animals', 'cars', 'music'], age: 19, banned: true },
    { firstName: 'Monica', lastName: 'Geller', login: null, role: "user", hobbies: ['cooking', 'eating'], banned: false },
    { firstName: 'Rachel', lastName: 'Green', login: 'ra.ch.el', role: "user", hobbies: ['typescript 🧡'], age: 21, },
]

console.log(users)