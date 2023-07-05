// optional parameter
function Area(Rad, PI) {
    var Ans = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    Ans = PI * Rad * Rad;
    return Ans;
}
var Ret = 0;
Ret = Area(20.3, 3.14);
console.log("Area is : " + Ret);
Ret = Area(20.3);
console.log("Area is : " + Ret);
