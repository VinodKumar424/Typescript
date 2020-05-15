var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.Show = function () {
        console.log("i am show");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.Display = function () {
        console.log("i am Display");
    };
    return B;
}(A));
var obj = new B();
obj.Show();
obj.Display();
//inheritance with super class
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.pid = id;
        this.pname = name;
    }
    Person.prototype.GetPerson = function () {
        console.log(this.pid);
        console.log(this.pname);
    };
    return Person;
}());
var Artist = /** @class */ (function (_super) {
    __extends(Artist, _super);
    function Artist(ano, aname, t, p, g) {
        var _this = _super.call(this, ano, aname) || this;
        _this.total = t;
        _this.percentage = p;
        _this.grade = g;
        return _this;
    }
    Artist.prototype.GetArtist = function () {
        _super.prototype.GetPerson.call(this);
        console.log(this.total);
        console.log(this.percentage);
        console.log(this.grade);
    };
    return Artist;
}(Person));
var a1 = new Artist(424, "Viswa", 210, 70, "A");
a1.GetArtist();
