function romanToInt(romanNumeral) {
    const romanValues = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const current = romanValues[romanNumeral[i]];
      const next = romanValues[romanNumeral[i + 1]];
  
      if (next > current) {
        result += next - current;
        i++;
      } else {
        result += current;
      }
    }
  
    return result;
  }
  
  const result = romanToInt("IX");
  console.log(result);