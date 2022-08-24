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