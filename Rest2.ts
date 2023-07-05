// Rest parameters : Variable number of arguments

//function Addition(Arr : number[]) : number
function Addition(...Arr : number[]) : number
{
    let Sum : number = 0;
    let Cnt : number = 0;
    //      1           2           3
    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt];   // 4
    }
    return Sum;
}

var Ret : number = 0;
var Mydata : number[] = [10,20,30,40];

// Ret = Addition(Mydata);

console.log("Result is : "+Ret);

Ret = Addition(10,20,30,40);
