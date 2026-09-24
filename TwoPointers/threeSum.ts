function threeSum(arr:number[]):number[][] {
    let target=0;
    let array1=[]
    while(target<arr.length){
        let leftPointer=target+1;
        let rightPointer= arr.length-1;
        let sum=0;
        while(leftPointer<rightPointer){
            sum= arr[leftPointer]+arr[rightPointer]
            if(sum==(-arr[target])){
                array1.push([arr[target],arr[leftPointer], arr[rightPointer]]);
                break;
            }
            else if(sum<(-arr[target])){
                leftPointer++;
            }
            else{
                rightPointer--;
            }
        }
        target++;
    }
    return array1;
}

console.log(threeSum([-4,-1, -1, 0, 1, 2]));
