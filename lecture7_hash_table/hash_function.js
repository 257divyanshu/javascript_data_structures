// 📍 implementing a simple hash function
function simpleHashFunc(key,maxValue){
    // console.log(key,maxValue);
    let sumOfAsciiCodes = 0;
    for(let i = 0; i<key.length; i++){
        // console.log(key[i],key.charCodeAt(i));
        let asciiCode = key.charCodeAt(i);
        sumOfAsciiCodes += asciiCode;
    };
    // console.log(sumOfAsciiCodes);
    return sumOfAsciiCodes%maxValue;
}
// console.log(simpleHashFunc("Divyanshu",50));
// - logic behind this hash function : take a string, get ascii codes of all characters, sum them up, return the remainder of sum/maxValue

export default simpleHashFunc;