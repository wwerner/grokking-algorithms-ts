let list = Array.from(Array(1000).keys());
let steps = 0;
console.log(binarySearch(453, list));

function binarySearch(n: Number, list: Number[]): String | undefined {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    console.log("Step " + steps++);
    var mid = Math.floor((left + right) / 2);
    var guess = list[mid];

    if (guess == n) return "Found " + n + " at index " + mid;
    if (guess > n) right = mid - 1;
    if (guess < n) left = mid + 1;
  }
  return undefined;
}
