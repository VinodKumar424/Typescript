let myFirstVariable:string ="hello world"
console.log(myFirstVariable)

let name:string = "John"; 
let score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

//functions
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 
 