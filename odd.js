function isOdd(num) { 

  if (num % 2 === 0) { //when our number is divisible by 2 returns false
return false    
  }
  else {
    return true //otherwise is number is not divisible by 2 returns true
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));