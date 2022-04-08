'use strict'

var gUsers  = loadFromStorage('users')


function login(username, password) {
    _saveUsersToStorage()
    const userIdx = gUsers.findIndex(user => {
        return user.username === username && user.password === password
    })

    if (userIdx || userIdx === 0) {
        gUsers[userIdx].lastLoginTime = new Date()
        saveToStorage('user', gUsers[userIdx])
        saveToStorage('users' , gUsers)
        return true
    }
    return false
}

function getUsers() {
    return [
        getUser('opal', 'opal1', false),
        getUser('ben', 'ben1', false),
        getUser('agam', 'agam1', true)
    ]
}

function getUser(username, password, isAdmin) {
    return {
        id: 'u101',
        username,
        password,
        lastLoginTime: 1601891998864,
        isAdmin
    }
}

function createUsersTable() {
    return   gUsers.reduce((acc, user) => {
        acc += createUserRow(user)
        return acc
    }, '');
}


function createUserRow(user){
    var rowStr= `<tr>
    <td>${user.username}</td>
    <td>${user.password}</td>
    <td>${user.lastLoginTime}</td>
    <td>${user.isAdmin}</td>
</tr>`
return rowStr
}


function isAdmin() {
    const user = loadFromStorage('user')
    return user.isAdmin
}


function logout() {
    localStorage.removeItem('user')
}

function getUserName() {
    const user = loadFromStorage('user')
    return user.username
}



function _saveUsersToStorage() {
    if(!loadFromStorage('users')){
         saveToStorage('users', getUsers())
    }
}

