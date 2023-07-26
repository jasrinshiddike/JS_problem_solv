function reverseString(string){
    let newString = "";
    
    for(let i = string.length-1; i>=0 ; i--){
        newString = newString + string[i];
    }
    
    return newString;
}

const result = reverseString("hello world");
console.log(result);