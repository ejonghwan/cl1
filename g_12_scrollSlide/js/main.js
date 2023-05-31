const fig = document.querySelector('figure');
let imgs;

for(let i = 0; i < 200; i++) {
    imgs += `
        <img src="img/pic${i}.jpg" alt="" />
    `
}

fig.innerHTML = imgs
const imgDOM = fig.querySelectorAll('img')
// console.log(imgDOM)

window.addEventListener('mousemove', e => {
    const percent = parseInt(e.clientX / window.innerWidth * 200);
    // console.log(percent)

    for(const img of imgDOM) img.style.display = "none";
    imgDOM[percent].style.display = "block"
    // console.log(imgDOM)
})