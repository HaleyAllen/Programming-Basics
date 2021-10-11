

function alwaysHungry(arr){
    var hungry = true
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            hungry = false
            console.log("yummy")
        }
    }
    if(hungry){
        console.log("I'm hungry")
    }
}
alwaysHungry(["seven","three","hamburger"])