let list = Array.from(Array(10000).keys());
let steps = 0;

console.log('Incremental')
console.log('-> ' + incrementalBinarySearch(37, list));

console.log('Recursive')
steps = 0;
console.log('-> ' + recursiveBinarySearch(37, list));

function incrementalBinarySearch(n: Number, list: Number[]): Number | undefined {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    console.log("Step " + steps++);

    var mid = Math.floor((low + high) / 2);
    var guess = list[mid];

    if (guess == n) return n;
    if (guess > n) high = mid - 1;
    if (guess < n) low = mid + 1;
  }
  return undefined;
}

function recursiveBinarySearch(n: Number, list: Number[]) : Number | undefined{
  console.log("Step " + steps++);

  let mid = Math.floor(list.length/2)
  if(list[mid] == n) return n
  if(n > list[mid]) return recursiveBinarySearch(n, list.slice(mid+1, list.length));
  if(n < list[mid]) return recursiveBinarySearch(n, list.slice(0, mid));
}
