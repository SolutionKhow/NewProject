let MergeSort = (arr, low, high) => {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        MergeSort(arr, low, mid);
        MergeSort(arr, mid + 1, high);
        Merge(arr, low, high, mid);
    }

}
let Merge = (arr, low, high, mid) => {
    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            B[k++] = arr[i++];
        } else {
            B[k++] = arr[j++]

        }
    }
    while (i <= mid) {
        B[k++] = arr[i++]
    }
    while (j <= high) {
        B[k++] = arr[j++]
    }
    for (k = low; k <= high; k++) {
        arr[k] = B[k];
    }

}




let arr = [124, 55, 23, 77, 34, 1, 111, 45, 11, 87, 999, 3];
let low = 0;
let high = arr.length - 1;

let B = [];


MergeSort(arr, low, high);
console.log(arr)
