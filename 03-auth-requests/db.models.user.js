const email = "admin@admin.com"
const password = "admin"
const id = 1

user = {email, password, id}

class User {
}

User.findById = id => new Promise((resolve, reject) => {
  id === 1 ? resolve(user) : reject({error: 'User not found'})
})

module.exports = {User, user}