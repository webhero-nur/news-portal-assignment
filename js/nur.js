const categoriesData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => categoryDetailView(data.data.news_category))
}

const categoryDetailView = categories => {
    const newsCategories = document.getElementById('news-categories');
    const categoriesDiv = document.createElement('div');
    const categoryUl = document.createElement('ul');
    categoryUl.setAttribute("class", "list-style-none d-flex justify-content-between fw-semibold bg-light pe-4 py-2");
    categoriesDiv.appendChild(categoryUl);
    const homeLi = document.createElement('li');
    homeLi.classList.add('pointer');
    homeLi.classList.add('px-1');
    homeLi.innerText = 'Home';
    homeLi.setAttribute("id", "home");
    categoryUl.appendChild(homeLi);
    categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add('pointer');
        categoryLi.classList.add('px-1');
        const customId = `${category.category_id}`;
        categoryLi.setAttribute("id", customId);
        categoryLi.innerText = `${category.category_name}`;
        categoryUl.appendChild(categoryLi);
    });
    newsCategories.appendChild(categoriesDiv);
    console.log(categories);
}

categoriesData();