var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.SetStudent = function () {
        this.Sno = 101;
        this.Sname = "vinod";
    };
    Student.prototype.GetStudent = function () {
        console.log(this.Sno);
        console.log(this.Sname);
    };
    return Student;
}());
var s1 = new Student();
s1.SetStudent();
s1.GetStudent();
//employee class
var Employee = /** @class */ (function () {
    function Employee(no, name, sal) {
        this.Eno = no;
        this.Ename = name;
        this.Salary = sal;
    }
    return Employee;
}());
var e1 = new Employee(101, "Vinod", 20000);
document.write(e1.Eno.toString());
document.write(e1.Ename);
document.write(e1.Salary.toString());
console.log(e1.Eno.toString());
console.log(e1.Ename);
console.log(e1.Salary.toString());
