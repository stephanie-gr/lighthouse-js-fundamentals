//all numbers 100 - 100
//multiple of 3 - loopy; multpiple of 4 - lighthouse
//multiple of 3 and 4 - loopy lighthouse


function loopyLighthouse() {
  for (let i = 100; i < 201; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log('loopy lighthouse');
    } else if (i % 4 === 0) {
      console.log('lighthouse');
    } else if (i % 3 === 0) {
      console.log('loopy');
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse();



