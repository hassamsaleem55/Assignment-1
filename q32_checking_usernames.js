//Q 32
let current_users = ["hassam", "haider", "hamza", "farooq", "naqash"];
let new_user = ["adeel", "qamar", "alyan", "ali", "usman"]
new_user.forEach((item) => {
    if (current_users.includes(item)) {
        console.log(`${item} has already been used`)
    } else {
        console.log(`${item} is available`)
    }
})


