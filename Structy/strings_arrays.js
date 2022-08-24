const uncompress = (s) => {
    // todo
    let str = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < s.length; i++) {
      let num = '';
      let chr = s[i];
      while (!alpha.includes(chr)) {
        num += chr;
        i++;
        chr = s[i];
      }
      num = parseInt(num); //turn it back into an integer;
      for (let j = 0; j < num; j++) {
        str += chr;
      }
    }
    
    return str;
  };

  const compress = (s) => {
    // todo
    let str = '';
    for (let i = 0; i < s.length; i++) {
      let count = 1;
      let chr = s[i];
      while (s[i] === s[i + 1]) {
        count++;
        i++;
      }
      if (count > 1) {
        str += count + chr;
      } else {
        str += chr;
      }
    }
    
    return str;
  };