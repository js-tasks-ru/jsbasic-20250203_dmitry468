function sumSalary(salaries) {
  sum = 0;
  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      sum += salaries[key]
    }    
  }
  return sum;
}
