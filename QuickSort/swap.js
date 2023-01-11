const  swap=function(Arr,i,j){
    let temp=Arr[i];
    Arr[i]=Arr[j];
    Arr[j]=temp;
    console.log(temp);


}
let Arr=[22,33,44,55,66];
let i=1;
let j=Arr.length-2;
swap(Arr,i,j);
console.log(Arr);



