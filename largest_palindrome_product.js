/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var palindromeResult;
  // do your work here
var num;
var highArr = [];
var nineArray = [];
var starting = 0;

function howManyNines(digits){
  for(var i = 0; i <= (digits-1); i++){
      nineArray.push(9)
  }
  starting = Number(nineArray.join(''))
  checker(starting)
}

  if(digits === 2){
    num = 99;
    checker(99)
  }else if(digits ===3){
    num = 999;
    checker(999);
  }else{
    num = 9999;
    checker(9999);
  }

function checker(num){

    num = num * num;

    while(num > 0){

        if (palindromeCheck(num)){
            highArr.push(num);
            num--;
        }else{
            num--;
        }

    }
    highArr.splice(highArr.length/2)

    topTen(highArr)
}





  function palindromeCheck(num){
    var numToArray = [];
    var numToString = num.toString();
    var numLength = numToString.length;

    for (var i = 0; i < numLength; i++){
        numToArray.push(numToString.charAt(i))
    }

    var top = numLength-1;

    for(var k = 0; k < numLength; k++){

      if(numToArray[k] === numToArray[top]){
        palindromeResult = true;
        top--;
      }else{
        palindromeResult = false;
        return false;
      }
    }
    palindromeResult = true;
    return true;
  }


  function topTen(highArr){

     for(var k = 0; k < highArr.length; k++){

      for(var i = num; i > (num - Math.ceil(99*.1)); i--){
        var x = highArr[k] % i;
        var q = highArr[k]/i
        if(x === 0 && q < num ){
            palindromeNumber = highArr[k];
            factor_0 = q;
            factor_1 = i;
       console.log(palindromeNumber);
            return true;
        }
      }

     }
  }

















  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};