let Merging = (ArrA, ArrB, m, n) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i <= m && j <= n) {
        if (ArrA[i] < ArrB[j]) {
            Arrc[k++] == ArrA[i++]
        }
        else {
            Arrc[k++] == ArrB[j++]
        }
      
    }
    for (; i <= m; i++) {
        Arrc[k++] = ArrA[i];



    }
    for (; j <= n; j++) {
        Arrc[k++] = ArrB[j];

    }

    

}

let ArrA = [10, 30, 50, 70];
let ArrB = [20, 40, 60, 80, 90, 100];
let Arrc = [];
let m = ArrA.length;
let n = ArrB.length;
console.log(Merging(ArrA, ArrB, m, n));