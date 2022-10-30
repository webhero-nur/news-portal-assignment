const categoriesData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => categoryDetailView(data.data.news_category))
}

const categoryDetailView = categories => {
    const newsCategories = document.getElementById('news-categories');

    const categoriesDiv = document.createElement('div');

    const categoryUl = document.createElement('ul');
    categoryUl.classList.add('list-style-none', 'd-flex', 'justify-content-between', 'fw-semibold', 'bg-light', 'px-4', 'py-2', 'mb-0');
    categoriesDiv.appendChild(categoryUl);

    const homeLi = document.createElement('li');
    homeLi.classList.add('pointer', 'px-1');
    homeLi.innerHTML = `
        <div onclick=findNewsByCategory('home')>Home</div>
    `;
    categoryUl.appendChild(homeLi);

    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('pointer', 'px-1');
        li.innerHTML = `
            <div onclick=findNewsByCategory('${category?.category_id}')>${category?.category_name}</div>
        `;
        categoryUl.appendChild(li);
    });
    newsCategories.appendChild(categoriesDiv);
}

const findNewsByCategory = newsId => {
    const cards = document.getElementById('cards-container');
    cards.textContent = '';
    const findAllNewsByIdURL = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    fetch(findAllNewsByIdURL)
        .then(res => res.json())
        .then(data => showNews(data.data))
}

const showNews = fullNewsAll => {
    const cardsContainer = document.getElementById('cards-container');
    if (fullNewsAll.length > 0) {
        fullNewsAll.forEach(fullNews => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.innerHTML = `
                <img src="${fullNews?.image_url} alt="No image found" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${fullNews?.title}</h5>
                    <p class="card-text">${fullNews?.details.slice(0, 150) + '...'}</p>
                    <div class="d-flex justify-content-between py-2">
                        <div class="d-flex">
                            <img src="${fullNews?.author?.img} alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                            <span class="fw-bolder mx-2">${fullNews?.author?.name ? fullNews?.author?.name : 'Author Unknown'}</span>
                        </div>
                        <span><i class="fa-solid fa-eye"></i> ${fullNews?.total_view ? fullNews?.total_view : 'Not Enough View'}K</span>
                        <span><i class="fa-solid fa-star"></i> ${fullNews.rating.number}</span>
                    </div>
                    <button onclick=newsDetails('${fullNews._id}') type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
                </div>
            `;
            cardsContainer.appendChild(cardDiv);
        });
    }
    else {
        cardsContainer.innerHTML = `
            <h2 class="w-100 text-danger">No News Found in this category!!!</h2>
        `;
    }
}

const newsDetails = newsId => {
    const newsDetailsUrl = `https://openapi.programming-hero.com/api/news/${newsId}`
    fetch(newsDetailsUrl)
        .then(res => res.json())
        .then(data => newsDetailsModal(data.data[0]))
}

const newsDetailsModal = newsData => {
    const modalTitle = document.getElementById('newsModalLabel');
    modalTitle.innerText = newsData.title;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="card w-100">
            <img src="${newsData.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${newsData.details}</p>
                <p><small class="text-secondary">Published on ${newsData?.author?.published_date ? newsData?.author?.published_date : 'Publish Date Not Found'} by <strong><i>${newsData?.author?.name ? newsData?.author?.name : 'No Auther'}</i></strong></small></p>
            </div>
        </div>
    `;
}

categoriesData();