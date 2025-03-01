function makeDiagonalRed(table) {
  for (let i=0; i < table.rows.length; i++) {
    for (let k=0; k < table.rows[i].cells.length; k++) {
      if (i == k) {
        table.rows[i].cells[k].style.backgroundColor = 'red';
      }
    }
  }
}
