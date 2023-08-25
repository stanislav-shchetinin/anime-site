const detailsData = () => {

    const preloder = document.querySelector('.preloder'); 
    
    const renderGenreList = (ganres) => {
        const dropDownBlock = document.querySelector(".header__menu .dropdown")

        ganres.forEach( (ganre) => {
            dropDownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })

    }

    const renderAnimeDetails = (array, itemId) => {

        const animeObj = array.find(item => item.id == itemId);
        const imageBlock = document.querySelector(".anime__details__pic");
        const viewsBlock = document.querySelector(".view");
        const titleBlock = document.querySelector(".anime__details__title h3");
        const subTitleBlock = document.querySelector(".anime__details__title span");
        const descriptionBlock = document.querySelector(".anime__details__text p");
        const widgetList = document.querySelectorAll(".anime__details__widget ul li")
        const breadcrumb = document.querySelector(".breadcrumb__links span")

        if (animeObj){
            imageBlock.dataset.setbg = animeObj.image;
        
            viewsBlock.insertAdjacentHTML('beforeend', `
                <i class = "fa fa-eye"></i>${animeObj.views}</div>
            `)
            titleBlock.textContent = animeObj.title;
            subTitleBlock.textContent = animeObj['original-title'];
            descriptionBlock.textContent = animeObj.description;

            widgetList[0].insertAdjacentHTML('beforeend', `
                <span> Date aired:</span> ${animeObj.date}
            `)
            widgetList[1].insertAdjacentHTML('beforeend', `
                <span> Rating:</span> ${animeObj.rating}
            `)
            widgetList[2].insertAdjacentHTML('beforeend', `
                <span> Genre:</span> ${animeObj.tags.join(", ")}
            `)

            breadcrumb.textContent = animeObj.ganre

            document.querySelectorAll('.set-bg').forEach((value) => {value.style.backgroundImage = `url(${value.dataset.setbg})`})
        } else {
            console.log("Аниме отсуствует!");
        }

    }

    fetch('./db.json')
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        const ganres = new Set();
        const ganreParams = new URLSearchParams(window.location.search).get('itemId');
        console.log(ganreParams);

        data.anime.forEach(item => {
            ganres.add(item.ganre)
        })

        if (ganreParams) {
            renderAnimeDetails(data.anime, ganreParams)
            setTimeout(() => {
                preloder.classList.remove('active')
            }, 400)
        } else {
            console.log("Аниме отсуствует!");
        }
        renderGenreList(ganres);
    })

    

};
detailsData();