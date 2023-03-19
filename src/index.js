
// Достаточно чтобы приложение работало для большинства стран. Некоторые страны,
// такие как `Sudan`, могут создавать проблемы, поскольку название страны является
// частью названия другой страны, `South Sudan`. Не нужно беспокоиться об этих
// исключениях.

// Интерфейс очень простой. Название страны для поиска пользователь вводит в
// текстовое поле.

// ⚠️ **ВНИМАНИЕ!** HTTP-запросы на бекенд происходят не по сабмиту формы, формы
// нет, а при наборе имени страны в инпуте, то есть по событию `input`. Но делать
// HTTP-запрос при каждом нажатии клавиши нельзя, так как одновременно получится
// много HTTP-запросов которые будут выполняться в непредсказуемом порядке (race
// conditions). Поэтому на обработчик события необходимо применить подход
// `debounce` и делать HTTP-запрос спустя `500мс` после того, как пользователь
// перестал вводить текст. Используй npm-пакет
// [lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

// Если бекенд вернул больше чем 10 стран подошедших под критерий введенный
// пользователем, в интерфейсе отображается нотификация о том, что необходимо
// сделать запрос более специфичным. Для оповещений используй плагин
// [pnotify](https://github.com/sciactive/pnotify).

// ![оповещение](assets/query-prompt.png)

// Если бекенд вернул от 2-х до 10-х стран, под инпутом отображается список имен
// найденных стран.

// ![список стран](assets/country-list.png)

// Если бекенд вернул массив с одной страной, в интерфейсе рендерится разметка с
// данными о стране: название, столица, население, языки и флаг.

// ![информация о стране](assets/country-info.png)


//=======================================

// import fetchCountries from "./js/fetchCountries";
// const input = document.querySelector('.input-js');
// const start = document.querySelector('.start-js');
// const list = document.querySelector('.list-js');

// console.log(fetchCountries);

// input.addEventListener('click', onSearch);
// start.addEventListener('click',onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     const searchQuery = input.value;
    
//     fetchCountries(searchQuery).then(data => {
//         const headlines = data.articles
//         .map(article => {
//             return console.log(article);

//             `<div class="news">
//         <h2><span>Тема: </span>${article.title}</h2> 
//         <li>${article.description}
//         <hr>
//         Источник - ${article.author}</li>
//         </div>`;
//         })
//             .join('');
        

//         list.innerHTML = `<ul>${headlines}</ul>`;
//     });
// };

const a = fetch(
    `https://restcountries.eu/rest/v2/name/usa`,
    // `https://newsapi.org/v2/everything?q=$.{searchQuery}&apiKey=${API_KEY}`,
).then(response => response.json()).then(console.log(response));
