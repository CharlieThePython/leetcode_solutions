/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10){
        return num;
    }
    arrayNums = num.toString().split("");
    i = 0;
    result = 0;
    while( i < arrayNums.length){
        result = result + parseInt(arrayNums[i]);
        i++;
    }
    
    return addDigits(result);
    
};