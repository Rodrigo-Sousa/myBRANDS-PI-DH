'use strict'

const openPopup = () => document.getElementById('popup')
    .classList.add('active')

const popupClose = () => document.getElementById('popup')
    .classList.remove('active')

document.getElementById('buttonNew')
        .addEventListener('click', openPopup)

document.getElementById('closePopup')
        .addEventListener('click', popupClose)