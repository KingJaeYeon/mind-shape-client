function main(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  return A.reduce((arr, cur, i) => {
    arr += cur * B[i];
    return arr;
  }, 0);
}

const res = main([1, 4, 2], [5, 4, 4]);
console.timeEnd();

console.log(res);
