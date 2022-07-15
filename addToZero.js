// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

const addsZero = arr => {
  for (let i = 0; i < arr.length; i++) {
        for (let x = i+1; x < arr.length; x++) {
            console.log(i, x)
            if (arr[i] + arr[x] === 0) {
                return true
            }
        }
    }
    return false
}

let checkAddsZero = addsZero(array)
console.log(checkAddsZero)