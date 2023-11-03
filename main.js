function reverseWord(array) {
    let reverse = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reverse[reverse.length] = array[index];
    }
    return reverse;
}

let orginalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let reverse = reverseWord(orginalArray);

console.log("orginal Array: ", orginalArray);
console.log("terssine array: ", reverse);


