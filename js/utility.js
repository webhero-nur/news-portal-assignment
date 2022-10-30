function compare(a, b) {
    const viewA = a.total_view;
    const viewB = b.total_view;

    let comparison = 0;
    if (viewA > viewB) {
        comparison = 1;
    } else if (viewA < viewB) {
        comparison = -1;
    }
    return comparison * -1;
}

const countShow = value => {
    const newsCounter = document.getElementById('news-counter');
    if (value > 0) {
        newsCounter.innerText = value;
    }
    else {
        newsCounter.innerText = 'No';
    }
}
