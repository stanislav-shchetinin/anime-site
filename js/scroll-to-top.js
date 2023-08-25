const scroll_to_top = () => {
    const topBtn = document.querySelector("#scrollToTopButton")
    
    topBtn.addEventListener('click', (event) => {
        event.preventDefault();
        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}
scroll_to_top()