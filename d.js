// Use of the isArray , map , filter , foreach loop here 

const for_each_arr = ["pawan","mansingh",6,"rishav","rakhi","bala",3,4]

// for each do work like that given below
if(Array.isArray(for_each_arr)){
    // it will not return a any value because the for each function does not return any value where as if we will use the map here than that return the new array here . you can see example give below in this code :
const return_arr = for_each_arr.forEach((val,index,arr)=>{
    console.log('Array val is the ',val);
    console.log(index)
    console.log(arr)
})
// it will return a undefine check the console here . 
console.log("the returning value of the forEach array is the ", return_arr)
}

// in the below example use of the filter

const arr = [65,3,5,66,3,366,44,4,6]
console.log('Array without use of the filter',arr)
const filteredArray = arr.filter((ele) => ele>5)
console.log('filtered array is the ',filteredArray)

// in the given below example use of the map .
const notes = [
    {
        folderId : "9",
        title :"folder a"
    },
    {
        folderId : "5",
        title :"folder b"
    },
    {
        folderId : "9",
        title :"folder c"
    },
    {
        folderId : "5",
        title :"folder d"
    },
    {
        folderId : "5",
        title :"folder e"
    },
    {
        folderId : "3",
        title :"folder a"
    }
]


// in this example if we do use for each than it will do return undefine where we will use map than it return a new array foreach doesnot return a value that has only use for read an array. 
// const mapNotes = notes.forEach((val)=> { 
const mapNotes = notes.map((val)=> {
    console.log('the value of the val is the ',val)
    return val
})

console.log('returning value of the notes after traversal using the map and forEach with the user choice',mapNotes)



// Reduce method in javascript . 

const Reduce_met = [ 3,4,6,34,7 ];

const sum = (a,b) => {
    return a+b;
}

const add = Reduce_met.reduce(sum);
console.log('the value of the add is the ',add);


// here the use of the array.from method of the javascript

const name =  'pawan';
console.log(typeof(name))// here it is the string 
const createArr = Array.from(name);
console.log(typeof(createArr))//here it will return a object because array type has the object
console.log("The value of the created array is the ",createArr)
// Now we will use the for in and for of loop for the practise and the understanding of the code 
for (const element of createArr) {
    console.log('value of the array is the : ',element)
}

for (const key in createArr) {
    console.log('Indexes of the array is : ',key);
}

