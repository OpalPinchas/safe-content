'use strict'


function onLogin(ev) {
    ev.preventDefault()
    const elUsername = document.querySelector('input[name=username]')
    const elPassword = document.querySelector('input[name=password]')

    if (login(elUsername.value, elPassword.value)) {
        changeWindowLoc('secret.html')
    }
    elUsername.value = ''
    elPassword.value = ''
}

function onLogout() {
    logout()
    changeWindowLoc('index.html')
}

function onAdminBtn() {
    changeWindowLoc('admin.html')
}

function renderUsersTable(){
    console.log('in');
    var strHTML = createUsersTable()
    var elTable = document.querySelector('.users')
    console.log(strHTML);
    elTable.innerHTML = strHTML
}

function renderPage() {
    var elUsername = document.querySelector('.username')
    elUsername.innerHTML = getUserName()
    if (isAdmin()) {
        renderAdminBtn()
    }
}

function renderAdminBtn() {
    const elButton = document.createElement('button')
    elButton.onclick = onAdminBtn
    elButton.innerText = 'ADMIN'
    const element = document.querySelector('section')
    element.appendChild(elButton)
}

function changeWindowLoc(strHTML) {
    window.location = strHTML
}