function factorial(n) {
  if (n) {
    for (let i=n-1; i>0; i--) {
      n *= i;
      console.log(n);
    }
    return n
  }
  return 1
}
