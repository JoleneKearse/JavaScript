// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
    //   convert to lowercase
    const casedArr = str.toLowerCase().split("");
    // remove duplicates
    const uniqueSet = [...new Set(casedArr)];
    //   return true if same length
    return casedArr.length == uniqueSet.length;
}
