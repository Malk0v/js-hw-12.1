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
import style from './sass/main.scss';
//импорт данных с бекэнда
import fetchCountries from './js/fetchCountries';
// урезает количество запросов 
import debounce from 'lodash.debounce';
// библиотека уведомлений
import {
  alert,
  defaultModules,
} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
// стили для библитеки уведомлений
import '@pnotify/core/dist/Material.css';

const input = document.querySelector('.input-js');
let list = document.querySelector('.list-js');

input.addEventListener('input', debounce(onSearch, 500));

function onSearch() {
    list.innerHTML = '';
    const searchQuery = input.value;
    const fetchQuery = fetchCountries(searchQuery);

  fetchQuery.then(data => {
      if (data.length >= 10) {
        alert({
          text: 'Необходимо сделать запрос более специфичным',
          styling: 'material',
          type: 'notice',
          mode: 'dark',
          delay: 3000,
        });
      return;
    }

    fetchQuery.then(data => {
      if (data.length === 1) {
        data.map(e =>
          list.insertAdjacentHTML(
            'beforeend',
            `<img src="${e.flags.png}" alt="${e.flags.alt}" width="350px">
            <div>
                <li class="js-li"> Официальное название - ${e.name.common} </li>
                <li class="js-li"> Столица - ${e.capital} </li>
                <li class="js-li"> Флаг - ${e.flag} </li>
                <li class="js-li"> Население - ${e.population} </li> 
            </div>`,
          ),
        );
      } else {
        fetchQuery.then(data =>
          data.map(e =>
            list.insertAdjacentHTML(
              'beforeend',
                `<div>
              <li class="js-li">
              ${e.name.common} ${e.flag} 
              </li>
              </div>`,
            ),
          ),
        );
      }
    });
  });
};