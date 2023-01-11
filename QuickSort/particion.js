// let particion = (low, high) => {
//     let i = low;
//     let j = high;
//     let pivot = low;
//     //console.log(i,j,pivot);


//     while (i < j) {
//         do {
//             i++;
//         } while (Arr[i] <= pivot)    


//         do {
//             j++;
//         } while (Arr[j] > pivot)



//          if (i < j) {
//              swap(Arr,i,j);
//          }

//     }
//     swap(Arr,i+1,j);

//     return j;

// }
// let swap=(Arr,i,j)=>{
// let temp=Arr[i];
// Arr[i]=Arr[j];
// Arr[j]=temp;

// }


// // let QuickSort=(low,high)=>{
// //     if(low<high){
// //       let m=particion(low,high);
// //       QuickSort(low,m-1);
// //       QuickSort(m+1,high);
// //     }
// // }
// let Arr=[43,66,55,88,11,33,99,56,97];
// let low=0;
// let high=Arr.length-1;

// let j=particion(low,high);
// console.log(j)




let partion = (low, high) => {

    let pivot = arr[low];
    let i = low;
    let j = high;


    while (i < j) {

        do {
            i++
        }
        while (arr[i] <= pivot)

        do {
            j--
        }
        while (arr[j] > pivot)


        if (i < j) {
            swap(arr, i, j);//swap i value to j,j value to i
        }
    }
    swap(arr, low, j);//low=pivot value and j is current posion return
    return j;
}
var swap = (arr, l, h) => {
    let temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
}

let QuickSort = (low, high) => {
    if (low < high) {
        const j = partion(low, high);
        QuickSort(low, j);
        QuickSort(j + 1, high);
    }
}

let arr = [213, 55, 3, 6765, 12321, 8768, 3243, 333, -14];
let low = 0;
let high = arr.length ;


QuickSort(low, high);
console.log(arr);















































