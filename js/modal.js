const modal = () => {
    const model = document.querySelector('.search-model')
    const modelBtn = document.querySelector('.icon_search');
    const modalClose = model.querySelector('.search-close-switch')
    const modalInput = model.querySelector('#search-input')
    
    modelBtn.addEventListener('click', () => {
        model.style.display = 'block'
    })
    
    modalClose.addEventListener('click', () => {
        model.style.display = 'none'
    })
    
    modalInput.addEventListener('input', (event) => {
        console.log(event.target.value);
    })
}

modal()
