// // import articles from '../templates/card.hbs'
// import LoadMoreBtn from "./components/load-more"
// import NewsApiService from "./components/news-service";

// console.log(LoadMoreBtn);
// console.log(NewsApiService);

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };

// const loadMoreBtn = new LoadMoreBtn({
//     selector: '[data-action="load-more"]',
//     hidden: true,
// });

// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//     e.preventDefault();

//     console.log(newsApiService.query);

//     newsApiService.query = e.currentTarget.elements.query.value;

//     if (newsApiService.query === '') {
//         return alert('Введите что нормальное');
//     }

//     loadMoreBtn.show();
//     newsApiService.resetPage();
//     clearArticlesContainer();
//     fetchArticles();
// }

// function fetchArticles() {
//     loadMoreBtn.disabled();
//     newsApiService.fetchArticles().then(articles => {
//         appendArticlesMarkup(articles);
//         loadMoreBtn.enable();
//     })
// }

// function appendArticlesMarkup(articles) {
//     refs.articlesContainer.insertAdjacentHTML('beforeend', (r) => (
//     (r.articles).map(
//         `<h1> ${articles}</h1>`)
//     ))};


// function clearArticlesContainer() {
//     refs.articlesContainer.innerHTML = '';
// }