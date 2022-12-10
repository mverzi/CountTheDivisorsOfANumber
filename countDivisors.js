/**
 * This function counts the number of divisors a given integer has
 * @param {int} n 
 * @returns divisorCount -> number of divisors n has
 */
function getDivisorsCnt(n){
    let divisorCount = 0
    for(let i = 1; i <= n; i++){
      if(n % i == 0)
        divisorCount++
    }
    return divisorCount
  }