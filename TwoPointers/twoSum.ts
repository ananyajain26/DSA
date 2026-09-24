function twopointer(arr: number[],target:number ): number[] {

    let leftpointer =0;
    let rightpointer= arr.length-1;
    let sum=0;
    let a1:number[]=[]
    while(leftpointer<rightpointer){
        sum = arr[leftpointer] + arr[rightpointer]
        if(sum== target){
            // return [arr[leftpointer], arr[rightpointer]]
            a1.push(arr[leftpointer])
            a1.push(arr[rightpointer])
            break;

        }
        else if(sum<target){
            leftpointer++;
        }
        else{
            rightpointer--;
        }

    }
    return a1;

}

console.log(twopointer([1,2,3,4,5],7));
console.log(twopointer([-2,-1,0,1,2,3],4 ));


