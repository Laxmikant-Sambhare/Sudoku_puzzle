let _line1 =  [0, 0, 0, 2, 6, 0, 7, 0, 1];
let _line2 =  [6, 8, 0, 0, 0, 7, 0, 9, 0];
let _line3 =  [1, 9, 0, 0, 0, 4, 5, 0, 0];
let _line4 =  [8, 2, 0, 1, 0, 0, 0, 4, 0];
let _line5 =  [0, 0, 4, 6, 0, 2, 9, 0, 0];
let _line6 =  [0, 5, 0, 0, 0, 3, 0, 2, 0];
let _line7 =  [0, 0, 9, 3, 0, 0, 0, 7, 4];
let _line8 =  [0, 4, 0, 0, 5, 0, 0, 3, 6];
let _line9 =  [7, 0, 3, 0, 1, 8, 0, 0, 0];


function sodokoSolver(data) {
let possibleValues = [1,2,3,4,5,6,7,8,9];
    let presentvalues= [];
 for (var i=0;i<data.length;i++){
     if (data[i]>0){
         presentvalues.push(data[i]);
     }
 }

    possibleValues = possibleValues.filter( function( el ) {
        return presentvalues.indexOf( el ) < 0;
    } )
    for (let i = 0; i < 9; i++) {
         if(data[i] === 0){
                    data[i] = possibleValues[0];
                    possibleValues.shift();
            }
         }
     }
    
sodokoSolver(_line1);
sodokoSolver(_line2);
sodokoSolver(_line3);
sodokoSolver(_line4);
sodokoSolver(_line5);
sodokoSolver(_line6);
sodokoSolver(_line7);
sodokoSolver(_line8);
sodokoSolver(_line9);
console.table(_line1);
console.table(_line2);
console.table(_line3);
console.table(_line4);
console.table(_line5);
console.table(_line6);
console.table(_line7);
console.table(_line8);
console.table(_line9);





