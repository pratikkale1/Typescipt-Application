// Class = Data + Functions
// Class = Characteristics + Behaviours
var Student = /** @class */ (function () {
    // Behaviours
    function Student(N, M, A, C) {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student : " + this.Name);
        console.log("Marks of student : " + this.Marks);
        console.log("Age of student : " + this.Age);
        console.log("City of student : " + this.City);
    };
    return Student;
}());
var Obj135 = new Student("Ranjit", 98, 24, "Pune");
var Obj162 = new Student("Dev", 90, 22, "Jalgaon");
Obj135.Display();
Obj162.Display();
