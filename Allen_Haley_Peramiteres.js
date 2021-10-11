//  Given a name
function greet(name){
    console.log("Good day, "+ name + "!")
}

greet('Haley')

// With the time of day

function greet(name){
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() 
    console.log("Good day, "+ name + "! " + "It is currently, " + time)
}

greet('Haley')

// Count Dooku

function greet(name){
    if ( name == "Count Dooku"){
        console.log ("I'm coming for you, Dooku!")
    }
}

greet("Count Dooku")