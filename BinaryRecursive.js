let BinaryRecoversive = (low, high, key) => {

    if (low == high) {
        if (low == Arr[key]) {
            return low;
        }
        else {
            return false;
        }

    }
    let mid = Math.floor((low + high) / 2);
    if (key == Arr[mid]) {
        return mid;
    }
    else if (key < Arr[mid]) {
        return BinaryRecoversive(low, mid - 1, key);

    }
    return BinaryRecoversive(mid + 1, high, key);

}

let Arr=[11,22,33,44,55,66,77,88,99];
let key=99;
let low=0;
let high=Arr.length;

console.log(BinaryRecoversive(low,high,key));
