/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }

  template(){
    return `
    <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
        </thead>
      <tbody>
        ${this.rows.map(row => `
        <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button class="remove-button">X</button></td>
        </tr>
      `).join('')}
      </tbody>
  </table>
  `;
  }

  onXClick = (event) => {
      if (event.target.classList.contains('remove-button')) {
        event.target.closest('tr').remove();
      }
    }

  render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = this.template()
    this.elem.addEventListener('click', this.onXClick);

    return this.elem;
  }

}
