function check(num3,num4){
    console.log(num3+num4);
    
}
check(5,7)

function sum(num1,num2){
    console.log(num1+num2);
    
}
// console.log(sum(2,5));
sum(10,20) // here only call the function


function anotherSum(num1,num2){
    let result = num1+num2;
    return result;
}
anotherSum(10,100) // when we use return keyword then we must have to use console.log(& here call the function)


function loginUserMessage(username = "sam"){  // here we set the default value in parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))

