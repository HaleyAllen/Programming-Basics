
function howMuchCakeleftOver(numberofpeople,numberofpeices){
    for(var peopleserved =0; peopleserved < numberofpeople[0]; peopleserved++){
        numberofpeices[0]=numberofpeices[0]-1
    }
    if (numberofpeices[0] === 0){
        console.log("No leftovers for you!")
    } else if (numberofpeices[0] <= 2 && numberofpeices[0] > 0){
        console.log("You have some left overs")
    } else if (numberofpeices[0] >= 3 && numberofpeices[0] <= 5){
        console.log("You have left overs to share")
    } else (numberofpeices[0] > 5);{
        console.log("Hold another party!")
    }
}
howMuchCakeleftOver([5],[12])