function countdown(int) {
  (function recursiveSub(int) {
    console.log(int)
    if (int === 0) {
      console.log('Done!')
    } else {
      recursiveSub(int - 1)
    }
  })(int)
}

countdown(7)