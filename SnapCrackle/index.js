function snapCracklePrime(maxValue) {
    let meuRetorno = [];
    function numeroPrimo(num) {
      let divisiveis = 0;
      for (let n = 1; n <= num; n++) {
        if (num % n == 0) {
          divisiveis++;
        }
      }
      return divisiveis;
    }
    for (let i = 1; i <= maxValue; i++) {
      if (i % 2 != 1 && i % 5 != 0) {
        if (numeroPrimo(i) == 2) {
          meuRetorno.push("Prime");
        } else {
          meuRetorno.push(i);
        }
      }
  
      if (i % 2 == 1 && i % 5 != 0) {
        if (numeroPrimo(i) == 2) {
          meuRetorno.push("SnapPrime");
        } else {
          meuRetorno.push("Snap");
        }
      }
  
      if (i % 2 != 1 && i % 5 == 0) {
        if (numeroPrimo(i) == 2) {
          meuRetorno.push("CrakclePrime");
        } else {
          meuRetorno.push("Crakcle");
        }
      }
  
      if (i % 2 == 1 && i % 5 == 0) {
        if (numeroPrimo(i) == 2) {
          meuRetorno.push("SnapCrakclePrime");
        } else {
          meuRetorno.push("SnapCrakcle");
        }
      }
    }
    return meuRetorno.join(", ");
  }
console.log(snapCracklePrime(12));