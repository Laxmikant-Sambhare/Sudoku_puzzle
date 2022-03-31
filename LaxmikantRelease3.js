
              let _board = [
                [0, 0, 0, 2, 6, 0, 7, 0, 1],
                [6, 8, 0, 0, 0, 7, 0, 9, 0],
                [1, 9, 0, 0, 0, 4, 5, 0, 0],
                [8, 2, 0, 1, 0, 0, 0, 4, 0],
                [0, 0, 4, 6, 0, 2, 9, 0, 0],
                [0, 5, 0, 0, 0, 3, 0, 2, 0],
                [0, 0, 9, 3, 0, 0, 0, 7, 4],
                [0, 4, 0, 0, 5, 0, 0, 3, 6],
                [7, 0, 3, 0, 1, 8, 0, 0, 0]
            ]
          

    function sodokoSolver(data) {
        function isValid(board, row, col, k) {
            for (let i = 0; i < _board.length; i++) {
                
                if (board[row][i] == k || board[i][col] == k ) {
                  return false;
                }
            }
            return true;
        }
        for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] === 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = k;
            if (sodokoSolver(data)) {
             return true;
            } else {
             data[i][j] === 0;
            }
           }
         }
         
         return false;
       }
     }
   }
   return true;
  }

  
sodokoSolver(_board);
console.table(_board);