
// A is array of Integer..like const A=[]


const Arr = [2, 4, 2];
majorityElement = function (Arr) {


    const outPut = [];


    Arr.forEach(function (elemnts) {
        if (outPut[elemnts]) {
            outPut[elemnts] = outPut[elemnts] + 1;

        }
        else {
            outPut[elemnts] = 1;
        }

    });
    for (const item in outPut) {
        if (outPut[item] > (Arr.length / 2)) {
            return item;
        }
    }

}
majorityElement(Arr);