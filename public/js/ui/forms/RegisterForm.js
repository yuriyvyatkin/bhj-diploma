/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const callback = (error, response) => {
      if (error) {
        if (typeof error === 'object') {
          throw new Error(Object.values(err).join(' '));
        }
        throw new Error(error);
      } else {
        return response;
      }
    }

    User.register(data, callback);

    if (User.current()) {
      this.element.reset();
      App.setState('user-logged');
      App.getModal('register').close();
    }
  }
}