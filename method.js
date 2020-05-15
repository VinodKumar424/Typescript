var Factory = /** @class */ (function () {
    function Factory(no, name, sal) {
        this.fno = no;
        this.fname = name;
        this.salary = sal;
    }
    Factory.prototype.CalDa = function () {
        this.da = 0.2 * this.salary;
    };
    Factory.prototype.CalHra = function () {
        this.hra = 0.4 * this.salary;
    };
    Factory.prototype.CalTsal = function () {
        this.tsal = this.salary + this.da + this.hra;
    };
    Factory.prototype.DispEmp = function () {
        console.log("Eno is " + this.fno);
        console.log("Ename is " + this.fname);
        console.log("BasicSal is " + this.salary);
        console.log("Da is " + this.da);
        console.log("Hra is " + this.hra);
        console.log("Tsal is " + this.tsal);
    };
    return Factory;
}());
var f1 = new Factory(100, "Vinod Kumar", 20000);
f1.CalDa();
f1.CalHra();
f1.CalTsal();
f1.DispEmp();
//method with data type and return type
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
        this.y = 5;
    }
    A.prototype.Add = function () {
        return this.x + this.y;
    };
    A.prototype.Sub = function () {
        return this.x - this.y;
    };
    return A;
}());
var a1 = new A();
var a = a1.Add();
console.log("Sum is" + a);
var b = a1.Sub();
console.log("Diff is" + b);
