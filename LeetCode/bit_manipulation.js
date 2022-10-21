const reverse = x => {
    let negCheck = 1
    if(x < 0){
        negCheck = -1
        x *= -1
    }
    const b = x.toString().split('').reverse()
    const back = parseInt(b.join('')) * negCheck
    if (back > Math.pow(-2,31) && back < Math.pow(2,31) - 1){
        return back
    } else {
        return 0
    }
};