const SortedArray = (Arr, Key) => {
    let Low = 0;
    let High = Arr.length - 1;

    while (Low <= High) {
        let Mid = Math.floor((Low + High) / 2);
        if (Key == Arr[Mid]) {
            return Mid;
        }
        else if (Key < Arr[Mid]) {
            High = Mid - 1;
        }
        else {
            Low = Mid + 1;
        }
     
    }
    
   return false;
}
let Arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let Key = 21;
console.log(SortedArray(Arr, Key))