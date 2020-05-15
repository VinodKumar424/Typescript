let Print=()=>console.log("hello type Script");
Print();


//numbers
let Print1 =(x:number,y:number)=> console.log("sum is "+(x+y));
Print1(5,3);

//strings
let Print2 =(x:string,y:string,z:string) => console.log("Company is "+(x+y+z));
Print2("Glory","Auto","Tech");

//operation

let Sum = (x:number,y:number):number=>
{
    return x+y;
}
let r=Sum(6,7);
console.log(r);


