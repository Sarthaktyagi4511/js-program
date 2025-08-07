{let a= 20
var b= 23
const c=45}


//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username:'sarthak tyagi'
}


//************************************arrow function**************************

const user ={
    name:"sarthak",
    price:999,

    welcomemessage: function(){
        console.log(`${this.name},welcome to website`);
    }


}
// user.welcomemessage()

const addtwonumber =(num1,num2)=>  (num1+num2)

// console.log(addtwonumber(2,3));

//***********************************************controlflow*****************************************
//   const score=500;

//   if (score>900){
//     console.log("you have scored 1st div");
//   }else if(score>= 800){
//     console.log("you have scored 2st div");
//   }else if(score>= 600){
//     console.log("you have scored 3st div");
//   }else{
//     console.log("better luck next time");
//   }
 
//******switch case******

// switch(key){
//     case value : 
//     break;
//     case vaule :
//         break;
    


// }


// const month ="january";

// switch(month) {
//     case "january": 
//     console.log("ankit bday celebration");
//     break;
//     case "feb":
//          console.log("sarthak bday celebration");
//     break;
//     default :
//     console.log("no ones bday")
//     break;
// }


//**********************************looping***********************************************

// for (let ok=0; ok<10; ok++){
//     console.log(ok);
// }

// for (let i=0; i<10; i++){
//     console.log(`for inner loop ${i}`)
//         for (let j=0; j<10; j++){
//             console.log(`${i}*${j} = ${i*j}`);
//         }

// }

// let myarray = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i<myarray.length; i++){
//     console.log(myarray[i]);
// }



 //*********************************break and continue***********************************

//  for (let i =0; i<10;i++){
//     if(i==5){
//         console.log("5 is detected");
//     continue;
// }

// console.log(`value of i id ${i}`);

//  }

// index=0;
// while(index<=20){
//     console.log(`value of index is ${index}`);
//     index=index+2
// }


for(let ok=0;ok<30;ok+=2){
    // console.log(`value of ok is ${ok}`)
}
//***************************for of loop*******************************

const arr=[1,2,3,4,5] 
for (const print of arr) {
    // console.log(print);
    
}
//**************************call back************** */
const coding=['ruby','java','pyhton','js']
coding.forEach(function(item) {
    // console.log(item);
    
});


const arr1=[
    {name:'sarthak',age:23},
    {name:'ankit',age:24},
    {name:'suby',age:25}
]
arr.forEach(function(item){
    // console.log(`name is ${item.name} and age is ${item.age}`);
})



const users = [
  { id: 1, name: "Aarav", age: 22, city: "Delhi" },
  { id: 2, name: "Maya", age: 25, city: "Mumbai" },
  { id: 3, name: "Kabir", age: 30, city: "Bangalore" },
  { id: 4, name: "Ishita", age: 27, city: "Chennai" },
  { id: 5, name: "Rohan", age: 19, city: "Hyderabad" },
  { id: 6, name: "Ananya", age: 35, city: "Pune" },
  { id: 7, name: "Yash", age: 28, city: "Kolkata" },
  { id: 8, name: "Tanya", age: 24, city: "Jaipur" },
  { id: 9, name: "Raj", age: 32, city: "Ahmedabad" },
  { id: 10, name: "Simran", age: 21, city: "Lucknow" },
];

const filteruser =users.filter( (cty)=> cty.city === "Mumbai" && cty.age > 20);
// console.log(filteruser);


const products = [
  { id: 1, name: "Laptop", price: 45000, category: "Electronics", inStock: true },
  { id: 2, name: "Headphones", price: 1500, category: "Electronics", inStock: false },
  { id: 3, name: "Shoes", price: 2500, category: "Fashion", inStock: true },
  { id: 4, name: "Backpack", price: 1200, category: "Accessories", inStock: true },
  { id: 5, name: "Watch", price: 3000, category: "Fashion", inStock: false },
  { id: 6, name: "Smartphone", price: 22000, category: "Electronics", inStock: true },
  { id: 7, name: "T-shirt", price: 700, category: "Fashion", inStock: true },
  { id: 8, name: "Desk Lamp", price: 900, category: "Home", inStock: true },
  { id: 9, name: "Notebook", price: 80, category: "Stationery", inStock: true },
  { id: 10, name: "Sunglasses", price: 1100, category: "Accessories", inStock: false },
];

const product =products
              
               .filter((prdt)=>prdt.category==="Electronics" && prdt.inStock===true)
                .map((prdt)=>prdt.price+10)
// console.log(product);




const cart = [
  { id: 1, item: "Laptop", price: 45000, quantity: 1 },
  { id: 2, item: "Mouse", price: 700, quantity: 2 },
  { id: 3, item: "Keyboard", price: 1200, quantity: 1 },
  { id: 4, item: "Monitor", price: 10000, quantity: 1 },
  { id: 5, item: "Pen Drive", price: 500, quantity: 3 }
];
let totalprice = cart.reduce((acc,items)=> acc+(items.price*items.quantity),0);
console.log(`Total price of cart is ${totalprice}`);