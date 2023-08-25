const bg_elements = () => {
    const element = document.querySelectorAll('.set-bg')
    element.forEach((value) => {value.style.backgroundImage = `url(${value.dataset.setbg})`})
}
bg_elements()
