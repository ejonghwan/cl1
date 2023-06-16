

const wrap = document.querySelector('.list')
const items = wrap.querySelectorAll('li')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log(items, prev, next)



window.addEventListener('load', e => {
    // document.querySelectorAll('li')[1].querySelector('video').play()
})

prev.addEventListener('click', e => {
    wrap.prepend(wrap.lastElementChild)
    prev.classList.add('on');
    setTimeout(() => {
        prev.classList.remove('on')
    }, 600)




    console.log(wrap.firstElementChild.querySelector('video'))
    wrap.firstElementChild.classList.add('active')

    setTimeout(() => {
        for(let i = 0; i < items.length; i++) {
            items[i].querySelector('video').pause();
            items[i].querySelector('video').currentTime = 0;
        }

        console.dir(document.querySelectorAll('li')[1].querySelector('video'))

        document.querySelectorAll('li')[1].querySelector('video').play()
        console.log('set??', items[1].querySelector('video'))
    }, 100)
})


next.addEventListener('click', e => {
    wrap.append(wrap.firstElementChild)
    next.classList.add('on');
    setTimeout(() => {
        next.classList.remove('on')
    }, 600)






    console.log(wrap.firstElementChild.querySelector('video'))
    wrap.firstElementChild.classList.add('active')

    setTimeout(() => {
        for(let i = 0; i < items.length; i++) {
            items[i].querySelector('video').pause();
            items[i].querySelector('video').currentTime = 0;
        }

        console.dir(document.querySelectorAll('li')[1].querySelector('video'))

        document.querySelectorAll('li')[1].querySelector('video').play()
        console.log('set??', items[1].querySelector('video'))
    }, 100)
   
    
})