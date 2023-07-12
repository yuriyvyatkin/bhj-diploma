# Менеджер финансов

## Функционал:

1. **Регистрация.** Позволяет зарегистрировать нового пользователя в системе. 
Связанные компоненты: Sidebar.js, Modal.js, AsyncForm.js, RegisterForm.js, User.js, createRequest.js.

3. **Авторизация.** Позволяет авторизовать пользователя в системе. Связанные компоненты: Sidebar.js, Modal.js, AsyncForm.js, 
LoginForm.js, User.js, createRequest.js.

4. **Выход.** Позволяет деавторизовать пользователя в системе. Связанные компоненты: Sidebar.js, User.js, createRequest.js.

5. **Создание счетов.** Связанные компоненты: AccountsWidget.js, TransactionsPage.js, Modal.js, 
AsyncForm.js, CreateAccountForm.js, Entity.js, Account.js, createRequest.js.

6. **Удаление счетов.** Связанные компоненты: TransactionsPage.js, Entity.js, Account.js, createRequest.js.

7. **Создание транзакций.** Связанные компоненты: TransactionsWidget.js, Modal.js, AsyncForm.js, 
CreateTransactionForm.js, Entity.js, Transaction.js, createRequest.js.

8. **Удаление транзакций.** Связанные компоненты: TransactionsPage.js, Entity.js, Transaction.js, createRequest.js.

## Файловая структура и назначение компонентов
- js/
    - __api/__ (связь с сервером, сетевые запросы)
        - __Account.js__ (управление счетами)
        - __createRequest.js__ (запросы к серверу и получение ответов)
        - __Entity.js__ (базовый класс для счетов, пользователей и расходов/доходов)
        - __Transaction.js__ (управление доходами и расходами пользователя)
        - __User.js__ (регистрация/авторизация/вход в приложение)
    - ui/
        - forms/ (формы приложения)
            - __AsyncForm.js__ (базовый класс для всех форм. Используется преимущественно во всплывающих окнах)
            - __CreateAccountForm.js__ (форма создания нового счёта)
            - __CreateTransactionForm.js__ (форма создания нового расхода/дохода)
            - __LoginForm.js__ (форма входа)
            - __RegisterForm.js__ (форма регистрации)
        - pages/ (страницы приложения)
            - __TransactionPage.js__ (страница расходов и доходов конкретного счёта)
        - widgets/
            - __AccountsWidget.js__ (виджет управления счетами)
            - __TransactionsWidget.js__ (виджет управления расходами и доходами)
            - __UserWidget.js__ (виджет текущего пользователя)
        - __Modal.js__ (базовый класс для всех всплывающих окон)
        - __Sidebar.js__ (класс управления боковой колонкой)
    - __App.js__ (класс приложения)
