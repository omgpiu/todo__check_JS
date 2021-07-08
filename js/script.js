// наименование функций должно соответствовать тому, что она делает
// если ты пишешь комментарии на каждую строчку кода. значит либо код слишком сложен и его нужно декомпозировать
// либо переписать



function createTask() {
  // считываем поле ввода
  let data = document.querySelector('.todo__input').value
  // если поле не пустое
  if (data != '') {
    // создаем элемент списка
    let liElem = document.createElement('li')
    // добавляем ему класс
    liElem.className = 'elements__li'
    // добавлем кнопку для закрытия
    let close = document.createElement('span')
    close.className = 'close'
    // добавляем в элемент текст из поля
    liElem.innerHTML = data
    // добавляем в конец кнопку закрытия
    liElem.append(close)
    // Добавляем в тег Ul наш элемент
    document.querySelector('.todo__elements').append(liElem)
  }
}

// есть 5 принципов - SOLID, первая буква обозначает  single responsibility  - принцип единой ответственности
// функция не должна делать 10 дел, одна функция для зачеркивания
// одна функция для удаления
// зачеркивание
function deleteTask() {
// если кликнули на крестик, удаляем родителя
  if (event.target.className == 'close') {
    console.log(event.target.parentNode.remove())
  }
  // если кликнули на элемент списка с классом lili, то добавляем ему класс с зачеркиванием
  else if (event.target.className == 'elements__li') {
    event.target.classList.toggle('through__line')
  }
  // если li имеет класс с зачеркивание то удаляем этот класс
  else if (event.target.className == 'elements__li through__line') {
    event.target.classList.toggle('through__line')
  }
}
//обращаться к глобальному объекту не очень идея, если поставишь юз стрикт работать не будет , так как this  будет  ссылаться на undefined
this.onclick = deleteTask
document.querySelector('.todo__btn').addEventListener('click', createTask)
