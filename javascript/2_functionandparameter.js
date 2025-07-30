function Saymyname() {
    console.log("sarthak tyagi")
}

// Saymyname()

function addtwonumber (number1,number2){
// console.log(number1+number2);

}
addtwonumber(3,5)


 loginuser=(username) => {
    if(username === undefined){
        console.log("please enter the value")
        return
    }
    return`${username} user has logged in`
}
// console.log(loginuser());

// object
const user={
    username:'sarthak',
    contact:89938982382 
}
// function
handleobjects=(anyobject)=>{
    return`current user is ${anyobject.username} and contact number is ${anyobject.contact}`



}

console.log(handleobjects(user));





    