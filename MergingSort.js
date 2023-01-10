const MergeSort=(low,High)=>{
    if(low<High){
        let mid=Math.floor((low+High)/2);
        MergeSort(low,mid);
        MergeSort(mid+1,High);
        
    }
}