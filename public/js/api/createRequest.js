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

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
  if (!options) {
    throw new Error('Параметр options функции createRequest не задан');
    return;
  }

  let {url, headers, data, responseType, method, callback} = options;
  const xhr = new XMLHttpRequest();

  try {
    xhr.open(method, url);
    xhr.responseType = responseType;
    xhr.withCredentials = true;

    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }

    xhr.onloadend = () => {
      if (String(xhr.status).startsWith('2')) {
        callback(xhr.response?.error, xhr.response);
      } else {
        throw new Error (`Ошибка ${xhr.status}: ${xhr.statusText}`);
      }
    }

    if (method === 'GET') {
      let params = [];

      for (const [key, value] of Object.entries(data)) {
        params.push(`${key}=${value}`);
      }

      xhr.send(params.join('&'));
    } else {
      const formData = new FormData();

      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      xhr.send(formData);
    }
  }
  catch (e) {
    throw new Error(e);
  }
};
