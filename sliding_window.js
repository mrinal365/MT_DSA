// Question List ->
// 1.  Find max subarray sum of size K
// 2. First negative number in every window of size K













// 1.  Find max subarray sum of size K

// 1.1 Brute Force
// const arr = [2, 5, 1, 8, 2, 9, 1 ]; // Answer 19
// const k = 3;
// let max = 0;

// for(let i=0; i<arr.length; i++){
//     let sum = 0;
//     for(let j =i; j<i+k; j++){
//             sum = sum+arr[j];
//     }
//     if(sum>max){
//         max = sum;
//     }
// }

// console.log(max);















// 2. First negative number in every window of size K

// 2.1 Brute Force

const arr = [12, -1, -7, 8, -15, 30, 16, 28];   // Answer = [ -1, -1, -7, -15, -15, 0 ]
const k = 3;

const finalArray = [0,0,0,0,0,0]  // size of this == no. of possible subarray's of size k [length - k + 1]

for(let i=0; i<arr.length; i++){
    for(j=i; j<i+k;j++){
        if(arr[j]<0){
            finalArray[i]= arr[j]
            break
        }
    }
}

console.log(finalArray);