// Prime number : a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11)

// This function gets 2 numbers , prints the prime numbers between these two number into console
function showPrimeNumbers(lowNumber,highNumber){
    if(lowNumber < 2){
        console.log("First parameter should be higher than 1");
        return;
    }else if(highNumber <= lowNumber ){
        console.log("Second parameter should be bigger than first one");
        return;
    }
    for (let i = lowNumber; i < highNumber; i++) {
        let isPrime = true;


        /*
         Its enough to check the numbers between 2 and i/2
         For example , if 100 can not be divided by any numbers up to 50 no need to look for 
         51,52,53... 
        */
        for (j=2; j<=(i/2); j++){
            if( i % j === 0 ){
                isPrime = false;
            }
        }
        
        if(isPrime){
            console.log(i, " is a prime number."); 
        }
    }
}

// showNumbers(1,100);

// We are doing this, so that we can access to showNumbers function from other files
// When we import this file with --> require('prime-numbers.js') , node.js will import the exported functions
module.exports = showPrimeNumbers;

