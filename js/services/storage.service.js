'use strict'

function saveToStorage(key, val) {
    var json = JSON.stringify(val)
    console.log(json);
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val
}