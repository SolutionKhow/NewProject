// // const arr=[22,33,44,55,66,77,88,98,99];
// // let key=44;
// // let i=0;
// // let j=arr.length-1;
// // let mid=Math.floor((i+j)/2);

// // if(key==arr[mid]){
// //     console.log('Got This');
// // }else
// //   if(key>arr[mid]){
// //     i=mid+1;
// //     mid=Math.floor((i+j)/2);
// //      if(key==arr[mid]){
// //         console.log('Again');
// //      }

// //   }
// //   if(key<arr[mid]){
// //     j=mid-1;
// //     mid=Math.floor((i+j)/2);
// //     if(key==arr[mid]){
// //         console.log(`You Got It ${mid} position`);
// //     }
// //   }

let binary = function (Arr, Key) {
    let low = 0;
    let high = Arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (Key == Arr[mid]) {
            return true;
        }
        else if (Key < Arr[mid])
            high = mid - 1;
            

        else
            low = mid + 1;

    }
    return false;
}

let Arr = [22, 33, 44, 55, 66, 77, 88];
let Key = 44;

console.log(binary(Arr, Key));

















