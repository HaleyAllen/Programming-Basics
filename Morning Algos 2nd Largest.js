

function largerThenSeconds(arr){
    var largest = -Infinity
    for(var i = 0; i < arr.length; i++){
        if( arr[i] > largest ){
            largest = arr[i]
        }
    }
    var secondlargest = -Infinity
    for(var x = 0; x < arr.length; x++){
        if ( arr[x] > secondlargest && arr[x] < largest ){
            secondlargest = arr[x]
        }
    }
    return secondlargest
}
console.log(largerThenSeconds([-3,-7,-1,-10,-19,-8]))