#!/bin/node

console.log('--------- create an object ---------');

const user = {
    username: "v1p34",
    email: "viper@coldmail.com",
    password: "Fanged123",

    changeEmail(newEmail) {
        if (!newEmail.includes('@')) {
            throw new Error("Must be a valid email")
        }
        this.email = newEmail;
    },

    changePassword: function (oldPassword, newPassword, confirmNew) {
        if (oldPassword != this.password) {
            throw new Error("please provide your current password")
        }
        if (newPassword != confirmNew) {
            throw new Error("Passwords do not match")
        }
        if (newPassword.length < 7) {
            throw new Error("Password must be at least 7 characters")
        }
        this.password = newPassword;
    }
}

console.log("username", user.username)
console.log("user:", user);

console.log('--------- invoke methods ---------');
// user.changeEmail('pear')
user.changeEmail("viper@pear.com")
console.log("user:", user);


// user.changePassword('fanged321', 'Coil89', 'Coil98')
// user.changePassword('Fanged123', 'Coil89', 'Coil98')
// user.changePassword('Fanged123', 'Coil89', 'Coil89')
user.changePassword('Fanged123', 'Coiled89', 'Coiled89')
console.log("user:", user);

user.password = 'hmm'
console.log("user:", user);

console.log('--------- access keys and values ---------');
console.log('keys:', Object.keys(user))
console.log('values:', Object.values(user))

console.log('--------- iterate over keys ---------');
const keys = Object.keys(user)
for (let i = 0; i < keys.length; i++) {
    console.log(`key ${i}: ${keys[i]}`)
}

console.log('--------- iterate #2 over keys ---------');
for (const key of Object.keys(user)) {
   console.log(`${key}`) 
}

console.log('--------- iterate #3 over keys ---------');
for (const key in user) {
   console.log(`${key}: ${user[key]}`)  // can't say user.key!
}

console.log('--------- prevent changes to an object ---------');
Object.freeze(user)
user.changeEmail('not@possible.com')
user.email = 'wont@work.either'
console.log('email is still:', user["email"])