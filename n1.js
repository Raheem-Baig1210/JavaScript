// var a=10
// let b=20
// const c=30

// console.log(a,b,c)

// var a="Raheem" //string
// // console.log(typeof(b))
// var b=20.5 //number 
// console.log(typeof(b))
// var a=true
// console.log(typeof(a))

//control flow statments


// var b='10' //string
// // var c=20 //number

// if(b===10){
//     console.log("b is equal to 10")
// }else{
//     console.log("b is  not equals to 10")
// }

// var a=15
// if(a>=18){
//     console.log("Eligible for voting")
// } else{
//     console.log("Not eligible for voting")
// }

// let marks =55
// if(marks>=90){
//     console.log("Grade: A+")
// }else if(marks >=80){
//     console.log("Grade: A")
// }else if(marks>=70){
//     console.log("Grade: B")
// }else if(marks >=65){
//     console.log("Grade: C")
// }else{
//     console.log("FAIL")
// }


// var role="user"

// if(role==='admin'){
//     console.log("You have full access...!!!")
// }else if(role==="user"){
//     console.log("you have limited access...!!!!")
// }else{
//     console.log("Invalid role, Permission denied ..!!!")
// }


//Ternary Operators : It is the simple way to find the results of the conditions and they are best alternative to if else, else if ladder
// var age =15

// console.log(age>=18 ? "Eligible to vote" : "Not eligible to vote")


// var marks = 55
// var grade = (marks >= 90) ? "A+": (marks>80) ? "A" : (marks > 70)? "B" : (marks>60)? "c" :"FAIL";
// console.log(grade)


var arr=[2,3,5,7,]
var obj={
    even: 0,
    odd:  0
}
arr.forEach(
    function(value){
        if(value%2==0){
            obj.even+=1
        }else{
            obj.odd+=1
        }
    }
)
console.log(obj)