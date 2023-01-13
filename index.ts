function findPrime(position: number) {

    var list_prime = [2];
    var natural = 3
    var isPrime = true;

    while(true){
        if(list_prime.length -1 === position){
            break
        }
        for(var j = 0; j < list_prime.length; j++){
            if(natural % list_prime[j] === 0){
            isPrime = false;
            break;
            }
        }
        if(isPrime){
            // console.log(natural)
            list_prime.push(natural);
        }
        isPrime = true;
        natural++
    }
    console.log(list_prime)
    return list_prime[position - 1];
   
}
var start = new Date().getTime();

// console.log(findPrime(2000));//17389
//   console.log(findPrime(50000));//611953
  console.log(findPrime(1000000));//15485863
// console.log(findPrime(20000000)); 

var end = new Date().getTime();
var time = end - start;
console.log('Execution time(sec): ' + time / 1000);