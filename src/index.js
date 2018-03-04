module.exports = function solveSudoku(matrix) {

  let matrixClone = matrix.slice();

  function changeZeroes(arr) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (arr[y][x] === 0) {
          arr[y][x] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      }
    }
  }

  function deleteImpossProbalitiesByStrokes(matr) {
    for (let y = 0; y < 9; y++) {
      let strokeNumbers = collectNumbersFromBigStroke(matr, y)
      deletingNumbersInProbalitiesOnThisStroke(matr, strokeNumbers, y);
    }
  }

  function collectNumbersFromBigStroke(arr, y) {
    let resultArr = [];
    for (let x = 0; x < 9; x++) {
      if (!Array.isArray(arr[y][x])) {
        resultArr.push(arr[y][x]);
      }
    }
    return resultArr
  }

  function deletingNumbersInProbalitiesOnThisStroke(arr, strokeNumbers, y) {
    strokeNumbers.forEach(number => {
      for (let x = 0; x < 9; x++) {
        if (Array.isArray(arr[y][x])) {
          if (arr[y][x].indexOf(number) !== -1) {
            arr[y][x].splice(arr[y][x].indexOf(number), 1);
          }
        }
      }
    });
  }

  function collectNumbersFromBigColumn(arr, x) {
    let resultArr = [];
    for (let y = 0; y < 9; y++) {
      if (!Array.isArray(arr[y][x])) {
        resultArr.push(arr[y][x]);
      }
    }
    return resultArr
  }

  function deleteImpossProbalitiesByColumns(matr) {
    for (let x = 0; x < 9; x++) {
      let columnNumbers = collectNumbersFromBigColumn(matr, x)
      deletingNumbersInProbalitiesOnThisColumn(matr, columnNumbers, x);
    }
  }

  function deletingNumbersInProbalitiesOnThisColumn(arr, columnNumbers, x) {
    columnNumbers.forEach(number => {
      for (let y = 0; y < 9; y++) {
        if (Array.isArray(arr[y][x])) {
          if (arr[y][x].indexOf(number) !== -1) {
            arr[y][x].splice(arr[y][x].indexOf(number), 1);

          }
        }
      }
    });
  }

  function changeSoloArrProbToNumb(arr) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (Array.isArray(arr[y][x]) && arr[y][x].length === 1) {
          arr[y][x] = arr[y][x][0];
        }
      }
    }
  }

  console.log(matrixClone);
  console.log("AFTER STROKES CLEANING #################################");
  changeZeroes(matrixClone)
  deleteImpossProbalitiesByStrokes(matrixClone);
  changeSoloArrProbToNumb(matrixClone)
  console.log(matrixClone);
  console.log("AFTER COLUMNS CLEANING #################################");
  deleteImpossProbalitiesByColumns(matrixClone);
  changeSoloArrProbToNumb(matrixClone)
  console.log(matrixClone);

  return matrixClone;
}