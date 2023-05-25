# Каноническая работа проекта Stellar Burger 
# Этап "Промежуточный проект. CRA-заготовка и структура папок под компоненты"
# Студент: Часовников Сергей

## Stellar Burgers - этот проект был запущен с помощью приложения Create React и работает с компонентами Яндекс.Практикума.
Это интерфейсная часть сайта Stellar Burger, где клиент может заказать бургер на заказ в кафе Stellar Burgers.

## Как начать
* Клонировать репозиторий – git clone https://github.com/chsergey80/react-stellar-burger.git
* Установите зависимости – npm i
* Запустите проект – npm start
* Перейти на http://localhost:3000/

# Процесс работы над проектом:
## Step -1 (Sprint 7) "Промежуточный проект. CRA-заготовка и структура папок под компоненты"
* 1 commit / Установлены пакеты npm. Создан .gitignore и ветка month-7/step-1
* 2 commit / Создана директория app-header с двумя файлами: app-headre.jsx и app-header.module.css. Сделана верстка AppHeader
* 3 commit / Внесены корректировки в верстку AppHeader. Шрифты и отступы взяты изи бибилиотеки
* 4 commit / Сверстаны заготовки блоков: BurgerIngradients и BurgerConstructor
* 5 commit / Корректирующий коммит (исправление ошибок)
* 6 commit / Отредактирован файл prop-types.jsx
* 7 commit / Сверстан блок: burger-constructor
* 8 commit / Сверстан блок: burger-ingredients и ingredient-items. Проведена итоговая проверка.
* 9 commit / Исправлены замечания по первому ревью в ветке month-7/step-1
* 10 commit / Смержена ветка month-7/step-1 в main. Создана ветка month-7/step-2. Создан API запрос входных данных.
## Step - 2 (Sprint 7) Финальный проект. Написать весь JSX и сверстать
* 11 commit / Внесены правки в проверку ошибок при работе с API запросами. Создано модальное окно Modal и фоновая подложка
              под модальным окном ModalOverlay с прописанной логикой работы. 
* 12 commit / Создан модуль наполнения окна Modal содержимым - ingredient-details.
              Созданы модули ingredient-details и order-details содержащие информацию всплывающих окон. Добавлена папка images с содержанием.
              Внесены изменения в файлы burger-constructor, burger-ingredients и ingredient-items для вызова модальных окон. 
* 13 commit / Исправлены замечания 1 ревью 2 этапа сдачи проекта:
              Вынесено в отдельную функцию и отдельный файл utils/burger-api.js API запрос.
              Добавлена проверка ответа сервера - res.ok.
              В файле ingredient-details.jsx внесены исправления касающиеся типизации пропса info.
              Код в модуле app.jsx касающийся вызова модулей BurgerConstructor и BurgerIngredients оптимизирован.
              В модуле modal.jsx исправлен код, в addEventListener и в removeEventListener передана именованная функция.
## Step - 1 (Sprint 8) Проект. Перенос состояния в Context
* 14 commit / Создаем папку services, а в ней файлы itemContext.js для сохранения данных контекста.
* 15 commit / Вносим изменения в файлы burger-constructor.jsx и burger-ingredients.jsx:
              Подписываем компоненты burger-constructor и burger-ingredients на itemContext.
              Вносим изменения в файл app.jsx:
              Подписываем компонент app на itemContext.
              Оборачиваем компоненты burger-constructor и BurgerIngredients в провайдер контекста (Provider) и присваиваем параметру value значение состояния (stateInfo).
* 16 commit / В фале burger-api.js добавлена функция postOrder для отправки заказа на сервер, изменен config (добавлен эндпоинт для отправки заказа на сервер с указанием header).
              В фале order-details.jsx добавлен номер заказа, полученный с сервера и удален хардкод. Компонент подписан на OrderContext.
              В фале ingredient-items.jsx (компонент Counter) убран хардкод количества ингредиентов, которые есть в наличии.
              В фале burger-constructor.jsx добавлен расчет стоимости бургера через функцию totalPrice с использованием хуков useMemo, useState. Компонент подписан на OrderContext и импортирована функция postOrder. Добавлена функция fetchPostOrderIngredients.
* 17 commit / Переписан readme.md