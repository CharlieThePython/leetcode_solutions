/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const row1 = [1]
    const row2 = [1,1]

    exceptions = [1,2]

    standardBigRow = [row1,row2]

    if(exceptions.includes(numRows)){
        switch(numRows){
            case exceptions[0]:
                return [[1]]
                break;
            case exceptions[1]:
                return standardBigRow
        }
    }
    let tempArray = []
    for(let i = 1; i < numRows-1; i++ ){
        tempArray[0] = 1;
        for(let j = 0; j< i; j++){
            tempArray.push(standardBigRow[i][j]+standardBigRow[i][j+1])
        }
        tempArray.push(1);
        standardBigRow.push(tempArray)
        tempArray = []
    }

    return standardBigRow
};

function rowCalculator(row1,row2){
    result = 0;
    row.map(num => result+num)
    return 
}