// use of the compare and the delete array functions here

const arr = [8, 4, 6, 7];
// before delete an array length of the array will 4 
const del = delete arr[0]
// after delete an array length of the array will be 4 
// so we can understand here on index 0 undefine value will be set here in this problem.
for (const i of arr) {
    console.log('the value of arr is ', i)
}
console.log('the value of the i is the ', arr.length);


const sort_arr = [44, 6, 3, 4, 35]

const sorted = sort_arr.sort((a, b) => { return a - b });
/* 
Sorting Steps
Comparison between 44 and 6:

a = 44, b = 6
a - b = 44 - 6 = 38 (positive) -> 6,44,3,4,35
Since the result is positive, 6 is placed before 44.
Comparison between 6 and 3:

a = 6, b = 3
a - b = 6 - 3 = 3 (positive) -> 3,6,44,4,35
Since the result is positive, 3 is placed before 6.
Comparison between 3 and 4:

a = 3, b = 4
a - b = 3 - 4 = -1 (negative) -> 3,6,44,4,35
Since the result is negative, 3 remains before 4.
Comparison between 4 and 35:

a = 4, b = 35
a - b = 4 - 35 = -31 (negative) -> 3,6,44,4,35
Since the result is negative, 4 remains before 35.
Comparison between 35 and 44:

a = 35, b = 44
a - b = 35 - 44 = -9 (negative) -> 3,6,4,35,44
Since the result is negative, 35 remains before 44.
 Final Sorted Array
After applying all the necessary comparisons, the array is sorted as:
[3, 4, 6, 35, 44]

 */

console.log("Sorted array here is :", sorted)


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 }
];

// const check here isArray

    const sorted_array = people.sort((a,b)=>{
        return a.age - b.age;
    })
    console.log(sorted_array)


    // const sortedByAgeThenName = people.sort((a, b) => {
    //     if (a.age === b.age) {
    //         return a.name.localeCompare(b.name);
    //     } else {
    //         return a.age - b.age;
    //     }
    // });
    // console.log(sortedByAgeThenName);
    