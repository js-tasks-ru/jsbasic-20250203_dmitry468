function highlight(table) {
let table_body = table.tBodies[0]
let status_cell_number = 3;
let gender_cell_number = 2;
let age_cell_number = 1;

  for (let i = 0; i < table_body.rows.length; i++) {
    if (table_body.rows[i].cells[status_cell_number].dataset.available === 'true') {
      table_body.rows[i].classList.add('available');
    } else if (table_body.rows[i].cells[status_cell_number].dataset.available === 'false') {
      table_body.rows[i].classList.add('unavailable');
    } else if (table_body.rows[i].cells[status_cell_number].hasAttribute('data-available') === false) {
      table_body.rows[i].setAttribute('hidden', 'true');
    }

    if (table_body.rows[i].cells[gender_cell_number].textContent === 'm') {
      table_body.rows[i].classList.add('male');
    } else if (table_body.rows[i].cells[gender_cell_number].textContent === 'f') {
      table_body.rows[i].classList.add('female');
    }

    if (parseInt(table_body.rows[i].cells[age_cell_number].textContent) < 18) {
      table_body.rows[i].style.textDecoration = 'line-through';
    }
  }
}
