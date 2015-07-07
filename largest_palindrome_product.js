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

  if(digits === 2){
    num = 99;
    palindromeGenerator(99)
  }else if(digits === 3){
    num = 999;
    palindromeGenerator(999);
  }else if(digits === 4){
    num = 9999;
    palindromeGenerator(9999);
  }else{
    num = 99999;
    palindromeGenerator(99999);
  }

var highArr =[];

function topTen(highArr){

    pal = highArr.pop();

    for(var i = num; i > (num - Math.ceil(num*.1)); i-- ){

        if(pal % i === 0 && i < num && (pal/i) <= num){
            palindromeNumber = Number(pal);
            factor_0 = i;
            factor_1 = pal/i

            return true;

        }
    }

}


function palindromeGenerator(num){
var master =[];
var arr = [];

  for(var k = num; k >(num - Math.ceil(num*.1)); k--){
      arr.push(k);
      var stringy = k.toString();
      for(var i = stringy.length-1; i >=0; i--){
          newNum = stringy.charAt(i)
          //console.log(newNum);
          arr.push(newNum)

          }

          finArr = arr.join('');

          arr = [];

          master.push(finArr);
          //call the pal checker

          if(topTen(master)){
            console.log('inside')
            return true;
          }else{
            master = []
          }
  }

}














  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};