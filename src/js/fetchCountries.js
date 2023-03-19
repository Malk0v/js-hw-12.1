// export default function fetchCountries(searchQuery) {
//     console.log('hello')
    
//     const API_KEY = '1207c88ea12a40948c6a5f2f9fe75304';

//     return fetch(
//       `https://restcountries.eu/rest/v2/name/usa`,
//       // `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`,
//     ).then(response => response.json());
// };
// //===================

// // - Есть файл `fetchCountries.js` с дефолтным экспортом функции
// //   `fetchCountries(searchQuery)`, возвращающей промис с массивом стран, результат
// //   запроса к API.\

// //+++

// // Создай небольшое приложение поиска данных о стране по ее частичному или полному
// // имени. Используй [Rest Countries API](https://restcountries.com/), а именно
// // вторую версию (v2) и ендпоинт
// // [/name](https://restcountries.com/#api-endpoints-v3-name), возвращающий массив
// // объектов стран попавших под критерий поиска.


// //===================



// // import articles from '../templates/card.hbs'
// // import LoadMoreBtn from "./components/load-more"
// // import NewsApiService from "./components/news-service";

// // console.log(LoadMoreBtn);
// // console.log(NewsApiService);

// // const refs = {
// //   searchForm: document.querySelector('.js-search-form'),
// //   articlesContainer: document.querySelector('.js-articles-container'),
// // };

// // const loadMoreBtn = new LoadMoreBtn({
// //     selector: '[data-action="load-more"]',
// //     hidden: true,
// // });

// // const newsApiService = new NewsApiService();

// // refs.searchForm.addEventListener('submit', onSearch);
// // loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// // function onSearch(e) {
// //     e.preventDefault();

// //     console.log(newsApiService.query);

// //     newsApiService.query = e.currentTarget.elements.query.value;

// //     if (newsApiService.query === '') {
// //         return alert('Введите что нормальное');
// //     }

// //     loadMoreBtn.show();
// //     newsApiService.resetPage();
// //     clearArticlesContainer();
// //     fetchArticles();
// // }

// // function fetchArticles() {
// //     loadMoreBtn.disabled();
// //     newsApiService.fetchArticles().then(articles => {
// //         appendArticlesMarkup(articles);
// //         loadMoreBtn.enable();
// //     })
// // }

// // function appendArticlesMarkup(articles) {
// //     refs.articlesContainer.insertAdjacentHTML('beforeend', (r) => (
// //     (r.articles).map(
// //         `<h1> ${articles}</h1>`)
// //     ))};


// // function clearArticlesContainer() {
// //     refs.articlesContainer.innerHTML = '';
// // }