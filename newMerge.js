let Merge = (A, B, n, m) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i <= m && j <= m) {
        if (A[i] < B[j]) {
            C[k++] = A[i++];


        } else {
            C[k++] = B[j++];

        }

    }


    ///Remaining elemnent in Array

    for (; i <= m; i++) {
        C[k++] = A[i];
    }


    for (; j <= n; j++) {
        C[k++] = B[j];

    }

}


let A = [1, 3, 5, 7, 9, 14, 18, 22];
let B = [2, 4, 6, 8, 10, 19, 20,24];
let m = A.length-1;
let n = B.length-1;
let C = [];

Merge(A, B, m, n);
console.log(C);