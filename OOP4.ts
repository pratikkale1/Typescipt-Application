
class Circle
{
    Radius : number;
    PI: number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

var obj = new Circle(10.7);
var Ret : number = 0;

Ret = obj.CalculateArea();
console.log("Area is : "+Ret);