class Factory{
    public fno:number;
    public fname:string;
    public salary:number;
    public da:number;
    public hra:number;
    public tsal:number;

    constructor(no:number,name:string,sal:number)

    {
        this.fno=no;
        this.fname=name;
        this.salary=sal;

    }
    public CalDa():void
    {
        this.da=0.2*this.salary;

    }
    public CalHra():void
    {
        this.hra=0.4*this.salary;
    }
    public CalTsal():void
    {
        this.tsal=this.salary+this.da+this.hra;
    }
    public DispEmp():void
    {
        console.log("Eno is "+this.fno);
        console.log("Ename is "+this.fname);
        console.log("BasicSal is "+this.salary);
        console.log("Da is "+this.da);
        console.log("Hra is "+this.hra);
        console.log("Tsal is "+this.tsal);
    }
}
var f1:Factory = new Factory(100,"Vinod Kumar",20000);
f1.CalDa();
f1.CalHra();
f1.CalTsal();
f1.DispEmp();


//method with data type and return type


class X{
    private x:number;
    private y:number;
    constructor()
    {
        this.x=10;
        this.y=5;
    }

    public Add():number
    {
        return this.x+this.y;
    }
    public Sub():number
    {
        return this.x-this.y;
    }
}


var x1:X=new X();
var a:number=x1.Add();
console.log("Sum is"+a);
var b:number=x1.Sub();
console.log("Diff is"+b);


