class A{
    public Show():void
    {
        console.log("i am show");
    }
}

class B extends A{
    public Display():void
    {
        console.log("i am Display");
    }
}
var obj:B= new B();
obj.Show();
obj.Display();


//inheritance with super class
class Person{
    private pid:number;
    private pname:string;
    constructor(id:number,name:string)
    {
        this.pid=id;
        this.pname=name;
    }
    public GetPerson():void
    {
        console.log(this.pid);
        console.log(this.pname);
    }
}

class Artist extends Person
{
private total:number;
private percentage:number;
private grade:string;

constructor(ano:number,aname:string,t:number,p:number,g:string)
{
    super(ano,aname);
    this.total=t;
    this.percentage=p;
    this.grade=g;
}
public GetArtist():void
{
    super.GetPerson();
    console.log(this.total);
    console.log(this.percentage);
    console.log(this.grade);
}
}
var a1:Artist = new Artist(424,"Viswa",210,70,"A");
a1.GetArtist();