// two types of datatype primitve and refernce or non primiitve datatype

//primitive:- string, number,bigInt,boolean,null,undefined.
// const score = 100
// const scorevalue =100.3

// const isLoggedin = false
// const outsidetemp = null


// //non primitive:- array,function,object.



// //array
// const heros=['ironman','superman','batman']



// objects

// singleton Object
const JsUser ={
    name:'sarthak tyagi',
    age:22,
    email:'sarthak@gmail.com',
    location:'noida'


}

// console.log(JsUser.name);
// console.log(JsUser["name"]);

// non-singleton object

// const tinderUser = new Object()
const tinderUser={
    userID:"124mvksmdv",
    UserName:"sarthak",
    UserLoaction:"Noida"
}

// tinderUser.userID = "34343cdnclsnds"

// console.log(tinderUser);


const obj1={
    rollNo:23
}


const obj2=obj1

obj2.rollNo=45
// console.log(obj2)
// console.log(obj1)


const regularUser={
    email:"fnsdfjhjdds",
    username:{
        fullname:{
            firstname:"sarthak",
            lastname:"tyagi"
        }
    }
}
// console.log(regularUser.username.fullname);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(tinderUser.hasOwnproperty('isloggedin'))


const course ={
    coursename: "javascript",
    courseprice:"999",
    coursemode:"online"
}
const {coursename:helllo} = course

console.log(helllo);