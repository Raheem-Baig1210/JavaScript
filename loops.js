// 1. for loop 2. while 3. do while
for(let i=0;i<5;i++){
    console.log(i**2);
}

for(let i=0;i<7;i++){
    console.log("*".repeat(i));
}

for(let i=7;i>=1;i--){
    console.log("*".repeat(i));
}

let a=5
while(a>1){
    console.log("Hello World")
    a--;
}

do{
    console.log("Hello World");
    a--;
}while(a>5)


function display(){
    console.log("Hello I am from inside the function")

}
console.log("I am outside of function")
display()

function add(a,b){
    c=a+b
    return c
}

var sum=add(10,20)
console.log(sum)

var subtract=function(a,b){
    c=a-b
    return c
}

var sub=subtract(20,10)
console.log(sub)
