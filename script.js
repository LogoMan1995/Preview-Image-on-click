function change(src) {
    document.getElementById('main').src = src
}


document.addEventListener('DOMContentLoaded', () => {
    const thumbnail = document.querySelectorAll('.thumbnail');

    thumbnail.forEach(elem => {
        elem.addEventListener('click', (e) => {
            change(e.target.src)
        })
    })
})



