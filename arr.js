var str1="I am Raheem and we are learning mern"
// console.log(str1.length) // lenght
// console.log(str1.split(" ")) //splitting the string
// console.log(str1.toLowerCase())
// console.log(str1.toUpperCase())
 
// console.log(str1.trim("r"))
// console.log(str1.replace(" ","$"))
// console.log(str1.replaceAll(" ","$"))

// console.log(str1.slice(7,-1))

// var arr=["Apple","Mango","Orange","Pineapple"]
// arr.push("Strawberry")
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift("Kiwi")
// console.log(arr)

// console.log(arr.includes("Orange"))

// arr.forEach(
//     function(value){
//         console.log(value)
//     }
// )

// console.log(arr.indexOf("Pineapple"))


// var obj={
//     n1: "Raheem",
//     rolnum: 79,
//     clg: "LRDS"
// }
// console.log(obj.n1)


function Student(nm,ag,no){
    this.n1=nm,
    this.age=ag,
    this.phno=no
}

arr=[
     s1=new Student("Faseeh",24,65646464146),
     s2=new Student("Kareem",23,65646464146),
     s3=new Student("Awais",22,65646464146),
     s4=new Student("Faizan",21,65646464146)
]
console.log(arr[3].age)