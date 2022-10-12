export const stackCode1 = `
`;

export const rndArrayCode = `
    // create large sorted array of random numbers
    const largeSet1 = new Set();
    for (let i = 0; i < 100; i++) {
    largeSet1.add(Math.trunc(Math.random() * 200) + 1);
    }
    const largeArray1 = Array.from(largeSet1);
    largeArray1.sort((a, b) => a - b);

    const medSet1 = new Set();
    for (let i = 0; i < 50; i++) {
    medSet1.add(Math.trunc(Math.random() * 200) + 1);
    }
    const medArray1 = Array.from(medSet1);

`;

export const linearSearch = `
    //linear search algorithm

    const linearSearch = function (array, searchTerm) {
    let found = 0;
    for (const item of array) {
        if (item === searchTerm) {
        found = 1;
        console.log(
            \` \${searchTerm} is at index \${array.indexOf(item)} of the array.\`
        );
        } else if (item > searchTerm) {
        break;
        } else continue;
    }
    if (!found) console.log("The item was not found!");
    };

`;

export const binarySearch = `
    // Binary Search
    const binarySearch = function (array, searchTerm) {
    let found = 0;
    // establish the bounds
    let lowerBound = 0;
    let upperBound = array.length - 1;
    // begin while loop
    while (lowerBound <= upperBound) {
        // get the mid point
        const midPoint = Math.round((upperBound + lowerBound) / 2);
        console.log(midPoint);
        const valueAtMidpoint = array[midPoint];
        // conditional block
        // if the search term equal midpoint done
        if (searchTerm === valueAtMidpoint) {
        found = 1;
        console.log(\`\${searchTerm} was found at index \${midPoint} in the array\`);
        break;
        }
        // if the search term is less than wid point set upper bound to mid -1
        else if (searchTerm < valueAtMidpoint) upperBound = midPoint - 1;
        // if the search term is more than mid point set lower bound to mid +1
        else lowerBound = midPoint + 1;
    }
    if (!found) console.log("Search Value was not found in array.");
    };

`;

export const bubbleSort = `
//Bubble Sort

//take the first two items of an array
const bubbleSort = function (array) {
  let sortFinIndex = array.length - 1;
  let sorted = 0;
  while (!sorted) {
    sorted = 1;
    for (let i = 0; i < sortFinIndex; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = 0;
      }
    }
    sortFinIndex -= 1;
  }
  return console.log(array);
};

`;
