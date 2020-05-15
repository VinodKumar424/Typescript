class Student {
    public Sno:number | undefined
    public Sname:string | undefined
    SetStudent():void
    {
        this.Sno=101;
        this.Sname="vinod";
    }
    GetStudent():void
    {
        console.log(this.Sno);
        console.log(this.Sname);
    }


}
var s1:Student=new Student();
s1.SetStudent();
s1.GetStudent();



//employee class
class Employee{
   public Eno:number 
   public Ename:string 
   public Salary:number 
 
   constructor(no:number,name:string,sal:number)
   {
       this.Eno=no;
       this.Ename=name;
       this.Salary=sal;
   }

}
var e1:Employee = new Employee(101,"Vinod",20000);
document.write(e1.Eno.toString());
document.write(e1.Ename);
document.write(e1.Salary.toString());
console.log(e1.Eno.toString());
console.log(e1.Ename);
console.log(e1.Salary.toString());
