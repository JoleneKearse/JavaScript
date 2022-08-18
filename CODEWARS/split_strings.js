function solution(str) {
    let i = 0;
    let result = [];
    //   if str is an odd number add '_' to the end
    if (str.length % 2 !== 0) {
        str += "_";
    }
    //   push concatenated pairs to result as long as they exist
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        //     move on to the next pair
        i += 2;
    }
    //   return result
    return result;
}
