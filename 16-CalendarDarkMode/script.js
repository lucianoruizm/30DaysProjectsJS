// DARK MODE TOGGLE
let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}

// CHECK LEAP YEAR
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400
        !==0) || (year % 100 === 0 && year % 400 === 0)
}

