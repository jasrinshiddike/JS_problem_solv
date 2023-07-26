function findMostFrequentElement(arr) {
    let frequency = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequency[element] = (frequency[element] || 0) + 1;
    }
  
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const element in frequency) {
      if (frequency[element] > highestFrequency) {
        highestFrequency = frequency[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  const result = findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
  console.log(result);