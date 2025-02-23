function isEmpty(obj) {
  for (let key in obj) {
    return false;
    break;
  }
  return true;
}
