// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// this one is going to be harder then the others I have done recently

// for this we are going to need to do a for loop
// .splice() - changes the contents of an array by removing and replacing existing elements and/or adding new elements in place
// .push() - adds the specified elements to the end of an array and returns the new length of the array
// with .splice() and .push() we should be able to do this
// first we remove the zeros, then we place the other elemnts back together and then add the zeros at the end

function moveZeros(arr){
    for(let i = arr.length; i--;) {
        if(arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

// saw some other ideas that I liked
// basically it returns anything that isn't a zero first, then adds the zeros
function moveZeros(arr){
    return[
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}