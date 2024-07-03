/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    stringVar = x + "";

    if(stringVar.length == 1){
        return parseInt(stringVar)
    }

    //Incluimos las excepciones
    exception = ["0"]
    negativeException = ["-"]
    
    //Convertimos en array y le damos la vuelta
    charsArray = stringVar.split("")
    charsArray.reverse()
    
    //Eliminamos los 0 del inicio, porque en caso contrario tomará el código en base 8
    while(exception.includes(charsArray[0])){
        charsArray.shift()
    }

    if(negativeException.includes(charsArray[charsArray.length-1])){
        charsArray.pop()
        charsArray.unshift("-")
    }
    
    //Límites de 32 bits
    if(parseInt(charsArray.join("")) > 2147483647 || parseInt(charsArray.join("")) > 4294967295){
        return 0
    }

    if(parseInt(charsArray.join("")) < -2147483647 || parseInt(charsArray.join("")) < -4294967295){
        return 0
    }

    return parseInt(charsArray.join(""))
};x