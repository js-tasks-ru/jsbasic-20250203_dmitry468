function checkSpam(str) {
  let upper_case_str = str.toUpperCase()
  if (upper_case_str.indexOf('1xBet'.toUpperCase()) !== -1) {
    return true
  }
  else if (upper_case_str.indexOf('XXX') !== -1) {
    return true
  }
  return false
}
