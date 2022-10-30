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
    const cards = document.getElementById('cards');
    cards.textContent = '';
    const findAllNewsByIdURL = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    fetch(findAllNewsByIdURL)
        .then(res => res.json())
        .then(data => showNews(data.data))
}

const showNews = fullNewsAll => {
    console.log(fullNewsAll);
    // <div class="col">
    //    <div class="card">
    //       <img src="..." class="card-img-top" alt="...">
    //       <div class="card-body">
    //          <h5 class="card-title">Card title</h5>
    //          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       </div>
    //    </div>
    // </div>
    const cards = document.getElementById('cards');
    fullNewsAll.forEach(fullNews => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
            <img src="${fullNews.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        `;
        cards.appendChild(cardDiv);
    });
}

categoriesData();