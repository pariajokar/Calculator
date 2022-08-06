let txt = document.getElementById('input');
let result = document.getElementById('h1')
let _icon = document.getElementsByClassName('fa')[0]
let header = document.getElementsByClassName('calc-header')[0]
let body = document.getElementsByClassName('calc-body')[0]

let empty = ' '

function _click(num) {

    empty = empty + num
    txt.value = empty
}

function _res() {
    result.innerHTML = eval(empty)

}

function _remove() {
    txt.value = ''
    result.innerHTML = ''
    empty = ''
}

function _del() {
    txt.value = txt.value.substring(0, txt.value.length - 1)
    empty = empty.substring(0, empty.length - 1)
}
let i = 1

function chnge_icon() {

    if (i % 2) {
        _icon.classList.replace('fa-moon-o', 'fa-sun-o')
        header.style.backgroundColor = "rgba(2, 14, 39, .2)"
        body.style.backgroundColor = "rgba(2, 14, 39, .3)"

    } else {
        _icon.classList.add('fa-moon-o')
        header.style.backgroundColor = " rgba(255, 255, 255, .2)"
        body.style.backgroundColor = "rgba(255, 255, 255, .3)"
    }
    i++
}