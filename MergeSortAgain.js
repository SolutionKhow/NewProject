let MergeSort = (Arr, low, high) => {
    if (low < high) {
        let mid1 = Math.floor((low + high) / 2);
        MergeSort(Arr, low, mid1);
        MergeSort(Arr, mid1 + 1, high);
        Merge(Arr, low, high, mid1);
    }
}
let Merge = (Arr, low, high, mid) => {
    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
        if (Arr[i] < Arr[j]) {
            B[k++] = Arr[i++];
        } else {
            B[k++] = Arr[j++]
        }
    }

    while (i <= mid) {
        B[k++] = Arr[i++];
    }
    while (j <= high) {
        B[k++] = Arr[j++];
    }

    for (k = low; k <= high; k++) {
        Arr[k] = B[k]
    }

}

let Arr = [ 124, 55, 23, 77, 34, 1, 111, 45, 11, 87, 999, 3];
let low = 0;
let high = Arr.length - 1;

let B = [];


MergeSort(Arr, low, high);
console.log(B)

