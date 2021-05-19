/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);

    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const userData = User.current();
    // const accountsList = Account.list(userData, callback);
    const selectBox = this.element.querySelector('.accounts-select');

    // for (const account of accountsList) {
    //   selectBox.insertAdjacentHTML('beforeend', `
    //     <option value="${account.id}">${account.name}</option>
    //   `)
    // }
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    const form = new AsyncForm(this.element.querySelector('.form'));

    Transaction.create(form.getData());

    App.getModal('newIncome').close();
    App.getModal('newIncome').querySelector('.form').reset();
    App.getModal('newExpense').close();
    App.getModal('newExpense').querySelector('.form').reset();
    App.update();
  }
}