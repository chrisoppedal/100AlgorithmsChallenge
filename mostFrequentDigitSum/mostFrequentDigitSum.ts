export function mostFrequentDigitSum(n: number): number {
    let digitSum = (num) => {
        if (num) {
            let strArr = num.toString().split('');
            return strArr.reduce((accumulator, numStr) => {
                return accumulator + +numStr;
            }, 0);
        }
    }

    let createArr = (arr) => {
        if (arr.length && (arr[arr.length - 1]  - digitSum(arr[arr.length - 1]) <= 0)) {
            arr.push(0);
            return arr
        } else {
            arr.push(digitSum(arr[arr.length - 1]));
            return createArr(arr);
        }
    }

    let arr = createArr([n])
    let map = arr.reduce((map, num) => {
        num = digitSum(num);
        if (!map.get(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
        return map;
    }, new Map());
    const max = Math.max(...map.values());
    const maxArr = [];
    for (let [key, value] of map) {
        if (value == max) {
            maxArr.push(key);
        }
    }
    return Math.max(...maxArr);
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));