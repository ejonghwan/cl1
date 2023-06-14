

const wrap = document.querySelector('.list')
const items = wrap.querySelectorAll('li')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log(items, prev, next)


prev.addEventListener('click', e => {
    wrap.prepend(wrap.lastElementChild)
    prev.classList.add('on');
    setTimeout(() => {
        prev.classList.remove('on')
    }, 600)
})


next.addEventListener('click', e => {
    wrap.append(wrap.firstElementChild)
    next.classList.add('on');
    setTimeout(() => {
        next.classList.remove('on')
    }, 600)
})