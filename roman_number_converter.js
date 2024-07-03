/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToInteger = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
        let charArray = s.split('');
        let intArray = []
        intArray = charArray.map((character) =>{
            return romanToInteger.get(character)
        })
        console.log('intArray',intArray);
        let i = 0;
        intArray2 = intArray.map((number,i) =>{
            if(number < intArray[i+1] && i != intArray.length){
                return -Math.abs(number);
            }
            return number;
        })
        console.log('intArray2',intArray2);
        let total = 0
        intArray2.forEach(num => total+=num);
        return total
    
    };